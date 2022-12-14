import React from "react";
import MainTitle from "../../MainTitle/MainTitle";
import "../../Login/SignUp.css";
import home from "../..//img/home.png";
import thounder from "../..//img/mythunder.png";
import king from "../..//img/myking.png";
import useEncryption from "../../EncryptData/EncryptData";
function MyNodedetalis({ totlenode }) {
  const { decryptData } = useEncryption();
  const getDetelis = decryptData(localStorage.getItem("quantity"));
  // =======claim data========
  const claim = [
    {
      id: 0,
      card: totlenode === undefined ? 0 : totlenode,
      img: home,
    },
    {
      id: 1,
      card: 0,
      img: thounder,
    },
    {
      id: 2,
      card: 0,
      img: king,
    },
  ];
  return (
    <>
      <div className="container  mx-auto p-10">
        <div className="mt-7 flex-col md:flex-row ">
          <MainTitle title={"My Node"} />
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center py-6 mt-3 bg-[#DFE5FF] rounded-xl px-10  nodetype-bg">
          <div className="">
            <p className="text-[40px] text-[#7351FC] font-extrabold">
              My Nodes
            </p>
            <p className="text-[91px] text-color text-center lg:text-start">
              {totlenode === undefined ? 0 : totlenode}
            </p>
            <p className="text-color border-t-2 py-4 border-white">
              {/* Total Average Tax 0% */}
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center  gap-5 mt-2 ">
              {claim?.map((index, key) => (
                <>
                  <div
                    className=" Rewards rounded-lg gap-5 flex justify-center items-center flex-col"
                    key={index.id}
                  >
                    <div className="flex flex-col p-5 justify-between ">
                      <img
                        src={index.img}
                        alt=""
                        className="md:w-14 md:h-14 w-5 h-5"
                      />
                      <p className="rewardstextcolor mt-5 text-xl">
                        {index.card}
                      </p>
                    </div>
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

export default MyNodedetalis;
