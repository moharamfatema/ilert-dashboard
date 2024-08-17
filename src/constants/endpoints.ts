export const DASHBOARD_VIEW_ID = "DASHBOARD";

const urlWithQuery = (url: string, params: Record<string, string>) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });
  return `${url}?${searchParams.toString()}`;
};

export const ENDPOINTS = {
  TEAMS: "/api/teams",
  CURRENT_USER: "/api/users/current",
  OPEN_ALERTS: "/api/alerts/count",
  VIEW_PREFERRENCES: (viewId: string) =>
    `/api/v1/user-view-preferences/${viewId}`,
  SERVICE_STATUS: (params: Record<string, string>) =>
    urlWithQuery("/api/services", params),
};
