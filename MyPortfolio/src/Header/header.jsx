import * as React from "react";
import { useState } from "react";
import "./header.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

export default function Header({ onPageChange }) {
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
              style={{ textAlign: "center", color: "#859f3d" }}
            >
              menu
            </Typography>
            <button
              className="button-drawer"
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
  );
}
