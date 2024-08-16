import React, { createContext, PropsWithChildren } from "react";
import { Team, User } from "@/types/resources";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { getAuthorizedResource } from "@/services/util";
import { ENDPOINTS } from "@/constants/endpoints";

export const ALL_TEAMS = "All Teams";
export const MY_TEAMS = "My Teams";

class GlobalConfig {
  @observable user: User | null = null;
  @observable teams: Team[] = [];
  @observable selectedTeam: string = ALL_TEAMS;
  @computed get myTeams() {
    if (!this.user) return [];
    return this.teams.filter((team) =>
      team.members.some((member) => member.user.id === this.user?.id),
    );
  }

  constructor() {
    makeAutoObservable(this);
    this.fetchData();
  }

  async fetchData() {
    const userResponse = await getAuthorizedResource(ENDPOINTS.CURRENT_USER);
    this.user = userResponse.data;
    const teamsResponse = await getAuthorizedResource(ENDPOINTS.TEAMS);
    this.teams = teamsResponse.data;
    this.selectedTeam = ALL_TEAMS;
  }
  @action setSelectedTeam(teamName: string) {
    this.selectedTeam = teamName;
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
