import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MainTitle from "../MainTitle/MainTitle";
function Profile() {
  const navigate = useNavigate();
  /*=============LOGOUT FUNCTION===========*/
  const handleogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("detelis");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div className="container mx-auto ">
        <MainTitle title={"Profile"} />
        <div>
          <form className="nodetype-bg  rounded-2xl p-16 flex flex-col gap-5 justify-center md:w-1/2 mx-auto md:mt-44 mt-20  ">
            <div>
              <label className="text-white text-lg">User name</label>
              <div className="bot-left1 rounded-md  mt-1">
                <input
                  className={`w-full bg-transparent  p-2 outline-none focus:shadow-outline text-[#A9A9A9] text-lg`}
                  type="text"
                  name="username"
                  placeholder="User Name"
                />
              </div>
            </div>
            <div>
              <label className="text-white text-lg">Email</label>
              <div className="bot-left1 rounded-md  mt-1">
                <input
                  className={`w-full bg-transparent  p-2 outline-none focus:shadow-outline text-[#A9A9A9] text-lg`}
                  type="text"
                  name="username"
                  placeholder="Username@gmail.com"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label className="text-white text-lg">Password</label>
                <label className="golden text-base">Change Password</label>
              </div>

              <div className="bot-left1 rounded-md  mt-1">
                <input
                  className={`w-full bg-transparent  p-2 outline-none focus:shadow-outline text-[#A9A9A9] text-lg`}
                  type="text"
                  name="username"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex justify-end p-5 gap-5">
              <div onClick={handleogout}>
                {" "}
                <Button btn={"logout"} />
              </div>

              <Button btn={"Save"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
