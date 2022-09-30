import React from "react";
import MyNodedetalis from "./MyNodedetalis/MyNodedetalis";
import Search from "./Search/Search";
import UserData from "./Userd/UserData";

function MyNode() {
  return (
    <div>
      <Search />
      <UserData />
      <MyNodedetalis />
    </div>
  );
}

export default MyNode;
