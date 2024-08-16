import React, { FC, useContext, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Title from "./Title";

const DashboardBlock: FC<{
  title: string;
  children: React.ReactNode;
  isEditMode: boolean;
  onDelete: () => void;
}> = ({ title, children, isEditMode, onDelete }) => {
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
          // cursor: "pointer",
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
        <Title title={title} isEditMode={isEditMode} isHovered={isHovered} />
        <IconButton
          size="small"
          sx={{
            visibility: isEditMode && isHovered ? "visible" : "hidden",
          }}
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </IconButton>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default DashboardBlock;
