import React from "react";
import BodyLeftMenuPanel from "./BodyLeftMenuPanel";
import BodyRightPanel from "./BodyRightPanel";

const Body = ({ judgePage }) => {
  return (
    <div id="middlebox">
      <BodyLeftMenuPanel />
      <BodyRightPanel judgePage={judgePage} />
    </div>
  );
};

export default Body;
