import { Button, IconButton, Paper, Switch, Typography } from "@mui/material";
import React from "react";
import "./header.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShareIcon from "@mui/icons-material/Share";
import KeyIcon from "@mui/icons-material/Key";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { updateTheme } from "../../app/slice/themeSlice";

const Header = () => {
  const [checked, setChecked] = React.useState(true);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      dispatch(updateTheme("dark"));
    } else {
      dispatch(updateTheme("light"));
    }
  };
  return (
    <Paper>
      <div className="main-header">
        <Typography variant="h6" fontWeight={600}>
          Welcome back, Alex
        </Typography>

        <div>
          {mode === "dark" ? "Dark" : "Light"}
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Button
            variant="contained"
            sx={{ textTransform: "none", marginRight: "0.5rem" }}
            startIcon={<MonetizationOnIcon />}
          >
            Request Payout
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<ShareIcon />}
          >
            Share Matrices
          </Button>
          <IconButton aria-label="delete" color="primary">
            <KeyIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

export default Header;
