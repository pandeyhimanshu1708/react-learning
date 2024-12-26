import { useState } from "react";
import { IoIosSwitch } from "react-icons/io"; // Importing the icon
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false); // Initial state is "Off"

  const handleToggleSwitch = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  return (
    <>
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          display: "inline-flex",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Toggle Switch
        <IoIosSwitch
          style={{ marginLeft: "10px", fontSize: "30px", color: "#4caf50" }}
        />
      </h1>
      <div className="toggle-container">
        <div
          className={`toggle-switch ${isOn ? "on" : "off"}`}
          onClick={handleToggleSwitch}
        >
          <div className={`switch ${isOn ? "on" : "off"}`} />
          <span className="switch-state">{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
