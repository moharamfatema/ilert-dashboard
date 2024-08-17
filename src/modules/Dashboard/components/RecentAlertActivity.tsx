import { useContext, FC } from "react";

import { observer } from "mobx-react-lite";

import { Box } from "@mui/material";

import { GlobalContext } from "@/providers/GlobalContext";
import { useLogEntries } from "@/services/dashboard";
import Loading from "@/shared/Loading";
import { DataGrid } from "@mui/x-data-grid";
import { ACTIVITY_GRID_COLUMNS } from "@/constants/config";
import { Activity } from "@/types/resources";

const ActivityGrid: FC<{ data: Activity[] }> = ({ data }) => {
  return (
    <DataGrid
      columns={ACTIVITY_GRID_COLUMNS}
      rows={data}
      initialState={{
        sorting: {
          sortModel: [
            {
              field: "timestamp",
              sort: "desc",
            },
          ],
        },
      }}
    />
  );
};

const RecentAlertActivity = observer(() => {
  const { teamContext } = useContext(GlobalContext);
  const { data, error, isLoading } = useLogEntries({ teamContext });
  return (
    <Box>
      {isLoading && <Loading />}
      {error && <div>Error loading recent alert activity</div>}
      {data && <ActivityGrid data={data.data} />}
    </Box>
  );
});

export default RecentAlertActivity;
