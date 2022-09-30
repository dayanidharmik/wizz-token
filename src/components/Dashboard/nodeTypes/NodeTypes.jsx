import React, { useEffect, useRef, useState } from "react";
import "../../Login/SignUp.css";
import Smartnode from "../../img/smartnode.gif";
import Power from "../../img/Power.gif";
import Master from "../../img/Smart.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTitle from "../../MainTitle/MainTitle";
import useEncryption from "../../EncryptData/EncryptData";
import toast, { Toaster } from "react-hot-toast";
import instance from "../../BaseUrl/BaseUrl";
import Dashboard from "../Dashboard/Dashboard";
function NodeTypes() {
  const { decryptData } = useEncryption();
  const effectCalled = useRef(false);
  const [totalremaining, settotalremaining] = useState([]);
  const node = [
    {
      id: 1,
      img: Smartnode,
      nodename: "Smart Node",
      nodetype: "Remaining",
      totalnode: totalremaining?.smart,
    },
    {
      id: 2,
      img: Power,
      nodetype: "Remaining",
      nodename: "Power Node",
      totalnode: totalremaining?.power,
    },
    {
      id: 3,
      img: Master,
      nodetype: "Remaining",
      nodename: "Master Node",
      totalnode: totalremaining?.master,
    },
  ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    className: "sample",
  };
  // ==============totalNodes API=========
  const remainingNodes = async () => {
    try {
      const result = await instance.get("/remainingNodes");

      const results = decryptData(result.data.data);
      // console.log(results.data);

      if (results.status) {
        settotalremaining(results.data);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (!effectCalled.current) {
      remainingNodes();
      effectCalled.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <div className=" container  mx-auto px-10">
        <div className="md:my-0 my-5">
          <MainTitle title={"Node Types"} />
        </div>
        <div className="flex justify-around items-center ">
          <div>
            <div className="general-container hidden bg-[#dce3fb] rounded-2xl xl:flex justify-around items-center p-10 mt-4 gap-5">
              <div className="flex   text-center ">
                {node.map((index) => (
                  <>
                    <div key={index.id}>
                      <p className="mt-2 text-[#7351FC] text-xl ">
                        {index.nodename}
                      </p>
                      <div>
                        <img src={index.img} alt="" className=" " />
                      </div>

                      <div>
                        <p className="mt-2 text-[#7351FC] text-base ">
                          {index.nodetype} :
                          <span className="text-color ">
                            {" "}
                            {index.totalnode}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="xl:hidden block bg-[#dce3fb] rounded-2xl md:mt-5 pt-4 2xl:px-12 md:px-5">
              <Slider {...settings}>
                {node.map((index) => (
                  <>
                    <div key={index.id}>
                      <div>
                        <img src={index.img} alt="" className=" " />
                      </div>

                      <div>
                        <p className="mt-2 text-[#7351FC] text-center ">
                          {index.nodetype} :
                          <span className="text-color ">{index.totalnode}</span>
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <Dashboard Remaining={totalremaining?.smart} />
    </>
  );
}

export default NodeTypes;
