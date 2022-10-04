import React from "react";
import "../Login/SignUp.css";
function Button({ btn }) {
  return (
    <div className="bot-left1 font-semibold rounded-full text-center">
      <button
        className="golden md:text-lg  px-5 py-2 "
        type="submit"
      >
        {btn}
      </button>
    </div>
  );
}

export default Button;
