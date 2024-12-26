import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false); // Initial state is "Off"

  const handleToggleSwitch = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  return (
    <div className="toggle-container">
      <div
        className={`toggle-switch ${isOn ? "on" : "off"}`}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`} />
        <span className="switch-state">{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
