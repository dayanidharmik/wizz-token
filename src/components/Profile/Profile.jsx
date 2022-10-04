import React from "react";
import Button from "../Button/Button";
import MainTitle from "../MainTitle/MainTitle";
function Profile() {
  return (
    <div>
      <div className="container mx-auto ">
        <MainTitle title={"Profile"} />
        <div>
          <form className="flex flex-col gap-5 justify-center md:w-1/2 mx-auto md:mt-44 mt-20 p-5">
            <div>
              <label className="text-white text-lg">User name</label>
              <input
                className={`w-full mt-1 border rounded-md py-2 px-8 outline-none focus:shadow-outline text-[#030239] text-2xl`}
                type="text"
                name="username"
                placeholder="User Name"
              />
            </div>
            <div>
              <label className="text-white text-lg">Email</label>
              <input
                className={`w-full mt-1 border rounded-md py-2 px-8 outline-none focus:shadow-outline text-[#030239] text-2xl`}
                type="text"
                name="username"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="text-white text-lg">chang password</label>
              <input
                className={`w-full mt-1 border rounded-md py-2 px-8 outline-none focus:shadow-outline text-[#030239] text-2xl`}
                type="text"
                name="username"
                placeholder="chang password"
              />
            </div>
            <div className="flex justify-center p-5">
              
              <Button btn={"Save"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
