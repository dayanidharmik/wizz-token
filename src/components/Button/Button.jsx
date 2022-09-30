import React from "react";
import "../Login/SignUp.css";
function Button({btn}) {
  return (
    <>
      <button className="btn-bg  text-white  text-lg font-semibold px-5 py-2 rounded-full text-center" type="submit">{btn}</button>
    </>
  );
}

export default Button;
