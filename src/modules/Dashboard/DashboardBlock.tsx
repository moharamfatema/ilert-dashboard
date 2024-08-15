import { Box, IconButton, Typography } from "@mui/material";
import React, { FC, useState } from "react";

const DashboardBlock: FC<{
  title: string;
  children: React.ReactNode;
  isEditMode?: boolean;
}> = ({ title, children, isEditMode = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderStyle = isEditMode ? "1px dashed #ccc" : "1px solid transparent";
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "white",
        border: borderStyle,
        borderRadius: 2,
        "&:hover": {
          // hand cursor
        //   cursor: "pointer",
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
              marginRight: 2,
              visibility: isEditMode && isHovered ? "visible" : "hidden",
            }}
          >
            <i className="fas fa-pen" style={{ fontSize: "0.7em" }}></i>
          </IconButton>
        </Box>
        <IconButton
          size="small"
          sx={{
            visibility: isEditMode && isHovered ? "visible" : "hidden",
          }}
        >
          <i className="fas fa-trash" style={{ fontSize: "0.7em" }}></i>
        </IconButton>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default DashboardBlock;
