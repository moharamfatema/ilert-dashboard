import React, { FC, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton } from "@mui/material";
import Title from "./Title";
const DashboardBlock: FC<{
  title: string;
  id: string;
  children: React.ReactNode;
  isEditMode: boolean;
  onDelete: () => void;
  onTitleChange: (title: string) => void;
}> = ({ title, children, isEditMode, onDelete, onTitleChange, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const borderStyle = isEditMode ? "1px dashed #ccc" : "1px solid transparent";
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "white",
        border: borderStyle,
        borderRadius: 2,
        "&:hover": {
          cursor: isEditMode ? "move" : "default",
        },
      }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
        <Title
          title={title}
          isEditMode={isEditMode}
          isHovered={isHovered}
          onTitleChange={onTitleChange}
        />
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
