import * as React from "react";
import { useState, useMemo } from "react";
import "./header.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Modal } from "antd";

export default function MainColorMode({ onPageChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <a href="#" onClick={handleClick} className="HeaderLogo">
            Nikita Sosnovshchenko
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
          <button className="navBarBtn" onClick={showModal}>
            Contact me
          </button>
          <button className="navBarBtn">Info</button>
          <button className="navBarBtn" onClick={toggleDrawer(true)}>
            Menu
          </button>

          <Modal
            title="Contact me"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>
            }
          >
            <a href="https://github.com/darkotz?tab=overview&from=2024-12-01&to=2024-12-31">
              My GitHub
            </a>
          </Modal>

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
