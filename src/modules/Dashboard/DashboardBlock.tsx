import { Box, IconButton, Typography } from "@mui/material";
import React, { FC, useState } from "react";

const DashboardBlock: FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "white",
        marginBottom: 2,
        border: "1px solid transparent",
        "&:hover": {
          //   dashed rounded border
          border: "1px dashed #ccc",
          borderRadius: 2,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "0.7em",
          marginBottom: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="subtitle2">{title}</Typography>
          <IconButton
            size="small"
            sx={{
              marginRight: 1,
              visibility: isHovered ? "visible" : "hidden",
            }}
          >
            <i className="fas fa-pen" style={{ fontSize: "0.7em" }}></i>
          </IconButton>
        </Box>
        {isHovered && (
          <IconButton size="small">
            <i className="fas fa-trash" style={{ fontSize: "0.7em" }}></i>
          </IconButton>
        )}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default DashboardBlock;
