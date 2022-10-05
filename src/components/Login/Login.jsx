import React, { useState } from "react";
import emailuser from "../img/email.png";
import passworduser from "../img/password.png";
import closeeye from "../img/hiddenEye.png";
import openeye from "../img/openeye.png";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import useEncryption from "../EncryptData/EncryptData";
import instance from "../BaseUrl/BaseUrl";
import toast, { Toaster } from "react-hot-toast";
import { signin, signup } from "../Feature/User";
import { useDispatch } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { encryptData, decryptData } = useEncryption();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*================ERROR MESSAGE============= */
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  function onLoginSubmit(e) {
    e.preventDefault();
    if (email === "") {
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
    } else {
      SignIn();
    }
  }
  /*================SignIn API===============*/

  const SignIn = async () => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          email,
          password,
        })
      );
      const result = await instance.post("/signin", {
        data: encrypt,
      });
      // console.log(result);
      const results = decryptData(result.data.data);
      console.log(results);
      if (results.status) {
        toast.success(results.message);

        // dispatch(
        //   signin({
        //     username: results.data.user.username,
        //     email: results.data.user.Linkemail,
        //     referralCode: results.data.user.referralCode,
        //   })
        // );
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: results.data.token,
          })
        );
        localStorage.setItem(
          "detelis",
          JSON.stringify({
            username: results.data.user.username,
            email: results.data.user.email,
            referralCode: results.data.user.referralCode,
          })
        );
        navigate("/");
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  /*=======SHOW PASSWORD====== */
  const onShowPassword = () => {
    setShowPass(!showPass);
  };

  //* Prevent User For Entering Spaces
  const preventSpace = (e) => {
    if (e.which === 32) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex items-center">
        <div className="w-full nodetype-bg  rounded-3xl shadow-lg p-14 md:p-14 md:m-9 my-10 mx-5 md:max-w-xl md:mx-auto  container">
          <span className="golden block w-full text-[35px] font-bold   mb-14 text-center login">
            Login
          </span>
          <form className="mb-3" autoComplete="off" onSubmit={onLoginSubmit}>
            <div className="flex  flex-col justify-center items-center">
              <div className=" mb-6 md:w-full  relative ">
                <div
                  className={`${
                    error.email
                      ? "border-2 border-[red] rounded-md"
                      : "bot-left1 "
                  } rounded-md`}
                >
                  <input
                    className={`w-full bg-transparent   py-2 px-7 outline-none focus:shadow-outline text-[#A9A9A9]`}
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
                  className="absolute top-[17px] left-2"
                />
                <p className="text-[red] ">{error.email}</p>
              </div>

              <div className="mb-6 md:w-full relative ">
                <div
                  className={`${
                    error.password
                      ? "border-2 border-[red] rounded-md"
                      : "bot-left1 "
                  } rounded-md`}
                >
                  <input
                    className={` w-full bg-transparent border rounded-md py-2 px-7 outline-none focus:shadow-outline text-[#A9A9A9] `}
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
                  className="absolute top-[14px] left-2"
                />
                <p className="text-[red] mt-2">{error.password}</p>
              </div>
              <button className="btn-bg  text-white  text-sm font-semibold px-8 py-2 rounded-full text-center">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center gap-10">
            <Link className="text-[#030239]  text-sm" to="/forgetpassword">
              Forgot password?
            </Link>
            <div className="flex gap-2">
              <p className="text-[#A9A9A9]  text-sm">Don't have an account?</p>
              <Link className="text-[#030239]  text-sm" to="/signUp">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
