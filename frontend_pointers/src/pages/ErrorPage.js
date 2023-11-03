import React from "react";

const ErrorPage = ({ judgeLink }) => {
  return (
    <div id="middleboxrightmargin">
      <p style={{ color: "red" }}>ERROR .. Page not found {judgeLink}</p>
    </div>
  );
};

export default ErrorPage;
