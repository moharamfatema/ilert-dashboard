import { Activity, Alert, Block } from "@/types/resources";
import { Box } from "@mui/material";
import moment from "moment";

export const DEFAULT_BLOCKS: Block[] = [
  {
    id: "open-alerts",
    title: "Open Alerts",
  },
  {
    id: "recent-alert-activity",
    title: "Recent Alert Activity",
  },
  {
    id: "service-status",
    title: "Service Status",
  },
  {
    id: "open-incidents",
    title: "Open Incidents",
  },
  {
    id: "metrics",
    title: "Metrics",
    options: {},
  },
];

export const ACTIVITY_GRID_COLUMNS = [
  // alert source
  {
    field: "source",
    headerName: "Alert Source",
    width: 200,
    renderCell: (value) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={value.row.alert.alertSource.iconUrl}
          alt={value.row.alert.alertSource.name}
          style={{ width: 20, height: 20, marginRight: 5 }}
        />
        {value.row.alert.alertSource.name}
      </Box>
    ),
  },
  {
    field: "alert",
    valueGetter: (value: Alert) => {
      return value.summary;
    },
    headerName: "Alert",
    width: 400,
  },
  {
    field: "timestamp",
    valueFormatter: (value: string) => {
      return moment(value).fromNow();
    },
    headerName: "Time",
    width: 200,
  },
  {
    field: "text",
    renderCell: (value:Activity) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <i className={value.row.iconClass + " med"}></i>
          {value.row.text}
        </Box>
      );
    },
    headerName: "Activity",
    width: 400,
  },
];
