import { useContext, FC } from "react";

import moment from "moment";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import { XAxis, Area, AreaChart, Tooltip } from "recharts";

import { GlobalContext } from "@/providers/GlobalContext";
import { useMetrics } from "@/services/dashboard";
import Loading from "@/shared/Loading";

const MetricGraph: FC<{ metric: { name: string; id: number } }> = observer(
  ({ metric }) => {
    const { teamContext } = useContext(GlobalContext);
    const { data, error, isLoading } = useMetrics({
      metricId: metric.id,
      teamContext,
    });
    return (
      <Box>
        {isLoading && <Loading />}
        {error && <div>Error loading metric {metric.name}</div>}
        {data && (
          <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="subtitle2">{metric.name}</Typography>
              <Typography variant="body2" color="grey">
                {`Avg : ${data.data.totalAgg.toFixed(2)} ms`}
              </Typography>
            </Box>
            <AreaChart
              data={data.data.series.map((v: number[]) => {
                return {
                  timestamp: moment(v[0]*1000).format("DD MMM"),
                  series: v[1],
                };
              })}
              width={1200}
              height={300}
            >
              <Area type="monotone" dataKey="series" stroke="#409ee7" fill="#c8e3f8" />
              <XAxis dataKey="timestamp" />
              <Tooltip />
            </AreaChart>
          </Box>
        )}
      </Box>
    );
  },
);

const Metrics: FC = observer(() => {
  const { availableMetrics } = useContext(GlobalContext);
  return (
    <Box>
      {availableMetrics.length === 0 && <Loading />}
      {availableMetrics.length > 0 &&
        availableMetrics.map((metric: { id: number; name: string }) => (
          <MetricGraph key={metric.id} metric={metric} />
        ))}
    </Box>
  );
});

export default Metrics;
