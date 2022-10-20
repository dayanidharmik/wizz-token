import React, { useState } from "react";
import MainTitle from "../../MainTitle/MainTitle";
import "../../Login/SignUp.css";
import home from "../..//img/myhome.png";
import thounder from "../..//img/mythunder.png";
import king from "../..//img/myking.png";
function PortfolioBalance() {
  const [active, setactive] = useState(0);
  // =======claim data========
  const claim = [
    {
      id: 0,
      card: "1H",
    },
    {
      id: 1,
      card: "1D",
    },
    {
      id: 2,
      card: "1W",
    },
    {
      id: 3,
      card: "1M",
    },
    {
      id: 4,
      card: "1Y",
    },
    {
      id: 5,
      card: "ALL",
    },
  ];
  return (
    <>
      <div className="container  mx-auto md:px-10 md:block flex items-center flex-col">
        <div className="mt-7 flex-col md:flex-row ">
          <MainTitle title={"Rewards"} />
        </div>

        <div className="text-white text-xl text-center my-5">
          * WIZZ Coin reward distribution will start on 21st October 2022. *
        </div>
        <div className="flex flex-col lg:flex-row  justify-between py-6 mt-3  rounded-xl md:px-10 px-8 nodetype-bg">
          <div className="lg:order-none  order-1">
            <p className="md:text-[40px] text-[30px] text-[#7351FC] font-extrabold">
              Rewards
            </p>
            <p className="text-lg font-medium text-[#22D198]  lg:text-start">
              Portfolio balance
            </p>
            <p className="text-color lg:text-[80px] md:text-[50px] text-[30px] lg:font-extrabold font-bold">
              0
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center  md:gap-5 gap-2 mt-2 ">
              {claim?.map((index) => (
                <>
                  <div key={index.id} onClick={() => setactive(index?.id)}>
                    <p
                      className={`md:text-lg text-base text-[#808080] cursor-pointer  ${
                        active === index.id ? "text-color" : "text-[#808080]"
                      }`}
                    >
                      {/* {index.card} */}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioBalance;
