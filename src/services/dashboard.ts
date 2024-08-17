import useSWR from "swr";

import { ENDPOINTS } from "@/constants/endpoints";
import { getContextualizedResource } from "./util";

export const useContextualizedResource = (url: string, teamContext: number) => {
  return useSWR([url, teamContext], ([url, teamContext]) =>
    getContextualizedResource(url, teamContext),
  );
};

export const useOpenAlerts = ({ teamContext }: { teamContext: number }) => {
  const pending = useContextualizedResource(ENDPOINTS.OPEN_ALERTS+"?states=PENDING", teamContext);
  const accepted = useContextualizedResource(ENDPOINTS.OPEN_ALERTS+"?states=ACCEPTED", teamContext);
  return {pending, accepted};
};

export const useServiceStatus = ({ teamContext }: { teamContext: number }) => {
  const url = ENDPOINTS.SERVICE_STATUS({
    include: "uptime",
  });
  return useContextualizedResource(url, teamContext);
};

export const useIncidents = ({ teamContext }: { teamContext: number }) => {
  const url = ENDPOINTS.INCIDENTS;
  return useContextualizedResource(url, teamContext);
}

export const useLogEntries = ({ teamContext }: { teamContext: number }) => {
  const url = ENDPOINTS.LOG_ENTRIES;
  return useContextualizedResource(url, teamContext);
}
