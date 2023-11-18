import React from "react";
import BodyLeftMenuPanel from "./BodyLeftMenuPanel";
import BodyRightPanel from "./BodyRightPanel";

const Body = ({ judgePage }) => {
  return (
    <div className="middlebox">
      <BodyLeftMenuPanel />
      <BodyRightPanel judgePage={judgePage} />
    </div>
  );
};

export default Body;
