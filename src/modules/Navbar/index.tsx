import React, { FC, ReactNode } from "react";
import { AppBar, Box, IconButton, Toolbar, Button } from "@mui/material";
import TeamsMenu from "./TeamsMenu";
import ChevronDown from "@/shared/icons/ChevronDown";

const DummyDropdown: FC<{ title: string | ReactNode }> = ({ title }) => (
  <Button
    size="small"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: "white",
      padding: "0",
    }}
  >
    {title} <ChevronDown />
  </Button>
);

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "rgb(4, 52, 96)" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: " 1em",
              alignItems: "center",
            }}
          >
            {/* TODO: wrap with ul */}
            <a href="/">
              <img
                src="https://cdn.ilert.com/jakarta.faces.resource/ilert_header_logo.png.xhtml?ln=images"
                alt="logo"
                width="80px"
              />
            </a>
            <DummyDropdown title="Alerts" />
            <DummyDropdown title="Incidents" />
            <DummyDropdown title="Services" />
            <DummyDropdown title="Teams" />
            <DummyDropdown title="Reports" />
          </Box>
          <Box sx={{ display: "flex", gap: " 1em", alignItems: "center" }}>
            {/* TODO: wrap with ul */}
            <TeamsMenu />
            <IconButton
              sx={{
                gap: "5px",
                display: "flex",
                color: "white",
                margin: "0",
                padding: "0",
              }}
              size="small"
            >
              <i className="fa-solid fa-gear"></i>
              <ChevronDown />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                width: "20px",
                height: "20px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              size="small"
            >
              <i
                className="fa-solid fa-user"
                style={{
                  fontSize: "0.6em",
                  color: "rgb(4, 52, 96)",
                }}
              ></i>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
