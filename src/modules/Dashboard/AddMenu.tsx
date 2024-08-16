import { FC, useContext } from "react";
import { Menu, MenuItem, MenuProps } from "@mui/material";
import { observer } from "mobx-react-lite";

import { DashboardContext } from "@/providers/DashboardConfig";

const AddMenu: FC<
  {
    open: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
  } & MenuProps
> = observer(({ open, anchorEl, handleClose, ...props }) => {
  const dashboardConfig = useContext(DashboardContext);
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      {...props}
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
  );
});

export default AddMenu;
