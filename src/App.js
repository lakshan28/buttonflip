import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

import RefReact from "./components/RefReact";
import Timer from "./components/Timer";
import Selection from "./components/Selection";
import CommonSelection from "./components/CommonSelection";
import SelectionUsage from "./components/SelectionUsage";
import SnakBar from "./components/SnakBar";
import Proper from "./components/Proper";
import SpeedDial from "./components/SpeedDial";
import FaceBook from "./components/FaceBook";

import AppBar from "./components/AppBar";
import Counter from "./components/Counter";
export default function App() {
  return (
    <div>
      <FaceBook />
    </div>
  );
}
