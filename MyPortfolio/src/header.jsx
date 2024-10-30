import "./header.css";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = React.useState(false);

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
        <button onClick={toggleDrawer(anchor, true)}>Menu</button>

        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </div>
    </div>
  );
}
