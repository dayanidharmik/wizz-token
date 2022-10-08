import React from "react";
import "../../Login/SignUp.css";
import Smartnode from "../../img/Smartnode.png";
import Powernode from "../../img/Powernode.png";
import Masternode from "../../img/Masternode.png";
import homegolde from "../../img/homegolde.png";
import Powernodegolden from "../../img/Powernodegolden.png";
import mastergolden from "../../img/mastergolden.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTitle from "../../MainTitle/MainTitle";

function NodeTypes() {
  const node = [
    {
      id: 1,
      img: Smartnode,
      imggold: homegolde,
      nodename: "Smart Node",
    },
    {
      id: 2,
      img: Powernode,
      nodename: "Power Node",
      imggold: Powernodegolden,
    },
    {
      id: 3,
      img: Masternode,
      nodename: "Master Node",
      imggold: mastergolden,
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
      <div className=" container  mx-auto px-10 py-5 mt-5">
        <div className="md:my-0 my-5">
          <MainTitle title={"Node Types"} />
        </div>
        <div className="xl:block flex justify-center">
          <div className="nodetype-bg  hidden xl:flex rounded-2xl justify-between px-28 py-7 mt-4  text-center">
            {node.map((index) => (
              <>
                <div key={index.id} className=" ">
                  <div className="swap  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-1000 ">
                    <img src={index.img} alt="" className="" />
                    <img src={index.imggold} alt="" className="" />
                  </div>

                  <p className="mt-2 text-[#7351FC] text-xl ">
                    {index.nodename}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="xl:hidden nodetype-bg block rounded-2xl justify-center items-center  py-7 mt-4  text-center px-5">
            <Slider {...settings}>
              {node.map((index) => (
                <>
                  <div key={index.id}>
                    <div className="swap  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-1000 ">
                      <img src={index.img} alt="" className="mx-auto" />
                      <img src={index.imggold} alt="" className="" />
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default NodeTypes;
