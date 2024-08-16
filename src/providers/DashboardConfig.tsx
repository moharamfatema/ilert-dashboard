import { createContext, PropsWithChildren } from "react";
import { action, observable, makeAutoObservable, computed } from "mobx";
import {
  getAuthorizedResource,
  mutateAuthorizedResource,
} from "@/services/util";
import { DASHBOARD_VIEW_ID, ENDPOINTS } from "@/constants/endpoints";
import { DEFAULT_BLOCKS } from "@/constants/config";
import { Block } from "@/types/resources";


class DashboardConfig {
  @observable blocks: Block[] = [];
  constructor() {
    makeAutoObservable(this);
    this.fetchBlocks();
  }
  @computed get missingBlocks() {
    return DEFAULT_BLOCKS.filter(
      (defaultBlock) =>
        !this.blocks.find((block) => block.id === defaultBlock.id),
    );
  }
  @action addBlock(blockId: string) {
    this.blocks.push(DEFAULT_BLOCKS.find((block) => block.id === blockId)!);
  }
  @action removeBlock(blockId: string) {
    this.blocks = this.blocks.filter((block) => block.id !== blockId);
  }
  @action async fetchBlocks() {
    const response = await getAuthorizedResource(
      ENDPOINTS.VIEW_PREFERRENCES(DASHBOARD_VIEW_ID),
    );
    this.blocks = response?.data.blocks || [];
  }
  @action changeBlock(blockId: string, title: string, options: any = {}) {
    const block = this.blocks.find((block) => block.id === blockId);
    if (!block) return;
    block.title = title;
    block.options = options;
  }
  @action setBlocks(blocks: Block[]) {
    this.blocks = blocks;
  }

  @action saveBlocks() {
    mutateAuthorizedResource(
      ENDPOINTS.VIEW_PREFERRENCES(DASHBOARD_VIEW_ID),
      JSON.stringify({ blocks: this.blocks }),
      "PUT",
    ).then((response) => {
      this.blocks = response.data.blocks;
    });
  }
  @action initializeBlocks() {
    mutateAuthorizedResource(
      ENDPOINTS.VIEW_PREFERRENCES(DASHBOARD_VIEW_ID),
      JSON.stringify({ blocks: DEFAULT_BLOCKS }),
      "PUT",
    ).then((response) => {
      this.blocks = response.data.blocks;
    });
  }
}

const dashboardConfig = new DashboardConfig();
const DashboardContext = createContext<DashboardConfig>(dashboardConfig);

const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DashboardContext.Provider value={dashboardConfig}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider, DashboardContext };
