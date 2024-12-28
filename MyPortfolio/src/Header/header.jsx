import * as React from "react";
import { useState, useMemo } from "react";
import "./header.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function MainColorMode({ onPageChange }) {
  const [darkMode, setDarkMode] = useState(true);

  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    []
  );

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="headerMain">
        <div className="logo">
          <a
            href="#"
            onClick={handleClick}
            className={isFlipped ? "Flipped" : ""}
          >
            Nikita Sosnovshchenko.
          </a>
        </div>
        <div className="btnGroup">
          <div style={{ textAlign: "center", padding: "20px" }}>
            <Button
              variant="contained"
              onClick={toggleTheme}
              style={{ borderRadius: "70%", height: "40px", width: "20px" }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </div>
          <button className="navBarBtn">Contact me</button>
          <button className="navBarBtn">Info</button>
          <button className="navBarBtn" onClick={toggleDrawer(true)}>
            Menu
          </button>

          <Drawer
            className="drawer"
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <div className="drawer-content">
              <Typography
                variant="h3"
                gutterBottom
                style={{ textAlign: "center", color: "#483D8B" }}
              >
                menu
              </Typography>
              <button
                className="button-drawer"
                onClick={() => onPageChange("home")}
              >
                Main
              </button>
              <button
                className="button-drawer"
                onClick={() => onPageChange("schedule")}
              >
                Schedule
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </ThemeProvider>
  );
}
