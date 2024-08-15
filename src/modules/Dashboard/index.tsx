import React from "react";
import { Container, Box, Divider } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBlock from "./DashboardBlock";

const blocks = [
    'Open Alerts',
    'Recent Alert Activity',
    'Service Status',
    'Open Incidents',
    'Metrics',
];

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DashboardHeader selectedTeam="Team 1" />
      <Divider />
      <Container
        maxWidth="xl"
        sx={{
          paddingY: 2,
        }}
      >
        <DashboardBlock title="Open Alerts">
            <Box>Alert 1</Box>
            <Box>Alert 2</Box>
            <Box>Alert 3</Box>
        </DashboardBlock>
        <DashboardBlock title="Recent Alert Activity">
            <Box>Activity 1</Box>
            <Box>Activity 2</Box>
            <Box>Activity 3</Box>
        </DashboardBlock>
        <DashboardBlock title="Service Status">
            <Box>Status 1</Box>
            <Box>Status 2</Box>
            <Box>Status 3</Box>
            <Box>Status 3</Box>
            <Box>Status 3</Box>
            <Box>Status 3</Box>
            <Box>Status 3</Box>
        </DashboardBlock>
      </Container>
    </Box>
  );
};

export default Dashboard;
