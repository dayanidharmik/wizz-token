import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MainTitle from "../MainTitle/MainTitle";

function Profile({ totlenode }) {
  // console.log(totlenode);
  const navigate = useNavigate();
  const getdata = JSON.parse(localStorage.getItem("detelis"));

  /*=============LOGOUT FUNCTION===========*/
  const handleogout = (e) => {
    e.preventDefault();
    totlenode();
    localStorage.removeItem("detelis");
    localStorage.removeItem("token");
    navigate("/login");
  };

  //* Prevent User For Entering Spaces
  const preventSpace = (e) => {
    if (e.which === 32) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="container mx-auto px-10">
        <MainTitle title={"Profile"} />
        <div>
          <form className="nodetype-bg  rounded-2xl items-stretch sm:p-16  p-10 flex flex-col gap-5 justify-center md:w-1/2 mx-auto  mt-20  ">
            <div>
              <label className="text-white text-lg">User name</label>
              <div className="bot-left1 rounded-md  mt-1">
                <input
                  className={`w-full bg-transparent  p-2 outline-none focus:shadow-outline text-[#A9A9A9] text-lg`}
                  type="text"
                  name="username"
                  placeholder="User Name"
                  value={getdata?.username}
                  onKeyPress={preventSpace}
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
                  value={getdata?.email}
                />
              </div>
            </div>
            <div>
              <label className="text-white text-lg">Password</label>
              <div className="bot-left1 rounded-md  mt-1">
                <input
                  className={`w-full bg-transparent  p-2 outline-none focus:shadow-outline text-[#A9A9A9] text-lg`}
                  type="text"
                  name="username"
                  placeholder="password"
                  value={"******"}
                />
              </div>
            </div>
            {getdata ? (
              <div className="flex justify-end p-5 gap-5">
                <div onClick={handleogout}>
                  <Button btn={"logout"} />
                </div>

                <Button btn={"Save"} />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <Link to="/login">
                  <Button btn={"Log In/Sign Up"} />
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
