import React, { useEffect, useState } from "react";
import closeeye from "../img/hiddenEye.png";
import openeye from "../img/openeye.png";
import user from "../img/user.png";
import emailuser from "../img/email.png";
import passworduser from "../img/password.png";
import invite from "../img/invite.png";
import { Link, useNavigate } from "react-router-dom";
import useEncryption from "../EncryptData/EncryptData";
import instance from "../BaseUrl/BaseUrl";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import OTP from "../OTP/OTP";
import "../Login/SignUp.css";
import Button from "../Button/Button";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [referralCode, setRefCode] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { encryptData, decryptData } = useEncryption();
  const [openotpbox, setopenotpbox] = useState(false);

  /*================ERROR MESSAGE============= */
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    cpwd: "",
    referralCode: "",
  });

  function onLoginSubmit(e) {
    e.preventDefault();
    if (username === "") {
      setError({
        ...error,
        username: "*Usernameis required!",
      });
    } else if (email === "") {
      setError({
        ...error,
        email: "*Email address is required!",
      });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError({
        ...error,
        email: "*Email address is invalid!",
      });
    } else if (password === "") {
      setError({
        ...error,
        password: "*Password is required!",
      });
    } else if (password.length < 8) {
      setError({
        ...error,
        password: "*Password must be 8 or more characters!",
      });
    } else if (cpwd === "") {
      setError({
        ...error,
        cpwd: "*Confirm Password is required!",
      });
    } else if (password !== cpwd) {
      setError({
        ...error,
        cpwd: "*Confirm password is not matched!",
      });
    } else if (referralCode === "") {
      setError({
        ...error,
        referralCode: `No referral code? Use wizz!`,
      });
    } else {
      SignUp();
    }
  }

  //* Prevent User For Entering Spaces
  const preventSpace = (e) => {
    if (e.which === 32) {
      e.preventDefault();
    }
  };
  /*=======SHOW PASSWORD====== */
  const onShowPassword = () => {
    setShowPass(!showPass);
  };
  /*=======SHOW Confirm PASSWORD====== */
  const onshowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  /*=======SignUp API ====== */
  const SignUp = async () => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          email,
          username,
          password,
          referralCode,
        })
      );
      const result = await instance.post("/signup", {
        data: encrypt,
      });

      const results = decryptData(result.data.data);
      console.log(
        "🚀 ~ file: SignUp.jsx ~ line 110 ~ SignUp ~ results",
        results
      );

      if (results.status) {
        toast.success(results.message);
        setopenotpbox(true);
      } else {
        toast.error(results.message);
      }
    } catch (err) {
      ////console.log("err" + err);
    }
  };
  /*========******* replce function======== */
  const getMaskedNumber = (number) => {
    const endDigits = number.slice(-3);
    return endDigits.padStart(number.length, "*");
  };
  useEffect(() => {
    return () => {
      // cancel the optbox
      setopenotpbox(false);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("ref");
    setRefCode(myParam);
  }, []);

  return (
    <>
      {openotpbox ? (
        <OTP email={email} />
      ) : (
        <>
          <Toaster position="top-right" reverseOrder={false} />
          <div className="flex items-center ">
            <div className="md:w-full nodetype-bg  e rounded-3xl shadow-lg md:p-14 p-8 md:m-9 my-10 mx-5 md:max-w-xl md:mx-auto container">
              <span className="block w-full text-[35px] font-bold golden   mb-10 text-center login">
                Sign Up
              </span>
              <form
                className="mb-3"
                autoComplete="off"
                autoCorrect="off"
                onSubmit={onLoginSubmit}
              >
                <div className="flex  flex-col justify-center items-center">
                  <div className="mb-6 md:w-full   relative">
                    <div
                      className={`${
                        error.username
                          ? "border-2 Rewards rounded-md"
                          : "bot-left1 "
                      } rounded-md`}
                    >
                      <input
                        className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline rewardstextcolor `}
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setError({
                            ...error,
                            username:
                              e.target.value === ""
                                ? "*Username is required!"
                                : "",
                          });
                        }}
                        onBlur={(e) => {
                          setUsername(e.target.value);
                          setError({
                            ...error,
                            username:
                              e.target.value === ""
                                ? "*Username is required!"
                                : "",
                          });
                        }}
                      />
                    </div>
                    <img
                      src={user}
                      alt=""
                      className="absolute top-[13px] left-2"
                    />
                    <p className=" golden mt-2">{error.username}</p>
                  </div>
                  <div className="mb-6 md:w-full relative ">
                    <div
                      className={`${
                        error.email
                          ? "border-2 Rewards rounded-md"
                          : "bot-left1 "
                      } rounded-md`}
                    >
                      <input
                        className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline rewardstextcolor`}
                        type="email"
                        name="email"
                        placeholder="User Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError({
                            ...error,
                            email:
                              e.target.value === ""
                                ? "*Email address is required!"
                                : !/\S+@\S+\.\S+/.test(e.target.value)
                                ? "*Email address is invalid!"
                                : "",
                          });
                        }}
                        onBlur={(e) => {
                          setEmail(e.target.value);
                          setError({
                            ...error,
                            email:
                              e.target.value === ""
                                ? "*Email address is required!"
                                : !/\S+@\S+\.\S+/.test(e.target.value)
                                ? "*Email address is invalid!"
                                : "",
                          });
                        }}
                      />
                    </div>
                    <img
                      src={emailuser}
                      alt=""
                      className="absolute top-[15px] left-2"
                    />
                    <p className=" golden mt-2">{error.email}</p>
                  </div>
                  <div className="mb-6 md:w-full relative ">
                    <div
                      className={`${
                        error.password
                          ? "border-2 Rewards rounded-md"
                          : "bot-left1 "
                      } rounded-md`}
                    >
                      <input
                        className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline rewardstextcolor `}
                        type={`${showPass ? "text" : "password"}`}
                        name="password"
                        id="password"
                        placeholder="User Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError({
                            ...error,
                            password:
                              e.target.value === ""
                                ? "*Password is required!"
                                : e.target.value.length < 8
                                ? "*Password must be 8 or more characters!"
                                : null,
                          });
                        }}
                        onBlur={(e) => {
                          setPassword(e.target.value);
                          setError({
                            ...error,
                            password:
                              e.target.value === ""
                                ? "*Password is required!"
                                : e.target.value.length < 8
                                ? "*Password must be 8 or more characters!"
                                : null,
                          });
                        }}
                        onKeyPress={preventSpace}
                      />
                    </div>
                    <img
                      role="button"
                      alt="Eye-icon-img"
                      onClick={onShowPassword}
                      src={showPass ? openeye : closeeye}
                      className="absolute  top-4 right-3"
                    />
                    <img
                      src={passworduser}
                      alt=""
                      className="absolute top-[12px] left-2"
                    />
                    <p className=" golden mt-2">{error.password}</p>
                  </div>
                  <div className="mb-6 md:w-full  relative ">
                    <div
                      className={`${
                        error.cpwd
                          ? "border-2 Rewards rounded-md"
                          : "bot-left1 "
                      } rounded-md`}
                    >
                      <input
                        className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline rewardstextcolor`}
                        type={`${showConfirmPass ? "text" : "password"}`}
                        name="cpwd"
                        value={cpwd}
                        onChange={(e) => {
                          setCpwd(e.target.value);
                          setError({
                            ...error,
                            cpwd:
                              e.target.value === ""
                                ? "*Confirm Password is required!"
                                : e.target.value !== password
                                ? "*Confirm password is not matched!"
                                : null,
                          });
                        }}
                        onBlur={(e) => {
                          setCpwd(e.target.value);
                          setError({
                            ...error,
                            cpwd:
                              e.target.value === ""
                                ? "*Confirm Password is required!"
                                : e.target.value !== password
                                ? "*Confirm password is not matched!"
                                : null,
                          });
                        }}
                        onKeyPress={preventSpace}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <img
                      role="button"
                      alt="Eye-icon-img"
                      onClick={onshowConfirmPass}
                      src={showConfirmPass ? openeye : closeeye}
                      className="absolute  top-4 right-3"
                    />
                    <img
                      src={passworduser}
                      alt=""
                      className="absolute top-[12px] left-2"
                    />
                    <p className="golden mt-2">{error.cpwd}</p>
                  </div>
                  <div className="mb-6 md:w-full  relative">
                    <div
                      className={`${
                        error.referralCode
                          ? "border-2 Rewards rounded-md"
                          : "bot-left1 "
                      } rounded-md`}
                    >
                      <input
                        className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline rewardstextcolor`}
                        type="text"
                        name="referralCode"
                        value={referralCode}
                        onChange={(e) => {
                          setRefCode(e.target.value);
                          setError({
                            ...error,
                            referralCode:
                              e.target.value === ""
                                ? `No referral code? Use wizz!`
                                : null,
                          });
                        }}
                        onBlur={(e) => {
                          setRefCode(e.target.value);
                          setError({
                            ...error,
                            referralCode:
                              e.target.value === ""
                                ? `No referral code? Use wizz!`
                                : null,
                          });
                        }}
                        placeholder="Invite Code"
                      />
                    </div>
                    <img
                      src={invite}
                      alt=""
                      className="absolute top-[12px] left-2"
                    />
                    <p className=" golden mt-2">{error.referralCode}</p>
                  </div>

                  <Button btn={" Sign Up"} />
                </div>
              </form>

              <div className="flex gap-2 justify-center items-center">
                <p className="rewardstextcolor  text-sm">Have an account?</p>
                <Link className="golden  text-[16px] font-medium" to="/login">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignUp;
