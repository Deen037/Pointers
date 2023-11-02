import React from "react";
import LeftMenuPanel from "./body/LeftMenuPanel";
import RightPanel from "./body/RightPanel";

const Body = ({ judgePage }) => {
  return (
    <div id="middlebox">
      <LeftMenuPanel />
      <RightPanel judgePage={judgePage} />
    </div>
  );
};

export default Body;
