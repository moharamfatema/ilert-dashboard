import { FC, Fragment, useContext, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import { GlobalContext } from "@/providers/GlobalContext";
import { DashboardContext } from "@/providers/DashboardConfig";

import ChevronDown from "@/shared/icons/ChevronDown";

const AddMenu: FC = observer(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dashboardConfig = useContext(DashboardContext);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button variant="outlined" size="small" onClick={handleClick}>
        Add &nbsp;
        <ChevronDown />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {dashboardConfig.missingBlocks.length !== 0 ? (
          dashboardConfig.missingBlocks.map((block) => (
            <MenuItem
              key={block.id}
              onClick={() => dashboardConfig.addBlock(block.id)}
            >
              {block.title}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No more blocks to add</MenuItem>
        )}
      </Menu>
    </Fragment>
  );
});

const DashboardHeader: FC<{
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
}> = observer(({ isEditMode, setEditMode }) => {
  const globalConfig = useContext(GlobalContext);
  const dashboardConfig = useContext(DashboardContext);

  return (
    <Container
      component="header"
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 2,
        background: "#f5f5f5",
      }}
    >
      <Typography variant="h6">
        Dashboard / {globalConfig.selectedTeam}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {!isEditMode ? (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </Button>
        ) : (
          <Fragment>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                dashboardConfig.saveBlocks();
                setEditMode(false);
              }}
            >
              Save
            </Button>
            <AddMenu />
          </Fragment>
        )}
      </Box>
    </Container>
  );
});

export default DashboardHeader;
