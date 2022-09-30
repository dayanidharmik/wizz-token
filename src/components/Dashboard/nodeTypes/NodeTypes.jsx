import React from "react";
import "../../Login/SignUp.css";
import smartnode from "../../img/smartnode.gif";
import Power from "../../img/Power.gif";
import Smart from "../../img/Smart.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTitle from "../../MainTitle/MainTitle";
function NodeTypes() {
  const node = [
    {
      id: 1,
      img: smartnode,
    },
    {
      id: 2,
      img: Power,
    },
    {
      id: 3,
      img: Smart,
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
  return (
    <>
      <div className=" container  mx-auto px-10">
        <MainTitle title={"Node Types"} />
        <div className="flex justify-around items-center ">
          <div>
            <div className="general-container hidden bg-[black] rounded-2xl xl:flex justify-around items-center p-10 mt-4 gap-5">
              <div className="flex   text-center 2xl:gap-44 ">
                {node.map((index) => (
                  <>
                    <div key={index.id}>
                      <div>
                        <img src={index.img} alt="" className=" " />
                      </div>

                      <div>
                        <p className="mt-2 text-[#7351FC]  ">
                          Nodes Remaining{" "}
                          <span className="text-color ">10,000</span>
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="xl:hidden block bg-[#DFE5FF] rounded-2xl mt-2 pt-4 2xl:px-12 px-0">
              <Slider {...settings}>
                {node.map((index) => (
                  <>
                    <div key={index.id}>
                      <div>
                        <img src={index.img} alt="" className=" " />
                      </div>

                      <div>
                        <p className="mt-2 text-[#7351FC] text-center ">
                          Nodes Remaining{" "}
                          <span className="text-color ">10,000</span>
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
    </>
  );
}

export default NodeTypes;
