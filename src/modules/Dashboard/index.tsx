import { Container, Box, Divider, Typography } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBlock from "./DashboardBlock";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import {
  DashboardContext,
  DashboardProvider,
} from "@/providers/DashboardConfig";
import AddMenu from "./AddMenu";

const Dashboard = observer(() => {
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const dashboardConfig = useContext(DashboardContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
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
              onTitleChange={(title) =>
                dashboardConfig.changeBlock(block.id, title)
              }
            >
              {block.id}
            </DashboardBlock>
          ))}
          {isEditMode && dashboardConfig.missingBlocks.length !== 0 && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                paddingY: 5,
                border: "1px dashed #ccc",
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <Typography variant="subtitle2">
                <i className="fas fa-plus"></i>
                &nbsp; Add
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <AddMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        anchorOrigin={{
          horizontal: "center",
          vertical: "center",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      />
    </DashboardProvider>
  );
});

export default Dashboard;
