import { React, useEffect, useState } from "react";

import SwitchButton from "./SwitchButton";
import Panel from "./Panel";

import fleche from "../images/icons8-chevron-droit-64.png";

function Home() {
  //setting the switch state
  const [switchType, setSwitchType] = useState("text");
  //getting which type of upload to show (file or text)
  const switchToTextOrFile = (value) => {
    setSwitchType(value);
    console.log(value);
  };

  useEffect(() => {});

  // wallet
  return (
    <>
      <SwitchButton switchToTextOrFile={switchToTextOrFile} />

      <Panel switchType={switchType} />
    </>
  );
}
export default Home;
