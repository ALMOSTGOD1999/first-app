import { useState } from "react";
import "./ColorBox.css";
export default function ColorBox({ colors }) {
  const idx = Math.floor(Math.random() * colors.length);
  const randomColor = colors[idx];
  const [color, setColor] = useState("purple");
  const changeColor = () => {
    setColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      className="ColorBox"
      style={{ backgroundColor: color }}
    ></div>
  );
}
