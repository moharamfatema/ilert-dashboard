import { useContext } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";

import { GlobalContext } from "@/providers/GlobalContext";

const DashboardHeader = observer(() => {
  const globalConfig = useContext(GlobalContext);

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
        <Button variant="outlined" size="small">
          Edit
        </Button>
      </Box>
    </Container>
  );
});

export default DashboardHeader;
