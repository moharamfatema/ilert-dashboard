import { FC, useState, Fragment } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";

const DashboardBlockTitle: FC<{
  title: string;
  isEditMode: boolean;
  isHovered: boolean;
  onTitleChange: (title: string) => void;
}> = ({ title, isEditMode, isHovered, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.target as any).title.value;
    if (title.trim() === "") return;
    onTitleChange(title);
    setIsEditing(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {isEditing ? (
        <form onSubmit={onSubmit}>
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
            name="title"
          />
          <IconButton
            size="small"
            sx={{
              visibility: isEditMode && isHovered ? "visible" : "hidden",
            }}
            type="submit"
          >
            <i className="fas fa-check"></i>
          </IconButton>
        </form>
      ) : (
        <Fragment>
          <Typography
            variant="subtitle2"
            sx={{
              paddingY: "1px",
              borderBottom: "2px solid transparent",
              marginRight: 2,
              cursor: "text",
            }}
            onClick={() => {
              isEditMode && setIsEditing(true);
            }}
          >
            {title}
          </Typography>
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
        </Fragment>
      )}
    </Box>
  );
};

export default DashboardBlockTitle;
