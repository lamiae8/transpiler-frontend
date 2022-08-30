import React from "react";
import { useState } from "react";

const SwitchButton = (props) => {
  const BUTTON_STYLING_FOCUS =
    "rounded-b-none border-b-4 border-b-gray-800 text-gray-900  font-medium border-2 border-gray-400 rounded-md  bg-indigo-200   shadow-md drop-shadow-lg  shadow-indigo-100/30  ml-2 h-16 w-40 ";
  const BUTTON_STYLING =
    "text-blue-800 font-medium border border-indigo-400 border-l-2 border-t-2 rounded-md  bg-indigo-200  hover:text-gray-900 shadow-sm drop-shadow-md hover:drop-shadow-xl shadow-indigo-100/50 ml-2 h-16 w-40";
  const [switchtype, setSwitchtype] = useState("text");
  //sending chosen type of input to Home.js
  const switchToTextOrFile = (event, value) => {
    setSwitchtype(value);
    props.switchToTextOrFile(value);
  };

  return (
    <>
      <div className="ml-20 my-4 ">
        <button
          className={
            switchtype === "text" ? BUTTON_STYLING_FOCUS : BUTTON_STYLING
          }
          onClick={(event) => {
            switchToTextOrFile(event, "text");
          }}
        >
          Transpile a Text <br />{" "}
          <span className="  text-xs">Alfa language</span>{" "}
        </button>

        <button
          className={
            switchtype === "file" ? BUTTON_STYLING_FOCUS : BUTTON_STYLING
          }
          onClick={(event) => {
            switchToTextOrFile(event, "file");
          }}
        >
          {" "}
          Transpile a File <br /> <span className="text-xs">(.alfa)</span>
        </button>
      </div>
    </>
  );
};
export default SwitchButton;
