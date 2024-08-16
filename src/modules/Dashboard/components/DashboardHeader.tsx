import { FC, Fragment, useContext, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";

import { GlobalContext } from "@/providers/GlobalContext";
import { DashboardContext } from "@/providers/DashboardConfig";

import ChevronDown from "@/shared/icons/ChevronDown";
import AddMenu from "./AddMenu";

const AddMenuButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Fragment>
      <Button variant="outlined" size="small" onClick={handleClick}>
        Add &nbsp;
        <ChevronDown />
      </Button>
      <AddMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Fragment>
  );
};

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
            <AddMenuButton />
          </Fragment>
        )}
      </Box>
    </Container>
  );
});

export default DashboardHeader;
