import React from "react";
import "../Login/SignUp.css";
import { Link, useLocation } from "react-router-dom";
import dashboard from "../img/dashboard.png";
import browser from "../img/browser.png";
import invest from "../img/invest.png";
import referral from "../img/referral.png";
import FAQ from "../img/FAQ.png";
import dashboardactive from "../img/dashboardactive.png";
import browseractive from "../img/browseractive.png";
import profitsactive from "../img/profitsactive.png";
import referralactive from "../img/referralactive.png";
import faqactive from "../img/faqactive.png";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <>
        {/* {window.screen.width < 700 ? (
          <i className="fa-solid fa-bars text-black text-xl z-[9999]"></i>
        ) : ( */}
        <div className="min-h-screen b bg-[#030239] fixed z-[50]">
          <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg">
            <div className="flex h-screen flex-col justify-start mt-40">
          

              <div>
                <ul className="flex flex-col gap-7 space-y-2 tracking-wide mt-5">
                  {pathname === "/" ? (
                    <li className="min-w-max effect-h">
                      <Link to="/">
                        <div className="flex justify-start items-center  gap-5 rounded-3xl ">
                          <div className="flex justify-center items-center rounded-full btn-bg p-3 ">
                            <img
                              src={dashboardactive}
                              alt=""
                              className="w-5 h-5"
                            />
                          </div>
                          <span className="text-lg text-[#22D198]">
                            Dashboard
                          </span>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li className="min-w-max">
                      <Link
                        to="/"
                        className="flex gap-5 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
                      >
                        <span className="inline-flex justify-center items-center px-3">
                          <img src={dashboard} alt="" className="w-5 h-5" />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                  )}

                  {pathname === "/myNode" ? (
                    <li className="min-w-max ">
                      <Link to="/myNode">
                        <div className="flex justify-start items-center  gap-5 rounded-3xl   ">
                          <div className="flex justify-center items-center rounded-full btn-bg p-3 ">
                            <img
                              src={browseractive}
                              alt=""
                              className="w-5 h-5"
                            />
                          </div>
                          <span className="text-lg text-[#22D198]">
                            My Node
                          </span>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li className="min-w-max">
                      <Link
                        to="/myNode"
                        className="flex  gap-5 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
                      >
                        <span className="inline-flex justify-center items-center px-3">
                          <img src={browser} alt="" />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          My Node
                        </span>
                      </Link>
                    </li>
                  )}
                  {pathname === "/investments" ? (
                    <li className="min-w-max">
                      <Link to="/investments">
                        <div className="flex justify-start items-center  gap-5 rounded-3xl  ">
                          <div className="flex justify-center items-center rounded-full btn-bg p-3 ">
                            <img
                              src={profitsactive}
                              alt=""
                              className="w-5 h-5"
                            />
                          </div>
                          <span className="text-lg mr-2 text-[#22D198]">
                            Investmentse
                          </span>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li className="min-w-max">
                      <Link
                        to="/investments"
                        className="flex gap-5 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
                      >
                        <span className="inline-flex justify-center items-center px-3">
                          <img src={invest} alt="" />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          Investments
                        </span>
                      </Link>
                    </li>
                  )}
                  {pathname === "/referral" ? (
                    <li className="min-w-max">
                      <Link to="/referral">
                        <div className="flex justify-start items-center  gap-5 rounded-3xl  ">
                          <div className="flex justify-center items-center rounded-full btn-bg p-3 ">
                            <img
                              src={referralactive}
                              alt=""
                              className="w-5 h-5"
                            />
                          </div>
                          <span className="text-lg mr-2 text-[#22D198]">
                            referrale
                          </span>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li className="min-w-max">
                      <Link
                        to="/referral"
                        className="flex gap-5 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
                      >
                        <span className="inline-flex justify-center items-center px-3">
                          <img src={referral} alt="" />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          referral
                        </span>
                      </Link>
                    </li>
                  )}
                  {pathname === "/faq" ? (
                    <li className="min-w-max">
                      <Link to="/faq">
                        <div className="flex justify-start items-center  gap-5 rounded-3xl  ">
                          <div className="flex justify-center items-center rounded-full btn-bg p-3 ">
                            <img src={faqactive} alt="" className="w-5 h-5" />
                          </div>
                          <span className="text-lg  text-[#22D198]">FAQ</span>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li className="min-w-max">
                      <Link
                        to="/faq"
                        className="flex gap-5 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
                      >
                        <span className="inline-flex justify-center items-center px-3">
                          <img src={FAQ} alt="" />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          FAQ
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </>
    </>
  );
}

export default Navbar;
