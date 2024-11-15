import * as React from "react";
import { useState } from "react";
import "./header.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Tab } from "@mui/material";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleButtonClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
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
              onClick={() => handleButtonClick("tab1")}
              className="button-drawer"
            >
              schedule
            </button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
