import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ChevronDown from "@/shared/icons/ChevronDown";

const DashboardHeader = ({ selectedTeam }) => {
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
      <Typography variant="h6">Dashboard / {selectedTeam}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Button variant="outlined" size="small">
          Edit
        </Button>
      </Box>
    </Container>
  );
};

export default DashboardHeader;
