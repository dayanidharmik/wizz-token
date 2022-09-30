import React from "react";
import daleft from "../img/da-left.png";
import daright from "../img/daright.png";
function MainTitle({title}) {
  return (
    <>
      <div className="flex justify-center items-center gap-5 text-center text-white text-3xl font-extrabold ">
        <div className="max-w-lg">
          <img src={daleft} alt="" />
        </div>
        <p className="lg:text-3xl text-2xl">{title}</p>
        <div className="max-w-lg">
          <img src={daright} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainTitle;
