import { FC, useContext } from "react";
import moment from "moment";
import { Box, Typography, Button } from "@mui/material";
import { observer } from "mobx-react-lite";

import { Incident } from "@/types/resources";
import { GlobalContext } from "@/providers/GlobalContext";
import { useIncidents } from "@/services/dashboard";
import Loading from "@/shared/Loading";

import { getServiceIcon } from "./util";

const IncidentBox: FC<{ incident: Incident }> = ({ incident }) => {
  return (
    <Box
      sx={{
        padding: 2,
        border: 1,
        borderColor: "#ccc",
        borderRadius: 1,
        marginY: 1,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 3fr",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {incident.summary}
          </Typography>
          <Box
            sx={{
              padding: 0.25,
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: 1,
              color: "primary.main",
              textAlign: "center",
            }}
          >
            <Typography variant="body2">{incident.status}</Typography>
          </Box>
        </Box>
        <Button variant="outlined">Update</Button>
      </Box>
      <Typography variant="body2" color="gray">
        <strong>{moment(incident.createdAt).fromNow()}</strong>
        {" - " + incident.message}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {incident.affectedServices.map((service) => (
          <Box
            key={service.service.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {getServiceIcon(service.service.status)}{" "}
            <Typography variant="body1" component="span" color="primary">
              {service.service.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const OpenIncidents = observer(() => {
  const { teamContext } = useContext(GlobalContext);
  const { data, error, isLoading } = useIncidents({ teamContext });

  const filteredData =
    data?.data.filter((incident: Incident) => incident.status !== "RESOLVED") ||
    [];
  return (
    <Box>
      {isLoading && <Loading />}
      {error && <div>Error: {error.message}</div>}
      {data ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {filteredData.length === 0 ? (
            <Typography variant="body1" color="gray">
              No open incidents
            </Typography>
          ) : (
            filteredData.map((incident: Incident) => (
              <IncidentBox key={incident.id} incident={incident} />
            ))
          )}
        </Box>
      ) : (
        <Typography variant="body1" color="gray">
          No open incidents
        </Typography>
      )}
    </Box>
  );
});

export default OpenIncidents;
