import * as React from "react";
import { useState, useMemo } from "react";
import "./header.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, CssBaseline, Button } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function MainColorMode({ onPageChange }) {

  const [darkMode, setDarkMode] = useState(false)

  const lightTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: 'light',
      },
    }), []
  );

  const darkTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: 'dark',
      },
    }), []
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      <div style={{ textAlign: 'center', padding: '20px' }}>
        
        <Button variant="contained" onClick={toggleTheme}>
          Переключить на {darkMode ? <LightModeIcon/> : <DarkModeIcon/>} тему
        </Button>
      </div>
        <button>Contact me</button>
        <button>Info</button>
        <button onClick={toggleDrawer(true)}>Menu</button>

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
              className="butto  n-drawer"
              onClick={() => onPageChange("home")}
            >
              Главная
            </button>
            <button
              className="button-drawer"
              onClick={() => onPageChange("schedule")}
            >
              Расписание
            </button>
          </div>
        </Drawer>
      </div>
    </div>
    </ThemeProvider>
  );
}

