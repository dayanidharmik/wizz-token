/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect } from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import OTPInput from "otp-input-react";
import { useState } from "react";
import useEncryption from "../EncryptData/EncryptData";
import instance from "../BaseUrl/BaseUrl";
import { Link, useNavigate } from "react-router-dom";

function OTP({ email, route }) {
  const [otp, setotp] = useState("");

  const { encryptData, decryptData } = useEncryption();

  const navigate = useNavigate();
  const defaultCount = 60;
  const intervalGap = 1000;
  const [timerCount, setTimerCount] = useState(defaultCount);

  /*=======ERROR MESSAGE =========*/
  let errorsObj = {
    otperror: "",
  };
  const [errors, setErrors] = useState(errorsObj);
  const onSignInSubmit = (e) => {
    e.preventDefault();

    let error = false;

    errorsObj = { ...errorsObj };

    if (otp.length < 4) {
      errorsObj.otperror = "OTP is required!";
      error = true;
    }

    setErrors(errorsObj);
    if (error) return;
    otpverification();
  };

  /*=======otpverification API ====== */
  const otpverification = async () => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          email: email,
          otp,
        })
      );
      const result = await instance.post("/verifyOtp", {
        data: encrypt,
      });

      const results = decryptData(result.data.data);

      if (results.status) {
        toast.success(results.message);
        // dispatch(
        //   signup({
        //     username: results.data.userData.username,
        //     email: results.data.userData.email,
        //     referralCode: results.data.userData.referralCode,
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
            username: results.data.userData.username,
            email: results.data.userData.email,
            referralCode: results.data.userData.referralCode,
          })
        );
        navigate(route === "/forgetpassword" ? "/resetpassword" : "/");
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  /*=======resend otp API ====== */
  const resendotp = async () => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          email: email,
        })
      );
      const result = await instance.post("/resendOtp", {
        data: encrypt,
      });

      const results = decryptData(result.data.data);

      if (results.status) {
        toast.success(results.message);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };
  /*===== RESEND OTP TIMER======== */
  const startTimerWrapper = useCallback((func) => {
    let timeInterval: NodeJS.Timer;
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
      setTimerCount(defaultCount);
      timeInterval = setInterval(() => {
        func(timeInterval);
      }, intervalGap);
    };
  }, []);

  //eslint-disable-next-line
  const timer = useCallback(
    startTimerWrapper((intervalfn: NodeJS.Timeout) => {
      setTimerCount((val) => {
        if (val === 0) {
          clearInterval(intervalfn);
          return val;
        }
        return val - 1;
      });
    }),
    []
  );
  /*========******* replce function======== */
  const getMaskedNumber = (email) => {
    const endDigits = email.slice(2, -4);
    return endDigits.padStart(email.length, "*");
  };

  // toast.success(results.message);
  useEffect(() => timer, []);
  return (
    <div>
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <div className=" py-20 px-2 ">
          <div className="container mx-auto">
            <div className="max-w-sm  mx-auto md:max-w-lg">
              <div className="w-full">
                <div className="nodetype-bg p-8  rounded-3xl text-center">
                  <span className="block golden w-full text-[35px] font-bold  text-center login">
                    OTP Verification
                  </span>
                  <div className="flex flex-col justify-center items-center my-4 rewardstextcolor">
                    <span>Enter the OTP you received at</span>
                    <p className="">{email}</p>
                  </div>

                  <form onSubmit={(e) => onSignInSubmit(e)}>
                    <div className="otp-group mt-7 ">
                      <OTPInput
                        value={otp}
                        onChange={setotp}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                      />
                      {errors.otperror && (
                        <div className="golden mt-5">{errors.otperror}</div>
                      )}
                      <div className="flex justify-center mt-10">
                        <Button btn={"verify"} />
                      </div>
                    </div>
                  </form>

                  <a className="flex items-center justify-center mt-7 text-white  cursor-pointer">
                    {!timerCount === 0 ? (
                      <p className="font-medium">
                        Resend OTP in
                        <span> {timerCount}</span>
                      </p>
                    ) : (
                      <Link
                        to="#"
                        disabled={!timerCount === 0}
                        className="font-medium"
                        onClick={resendotp}
                      >
                        Resend OTP
                      </Link>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default OTP;
