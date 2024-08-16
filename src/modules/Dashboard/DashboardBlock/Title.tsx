import { FC, useState } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";

const DashboardBlockTitle: FC<{
  title: string;
  isEditMode: boolean;
  isHovered: boolean;
}> = ({ title, isEditMode, isHovered }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {isEditing ? (
        <TextField
          size="small"
          defaultValue={title}
          variant="standard"
          sx={{
            width: "150px",
            marginRight: 2,
            border: "none",
            padding: 0,
          }}
          inputProps={{
            sx: {
              fontSize: "0.875rem",
              fontWeight: 500,
            },
          }}
        />
      ) : (
        <Typography
          variant="subtitle2"
          sx={{
            paddingY: "1px",
            borderBottom: "2px solid transparent",
            marginRight: 2,
          }}
          onClick={() => setIsEditing(true)}
        >
          {title}
        </Typography>
      )}
      {isEditing ? (
        <IconButton
          size="small"
          sx={{
            visibility: isEditMode && isHovered ? "visible" : "hidden",
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          <i className="fas fa-check"></i>
        </IconButton>
      ) : (
        <IconButton
          size="small"
          sx={{
            marginRight: 2,
            visibility: isEditMode && isHovered ? "visible" : "hidden",
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          <i className="fas fa-pen"></i>
        </IconButton>
      )}
    </Box>
  );
};

export default DashboardBlockTitle;
