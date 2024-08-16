import React, { FC, Fragment, useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import { Button, Divider, Menu, MenuItem } from "@mui/material";

import { Team } from "@/types/resources";
import { MY_TEAMS, ALL_TEAMS, GlobalContext } from "@/providers/GlobalContext";

const MenuItems: FC<{
  teams: Team[];
  onItemClick: (teamName: string) => void;
}> = ({ teams, onItemClick }) => {
  return (
    <Fragment>
      {teams.map((team: Team) => (
        <MenuItem
          key={team.id}
          onClick={() => {
            onItemClick(team.name);
          }}
        >
          {team.name}
        </MenuItem>
      ))}
      <Divider />
      <MenuItem
        onClick={() => {
          onItemClick(MY_TEAMS);
        }}
      >
        My Teams
      </MenuItem>
      <MenuItem
        onClick={() => {
          onItemClick(ALL_TEAMS);
        }}
      >
        All Teams
      </MenuItem>
    </Fragment>
  );
};

const TeamsMenu = observer(() => {
  const globalConfig = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onItemClick = (teamName: string) => {
    globalConfig.setSelectedTeam(teamName);
    handleClose();
  };
  return (
    // TODO: me
    <div>
      <Button
        startIcon={<i className="fa-solid fa-users"></i>}
        sx={{ color: "white" }}
        size="small"
        onClick={handleClick}
      >
        {globalConfig.selectedTeam}
      </Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItems teams={globalConfig.teams} onItemClick={onItemClick} />
      </Menu>
    </div>
  );
});

export default TeamsMenu;
