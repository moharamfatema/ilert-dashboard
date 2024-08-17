import { useContext, FC, Fragment } from "react";
import { observer } from "mobx-react-lite";

import { Box, Typography } from "@mui/material";

import { GlobalContext } from "@/providers/GlobalContext";
import { useOpenAlerts } from "@/services/dashboard";
import Loading from "@/shared/Loading";

const AlertCount: FC<{ count: number; title: string }> = ({ count, title }) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        paddingY: 2,
        paddingX: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5" color="primary">
        {count}
      </Typography>
    </Box>
  );
};

const OpenAlerts = observer(() => {
  const { teamContext } = useContext(GlobalContext);
  const { pending, accepted } = useOpenAlerts({ teamContext });
  const isLoading = pending.isLoading || accepted.isLoading;
  const error = pending.error || accepted.error;
  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
      }}
    >
      {isLoading && <Loading />}
      {error && <Typography>Error: {error.message}</Typography>}
      {pending.data && accepted.data && (
        <Fragment>
          <AlertCount count={pending.data?.data.count} title="Pending Alerts" />
          <AlertCount
            count={accepted.data?.data.count}
            title="Accepted Alerts"
          />
        </Fragment>
      )}
    </Box>
  );
});

export default OpenAlerts;
