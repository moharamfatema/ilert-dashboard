import { Fragment, useContext } from "react";

import { observer } from "mobx-react-lite";
import moment from "moment";

import { Box, Typography } from "@mui/material";

import { GlobalContext } from "@/providers/GlobalContext";
import { useServiceStatus } from "@/services/dashboard";
import Loading from "@/shared/Loading";
import { Service } from "@/types/resources";

const getServiceIcon = (status: string) => {
  switch (status) {
    case "OPERATIONAL":
      return (
        <i className="fas fa-check-circle large" style={{ color: "green" }}></i>
      );
    case "MAJOR_OUTAGE" || "PARTIAL_OUTAGE":
      return (
        <i
          className="fas fa-exclamation-circle large"
          style={{ color: "red" }}
        ></i>
      );
    default:
      return (
        <i
          className="fas fa-circle-minus large"
          style={{ color: "orange" }}
        ></i>
      );
  }
};

const ServiceStatusPresenter = ({ data }: { data: Service[] }) => {
  return (
    <Fragment>
      {data.length !== 0 ? (
        data.map((service) => (
          <Box
            key={service.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              gap: 1,
            }}
          >
            {getServiceIcon(service.status)}{" "}
            <Typography variant="body1" component="span" color="primary">
              {service.name}
            </Typography>
            <Typography variant="caption" component="span" color="gray">
              {`${service.uptime.uptimePercentage.p90.toFixed(2)}% uptime in the past ${Math.min(
                90,
                +moment()
                  .diff(moment(`${service.uptime.rangeStart}`), "days", true)
                  .toFixed(2),
              )} day(s)`}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="gray">
          No services to display
        </Typography>
      )}
    </Fragment>
  );
};

const ServiceStatus = observer(() => {
  const { teamContext } = useContext(GlobalContext);
  const { data, error, isLoading } = useServiceStatus({ teamContext });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {isLoading && <Loading />}
      {error && <div>Error: {error.message}</div>}
      {data && <ServiceStatusPresenter data={data.data} />}
    </Box>
  );
});

export default ServiceStatus;
