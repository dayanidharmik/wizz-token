import React from "react";
import "../Login/SignUp.css";
import Dashboard from "./Dashboard/Dashboard";

import NodeTypes from "./nodeTypes/NodeTypes";
function dashboard() {
  return (
    <>
      <Dashboard />
      <NodeTypes />
    </>
  );
}

export default dashboard;
