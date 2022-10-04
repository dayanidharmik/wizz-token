/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import "../../Login/SignUp.css";
import home from "../..//img/home.png";
import king from "../..//img/king.png";
import thounder from "../..//img/thounder.png";
import Button from "../../Button/Button";
import MainTitle from "../../MainTitle/MainTitle";
import busd from "../../img/busd.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import smartnode from "../../img/Smartnode.png";
import useEncryption from "../../EncryptData/EncryptData";
import instance from "../../BaseUrl/BaseUrl";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import Web3 from "web3";
import { Link, useNavigate } from "react-router-dom";

function Dashboard({ totalNodes }) {
  const [open, setopen] = useState(false);
  const [drop, setdrop] = useState(false);
  // const [totlenode, settotlenode] = useState();
  const [totalsupply, settotalsupply] = useState([]);
  const [busdprice, setbusdprice] = useState([]);
  const [value, setValue] = useState(1);
  const [mark, setmark] = useState(0);
  const { encryptData, decryptData } = useEncryption();
  const effectCalled = useRef(false);
  const [totalremaining, settotalremaining] = useState([]);
  const navigate = useNavigate();
  const getDetelis = JSON.parse(localStorage.getItem("quantity"));
  const getdata = JSON.parse(localStorage.getItem("detelis"));
  //===== openpopp=====
  const openpopp = () => {
    setopen(!open);
  };
  // =======claim data========
  const claim = [
    {
      id: 0,
      card: 0,
      img: home,
    },
    {
      id: 1,
      card: "0",
      img: thounder,
    },
    {
      id: 2,
      card: "0",
      img: king,
    },
  ];

  // =======mynode data========
  const mynode = [
    {
      id: 0,
      card: totalNodes === undefined ? 0 : totalNodes,
      img: home,
    },
    {
      id: 1,
      card: "0",
      img: thounder,
    },
    {
      id: 2,
      card: "0",
      img: king,
    },
  ];
  // ======node data========

  const Buy = [
    {
      id: 0,
      node: busdprice,
      CurrentPrice: 1000,
      TotalNodes: totalremaining?.smart,
    },
    // {
    //   id: 1,
    //   node: "Power Node",
    //   CurrentPrice: "$4400 USD",
    //   TotalNodes: totalsupply?.power,
    // },
    // {
    //   id: 2,
    //   node: "Master Node",
    //   CurrentPrice: "$4400 USD",
    //   TotalNodes: totalsupply?.master,
    // },
  ];

  // ========slider data======
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
  //=========wallet data========
  const wallet = [
    // {
    //   id: 0,
    //   img: wizzlogo,
    //   walletname: "WIZZ",
    //   balance: 0,
    // },
    {
      id: 1,
      img: busd,
      walletname: "BUSD",
      balance: 0,
    },
  ];

  const paymentAddress = "0x0dA7187464C33317D469458124C3f8315eC2dA5B"; //Your wallet address to rec payment
  const BUSD_CONTRACT = "0xe9e7cea3dedca5984780bafc599bd69add087d56"; //BUSD CONTRACT Address
  const BUSD_ABI = [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "_decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "burn",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "subtractedValue", type: "uint256" },
      ],
      name: "decreaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "addedValue", type: "uint256" },
      ],
      name: "increaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "mint",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  //BUSD CONTRACT ABI
  var web3 = null;
  var instanced = null;
  var chainId = null;
  async function changeToMain() {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }], //MAIN BSC 0x38      // bsc testnet= 0x61
    });
  }

  async function payBUSD() {
    let amt = $("#amount").val();
    web3 = new Web3(Web3.givenProvider);
    await Web3.givenProvider.enable();
    chainId = await web3.eth.getChainId();
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(async (account) => {
        if (chainId !== 56) {
          await changeToMain();
        }
        instanced = new web3.eth.Contract(BUSD_ABI, BUSD_CONTRACT);
        instanced.methods
          .transfer(paymentAddress, web3.utils.toWei(amt, "ether"))
          .send({
            from: account[0],
            gas: 150000,
          })
          .on("transactionHash", function (hash) {
            console.log("transactionHash", hash);
          })
          .on("receipt", function (receipt) {
            console.log(receipt.transactionHash);
          })
          .on("confirmation", function (confirmationNumber, receipt) {
            console.log(confirmationNumber);
            console.log(receipt);
          })
          .on("error", function (error, receipt) {
            console.log(error);
          });
      });
  }

  // ==============function of increment and decrement Quantity=========
  const min = 1;
  const max = 100;
  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };

  //======== increment Quantity========
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setValue(function (prevCount) {
      if (prevCount < 100) {
        return (prevCount += 1);
      }
    });
  }
  // ==============decrement Quantity=========================
  function decrement() {
    setValue(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  // ==============placeOrder API=========

  const placeOrder = async () => {
    const getDetelis = JSON.parse(localStorage.getItem("token"));
    if (!getDetelis) {
      navigate("/login");
    } else {
      try {
        const encrypt = encryptData(
          JSON.stringify({
            name: "smart node",
            currency: mark.walletname,
            quantity: value,
          })
        );
        const result = await instance.post("/buyNode", {
          data: encrypt,
        });

        const results = decryptData(result.data.data);
        console.log(results);

        if (results.status) {
          payBUSD();
          toast.success(results.message);

          localStorage.setItem(
            "quantity",
            JSON.stringify({
              quantity: results.data.quantity.totalQuantity,
            })
          );
        } else {
          toast.error(results.message);
        }
      } catch (err) {}
    }
  };

  // // ==============totalNodes API=========
  // const totalNodes = async () => {
  //   try {
  //     const encrypt = encryptData(
  //       JSON.stringify({
  //         email: getdata?.email,
  //       })
  //     );
  //     const result = await instance.post("/totalNodes", {
  //       data: encrypt,
  //     });

  //     const results = decryptData(result.data.data);
  //     console.log(results.data.total);

  //     if (results.status) {
  //       // toast.success(results.message);
  //       settotlenode(results.data.total);
  //     } else {
  //       toast.error(results.message);
  //     }
  //   } catch (err) {}
  // };
  // ==============nodeSupplies API=========
  const nodeSupplies = async () => {
    try {
      const result = await instance.get("/nodeSupplies");

      const results = decryptData(result.data.data);
      // console.log(results.data);

      if (results.status) {
        // toast.success(results.message);
        settotalsupply(results.data);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  // ==============getPrice API=========

  const getPrice = async () => {
    try {
      const result = await instance.get("/getPrice");

      const results = decryptData(result.data.data);
      // console.log(results.data.price);

      if (results.status) {
        // toast.success(results.message);
        setbusdprice(results.data.price);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
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
      nodeSupplies();
      getPrice();
      remainingNodes();
      effectCalled.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="py-6 xl:py-0 container mx-auto xl:block flex items-center flex-col">
        <div className="my-5">
          <MainTitle title={"Dashboard"} />
        </div>

        <div className="px-10 gap-5 xl:grid grid-cols-3 place-content-center mx-auto mt-4  hidden  ">
          <div className="nodetype-bg  rounded-2xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#7351FC] text-2xl font-bold">Rewards</p>
              </div>
              <Link to="/investments">
                <Button btn={"Claim All"} />
              </Link>
            </div>
            <div className="text-[55px] text-color font-bold mt-2">0.000</div>
            <div className="flex justify-start items-center gap-5 mt-2">
              {claim.map((index, key) => (
                <>
                  <div className="Rewards rounded-lg ">
                    <div
                      className="   p-4 gap-5 flex justify-center items-center flex-col"
                      key={index.id}
                    >
                      <img src={index.img} alt="" className="w-8 h-8" />
                      <p className="rewardstextcolor">{index.card}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="nodetype-bg flex flex-col gap-5 justify-between p-5 items-center rounded-2xl ">
            <div>
              <p className="text-[#7351FC] text-2xl font-bold">Smart Node</p>
            </div>
            <table className="w-full  text-center">
              <thead className="text-[#7351FC] text-lg font-bold">
                <tr>
                  <th scope="col">Current Price</th>
                  <th scope="col">Total Nodes</th>
                  <th scope="col">Remaining Nodes</th>
                </tr>
              </thead>
              <tbody>
                {Buy.map((items, key) => (
                  <tr key={items.id}>
                    <td className="py-3 px-3 text-color text-base font-bold ">
                      {items.node} BUSD
                    </td>
                    <td className="py-3 px-3 text-color text-base font-bold">
                      {items.CurrentPrice}
                    </td>
                    <td className="py-3 px-3 text-color text-base font-bold ">
                      {items.TotalNodes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center  " onClick={openpopp}>
              <Button btn={"Buy Nodes"} />
            </div>
          </div>
          <div className="nodetype-bg  rounded-2xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
              </div>
              <Link to="/myNode">
                <Button btn={"View Nodes"} />
              </Link>
            </div>
            <div className="text-[55px]  font-bold mt-2 golden">....</div>
            <div className="flex justify-start items-center gap-5 mt-2">
              {mynode.map((index) => (
                <>
                  <div className="Rewards rounded-lg ">
                    <div
                      className="  p-4 gap-5 flex justify-center items-center flex-col"
                      key={index.id}
                    >
                      <img src={index.img} alt="" className="w-8 h-8" />
                      <p className="rewardstextcolor">{index.card}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className=" xl:hidden  nodetype-bg rounded-2xl  flex justify-center px-5">
          <Slider {...settings}>
            <div className="py-14">
              <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
                <div>
                  <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
                </div>
                <Link to="/investments">
                  <Button btn={"Claim All"} />
                </Link>
              </div>
              <div className="md:text-[55px] text-[40px] text-center md:text-start text-color font-bold  ">
                <p>0.000</p>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap items-center gap-5 mt-2">
                {claim.map((index, key) => (
                  <>
                    <div className="Rewards rounded-lg ">
                      <div
                        className="  md:p-5  p-2 gap-5 flex justify-center items-center flex-col"
                        key={index.id}
                      >
                        <img src={index.img} alt="" className="w-8 h-8" />
                        <p className="rewardstextcolor">{index.card}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="py-14 flex  ">
              <div className="flex flex-col justify-between items-center gap-10">
                {" "}
                <div clas>
                  <p className="text-[#7351FC] text-2xl font-bold">
                    Smart Node
                  </p>
                </div>
                <table className="w-full  text-center">
                  <thead className="text-[#7351FC] text-lg font-bold">
                    <tr>
                      <th scope="col">Current Price</th>
                      <th scope="col">Total Nodes</th>
                      <th scope="col">Remaining Nodes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Buy.map((items, key) => (
                      <tr key={items.id}>
                        <td className="py-3 px-3 text-color text-base font-bold ">
                          {items.node} BUSD
                        </td>
                        <td className="py-3 px-3 text-color text-base font-bold">
                          {items.CurrentPrice}
                        </td>
                        <td className="py-3 px-3 text-color text-base font-bold ">
                          {items.TotalNodes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center  " onClick={openpopp}>
                  <Button btn={"Buy Nodes"} />
                </div>
              </div>
            </div>
            <div className="py-14">
              <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
                <div>
                  <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
                </div>
                <Link to="/myNode">
                  <Button btn={"View Nodes"} />
                </Link>
              </div>
              <div className="golden md:text-[55px] text-[40px] text-center md:text-start text-color font-bold  ">
                <p>.......</p>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap items-center gap-5 mt-2">
                {mynode.map((index, key) => (
                  <>
                    <div className="Rewards rounded-lg ">
                      <div
                        className="  rounded-lg md:p-5  p-2 gap-5 flex justify-center items-center flex-col"
                        key={index.id}
                      >
                        <img src={index.img} alt="" className="w-8 h-8" />
                        <p className="rewardstextcolor">{index.card}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Slider>
        </div>

        {open && (
          <div
            className="py-3  z-50 flex justify-center items-center mx-auto fixed top-0 right-0 bottom-0 left-0 backdrop-blur"
            id="modal"
          >
            <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-[#dce3fb]  border-[#14206A] border-2 rounded-3xl shadow-2xl -3xl  ">
                <h1 className="text-[black] font-lg font-bold tracking-normal leading-tight mb-4">
                  Select Currency:
                </h1>
                <>
                  <div
                    className="relative  text-left"
                    onClick={() => setdrop(!drop)}
                  >
                    <div>
                      <div className="flex cursor-pointer  justify-between items-center  rounded-md border bg-[#14206A] text-[white] px-4 py-3 text-sm font-medium  shadow-sm  focus:outline-none ">
                        {/* */}
                        {mark === 0 ? (
                          <p className="text-base">Select Payment Method</p>
                        ) : (
                          <div className="flex gap-5 justify-center items-center">
                            <img src={mark.img} alt="" className="w-10 h-8" />
                            <p>{mark.walletname}</p>
                          </div>
                        )}
                        <i className="fa-solid fa-caret-down"></i>
                      </div>
                    </div>
                    {drop && (
                      <div className="absolute right-0 left-0 z-10 mt-2 cursor-pointer  rounded-md bg-[#14206A] text-[white] shadow-lg ">
                        <div role="none">
                          {wallet.map((i) => (
                            <div
                              className="flex justify-between items-center px-4 py-3  border-b-2 "
                              key={i.id}
                              onClick={() => setmark(i)}
                            >
                              {/* {console.log(i)} */}
                              <div className=" flex justify-start items-center gap-4">
                                <div>
                                  <img
                                    src={i.img}
                                    alt=""
                                    className="w-10 h-8"
                                  />
                                </div>
                                <div>
                                  <p className=" font-semibold">
                                    {i.walletname}
                                  </p>
                                  {/* <p>Balance : {i.balance}</p> */}
                                </div>
                              </div>
                              <div>
                                {mark.id === i.id ? (
                                  <i className="fa-solid fa-check text-[#24AF0D]"></i>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
                <div className="flex justify-center py-5">
                  <img src={smartnode} alt="" />
                </div>

                <label className="text-[black] text-xl font-bold leading-tight tracking-normal">
                  Total Cost:
                </label>

                <div className=" mb-5 mt-2 relative">
                  <input
                    className="text-color  focus:outline-none  font-extrabold w-full h-10 flex items-center  text-xl  border-[#14206A] border-b"
                    placeholder="Enter Price"
                    value={busdprice * value}
                    id="amount"
                    // 0.1
                  />

                  <p className="absolute right-0 top-2">{mark.walletname}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <label className="text-[black] text-2xl font-bold leading-tight tracking-normal">
                      Drop Schedule :
                    </label>
                    {/* <img src={info} alt="" /> */}
                  </div>
                  <div className="rounded-md bg-[white] p-2">
                    <p>TIER 1 of 3</p>
                  </div>
                </div>
                <div className="mt-10 text-center rounded-md bg-[#97A5FC] p-3">
                  <p className="text-[black] text-xl font-bold leading-tight tracking-normal">
                    {totalremaining?.smart} / {totalsupply?.master} Remain
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-8">
                  <label className="text-[black] text-xl font-bold leading-tight tracking-normal">
                    Quantity: (Up to 100)
                  </label>
                </div>

                <div className=" mb-5 mt-2 flex">
                  <div
                    className=" btn-bg p-2 rounded-l-lg flex justify-center items-center cursor-pointer border-[#14206A] border-y border-l"
                    onClick={increment}
                  >
                    <i className="fa-solid fa-chevron-up"></i>
                  </div>
                  <input
                    className="  focus:outline-none  font-light w-full h-10 flex items-center   border-[#14206A] border-y text-center "
                    placeholder="Enter Quantity"
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min="1"
                    max="100"
                    step="1"
                    pattern="[0-9]*"
                  />
                  <div
                    className=" btn-bg p-2 rounded-r-lg flex justify-center items-center cursor-pointer border-[#14206A] border-y border-r"
                    onClick={decrement}
                  >
                    <i className="fa-solid fa-angle-down text-center "></i>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center"
                  onClick={placeOrder}
                >
                  <Button btn={"Place Order"} />
                </div>

                <div
                  className=" cursor-pointer outline-none border-none absolute top-0 right-0 mt-4 mr-5 text-[#14206A] transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                  onClick={openpopp}
                >
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
