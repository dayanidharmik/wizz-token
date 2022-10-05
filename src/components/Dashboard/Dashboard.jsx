import React from "react";
import "../Login/SignUp.css";
import Dashboard from "./Dashboard/Dashboard";
import NodeTypes from "./nodeTypes/NodeTypes";

function dashboard({totlenode}) {
  // console.log(totlenode,"totlenode");
  return (
    <>
      <Dashboard totlenode={totlenode}/>
      <NodeTypes />
    </>
  );
}

export default dashboard;
