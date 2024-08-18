import React, { createContext, PropsWithChildren } from "react";
import { Team } from "@/types/resources";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { getAuthorizedResource, getContextualizedResource } from "@/services/util";
import { ENDPOINTS } from "@/constants/endpoints";

export const ALL_TEAMS = "All Teams";
export const MY_TEAMS = "My Teams";

class GlobalConfig {
  @observable teams: Team[] = [];
  @observable selectedTeam: string = ALL_TEAMS;
  @observable availableMetrics = [];

  @computed get teamContext() {
    switch (this.selectedTeam) {
      case ALL_TEAMS:
        return 0;
      case MY_TEAMS:
        return -1;
      default:
        return (
          this.teams.find((team) => team.name === this.selectedTeam)?.id || 0
        );
    }
  }
  constructor() {
    makeAutoObservable(this);
    this.fetchData();
  }
  async fetchAvailableMetrics() {
    return await getContextualizedResource(
      ENDPOINTS.METRICS.LIST,
      this.teamContext,
    );
  }
  async fetchData() {
    const teamsResponse = await getAuthorizedResource(ENDPOINTS.TEAMS);
    this.setTeams(teamsResponse.data);
    this.setSelectedTeam(ALL_TEAMS);
    const metricsResponse = await this.fetchAvailableMetrics();
    this.setAvailableMetrics(metricsResponse.data);
  }
  @action setSelectedTeam(teamName: string) {
    this.selectedTeam = teamName;
  }

  @action async setTeams(teams: Team[]) {
    this.teams = teams;
    const result = await this.fetchAvailableMetrics();
    this.availableMetrics = result.data;
  }
  @action setAvailableMetrics(metrics: any) {
    this.availableMetrics = metrics;
  }
}

const globalConfig = new GlobalConfig();
const GlobalContext = createContext<GlobalConfig>(globalConfig);

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalConfig}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
