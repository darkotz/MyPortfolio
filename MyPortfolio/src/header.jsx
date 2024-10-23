import "./header.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);

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
        <button>Meny</button>
      </div>
    </div>
  );
}
