import { Container, Box, Divider } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBlock from "./DashboardBlock";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import {
  DashboardContext,
  DashboardProvider,
} from "@/providers/DashboardConfig";

const Dashboard = observer(() => {
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const dashboardConfig = useContext(DashboardContext);

  return (
    <DashboardProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DashboardHeader isEditMode={isEditMode} setEditMode={setEditMode} />
        <Divider />
        <Container
          maxWidth="xl"
          sx={{
            paddingY: 2,
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          {dashboardConfig.blocks.map((block) => (
            <DashboardBlock
              key={block.id}
              title={block.title}
              isEditMode={isEditMode}
              onDelete={() => dashboardConfig.removeBlock(block.id)}
            >
              {block.id}
            </DashboardBlock>
          ))}
        </Container>
      </Box>
    </DashboardProvider>
  );
});

export default Dashboard;
