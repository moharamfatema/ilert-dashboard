export const DASHBOARD_VIEW_ID = "DASHBOARD";
export const ENDPOINTS = {
  TEAMS: "/api/teams",
  CURRENT_USER: "/api/users/current",
  OPEN_ALERTS: "/api/alerts/count",
  VIEW_PREFERRENCES: (viewId: string) =>
    `/api/v1/user-view-preferences/${viewId}`,
};
