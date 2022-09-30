/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../Login/SignUp.css";
import home from "../..//img/home.png";
import king from "../..//img/king.png";
import thounder from "../..//img/thounder.png";
import Button from "../../Button/Button";
import MainTitle from "../../MainTitle/MainTitle";
import wizzlogo from "../../img/wizz-logo.png";
import busd from "../../img/busd.png";
import info from "../../img/info.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import smartnode from "../../img/smartnode.png";
import useEncryption from "../../EncryptData/EncryptData";
import instance from "../../BaseUrl/BaseUrl";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import Web3 from "web3";

function Dashboard() {
  const [open, setopen] = useState(false);
  const [drop, setdrop] = useState(false);
  const [totlenode, settotlenode] = useState();
  const [setaddress] = useState("");
  const [value, setValue] = useState(1);
  const [mark, setmark] = useState(0);
  const { encryptData, decryptData } = useEncryption();
  const getDetelis = JSON.parse(localStorage.getItem("quantity"));
  const getdata = JSON.parse(localStorage.getItem("detelis", "detelis"));
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
      card: totlenode === undefined ? 0 : totlenode,
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
      node: "Smaer Node",
      CurrentPrice: "$4400 USD",
      TotalNodes: "5000",
    },
    {
      id: 1,
      node: "Power Node",
      CurrentPrice: "$4400 USD",
      TotalNodes: "5000",
    },
    {
      id: 2,
      node: "Master Node",
      CurrentPrice: "$4400 USD",
      TotalNodes: "5000",
    },
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
    {
      id: 0,
      img: wizzlogo,
      walletname: "WIZZ",
      balance: 0,
    },
    {
      id: 1,
      img: busd,
      walletname: "BUSD",
      balance: 0,
    },
  ];

  // //========= conncect metsmask wallet ==========
  // const openmetamask = async () => {
  //   const wallet = await window?.ethereum?.enable();
  //   setaddress(wallet.toString());
  // };

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
  // const { ethereum } = window
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

  // ==============placeOrder API=========

  const placeOrder = async () => {
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
  };

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

  // ==============totalNodes API=========
  const totalNodes = async () => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          email: getdata?.email,
        })
      );
      const result = await instance.post("/totalNodes", {
        data: encrypt,
      });

      const results = decryptData(result.data.data);
      // console.log(results.data.total);

      if (results.status) {
        toast.success(results.message);
        settotlenode(results.data.total);
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
  };
  useEffect(() => {
    totalNodes();
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="py-6 container mx-auto">
        <MainTitle title={"Dashboard"} />
        <div className="px-10 gap-5 xl:grid grid-cols-3 place-content-center mx-auto mt-4  hidden  ">
          <div className="bg-[#DFE5FF]  rounded-2xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#7351FC] text-2xl font-bold">Rewards</p>
              </div>
              <Button btn={"claim all"} />
            </div>
            <div className="text-[55px] text-color font-bold mt-2">0.000</div>
            <div className="flex justify-start items-center gap-5 mt-2">
              {claim.map((index, key) => (
                <>
                  <div
                    className=" border-2 border-[#14206A] rounded-lg p-4 gap-5 flex justify-center items-center flex-col"
                    key={index.id}
                  >
                    <img src={index.img} alt="" className="w-8 h-8" />
                    <p>{index.card}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="bg-[#DFE5FF]  rounded-2xl p-5">
            <div className="overflow-x-auto relative flex justify-center items-center">
              <table className="w-full  text-center">
                <thead className="text-[#7351FC] text-sm font-bold">
                  <tr>
                    <th scope="col" className="py-3 px-6 "></th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Total Nodes</th>
                  </tr>
                </thead>
                <tbody>
                  {Buy.map((items, key) => (
                    <tr key={items.id}>
                      <td className="py-3 text-[#7351FC] ">
                        <div className="border-2 rounded-full border-[#7351FC] border-opacity-30 text-[12px] p-1 font-medium leading-3 flex justify-center items-center">
                          {items.node}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-color text-sm font-bold">
                        {items.CurrentPrice}
                      </td>
                      <td className="py-3 px-3 text-color text-sm font-bold ">
                        {items.TotalNodes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-10" onClick={openpopp}>
              <Button btn={"Buy nodes"} />
            </div>
          </div>
          <div className="bg-[#DFE5FF]  rounded-2xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
              </div>
              <Button btn={"view nodes"} />
            </div>
            <div className="text-[55px] text-color font-bold mt-2">....</div>
            <div className="flex justify-start items-center gap-5 mt-2">
              {mynode.map((index) => (
                <>
                  <div
                    className=" border-2 border-[#14206A] rounded-lg p-4 gap-5 flex justify-center items-center flex-col"
                    key={index.id}
                  >
                    <img src={index.img} alt="" className="w-8 h-8" />
                    <p>{index.card}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className=" gap-5 xl:hidden  grid place-content-center  mt-2">
          <Slider {...settings}>
            <div className="bg-[#DFE5FF]  rounded-2xl p-5">
              <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
                <div>
                  <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
                </div>
                <Button btn={"claim all"} />
              </div>
              <div className="text-[55px] text-center md:text-start text-color font-bold  flex justify-center">
                <p>0.000</p>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap items-center gap-5 mt-2">
                {claim.map((index, key) => (
                  <>
                    <div
                      className=" border-2 border-[#14206A] rounded-lg p-4 gap-5 flex justify-center items-center flex-col"
                      key={index.id}
                    >
                      <img src={index.img} alt="" className="w-8 h-8" />
                      <p>{index.card}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="bg-[#DFE5FF]  rounded-2xl p-5">
              <div className="overflow-x-auto relative flex justify-center items-center">
                <table className="w-full  text-center">
                  <thead className="text-[#7351FC] text-sm font-bold">
                    <tr>
                      <th scope="col" className="py-3 px-6 "></th>
                      <th scope="col">Current Price</th>
                      <th scope="col">Total Nodes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Buy.map((items, key) => (
                      <tr key={items.id} className="">
                        <td className="py-3 text-[#7351FC] ">
                          <div className="md:border-2 rounded-full border-[#7351FC] border-opacity-30 text-[12px] p-1 font-medium leading-3 flex justify-center items-center">
                            {items.node}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-color text-sm font-bold">
                          {items.CurrentPrice}
                        </td>
                        <td className="py-3 px-3 text-color text-sm font-bold ">
                          {items.TotalNodes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-10" onClick={openpopp}>
                <Button btn={"Buy nodes"} />
              </div>
            </div>
            <div className="bg-[#DFE5FF]  rounded-2xl p-5">
              <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
                <div>
                  <p className="text-[#7351FC] text-2xl font-bold">My Nodes</p>
                </div>
                <Button btn={"view nodes"} />
              </div>
              <div className="text-[55px] text-center md:text-start text-color font-bold  flex justify-center">
                <p>.......</p>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap items-center gap-5 mt-2">
                {mynode.map((index, key) => (
                  <>
                    <div
                      className=" border-2 border-[#14206A] rounded-lg p-4 gap-5 flex justify-center items-center flex-col"
                      key={index.id}
                    >
                      <img src={index.img} alt="" className="w-8 h-8" />
                      <p>{index.card}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Slider>
        </div>

        {open && (
          <div
            className="py-3 ransition duration-150 ease-in-out z-50  fixed top-0 right-0 bottom-0 left-0 backdrop-blur"
            id="modal"
          >
            <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-3xl  ">
                <h1 className="text-[black] font-lg font-bold tracking-normal leading-tight mb-4">
                  Select Currency:
                </h1>
                <>
                  <div
                    className="relative  text-left"
                    onClick={() => setdrop(!drop)}
                  >
                    <div className="">
                      <div className="flex  justify-between items-center  rounded-md border bg-white px-4 py-3 text-sm font-medium  shadow-sm hover:bg-gray-50 focus:outline-none ">
                        {/* */}
                        {mark === 0 ? (
                          "Select payment method"
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
                      <div className=" absolute right-0 left-0 z-10 mt-2 cursor-pointer  rounded-md bg-white shadow-lg ">
                        <div className="" role="none">
                          {wallet.map((i) => (
                            <div
                              className="flex justify-between items-center px-4 py-3  border-b-2 "
                              key={i.id}
                              onClick={() => setmark(i)}
                            >
                              {/* {console.log(i)} */}
                              <div className=" flex justify-start items-center gap-4">
                                <div className="">
                                  <img src={i.img} alt="" className="w-16 " />
                                </div>
                                <div>
                                  <p className=" font-semibold">
                                    {i.walletname}
                                  </p>
                                  <p>Balance:{i.balance}</p>
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
                    className="text-color  focus:outline-none  font-extrabold w-full h-10 flex items-center  text-xl border-gray-300  border-b"
                    placeholder="Enter Price"
                    value={0.1 * value}
                    id="amount"
                    // 0.1
                  />

                  <p className="absolute right-0 top-2">{mark.walletname}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <label className="text-[black] text-2xl font-bold leading-tight tracking-normal">
                      Drop Schedule
                    </label>
                    <img src={info} alt="" />
                  </div>
                  <div className="rounded-md bg-[#DCE0FF] p-2">
                    <p>TIER 1 of 3</p>
                  </div>
                </div>
                <div className="mt-10 text-center rounded-md bg-[#97A5FC] p-3">
                  <p className="text-[black] text-xl font-bold leading-tight tracking-normal">
                    100 / 100 Remain
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-8">
                  <label className="text-[black] text-xl font-bold leading-tight tracking-normal">
                    Quantity: (up to 100)
                  </label>
                </div>

                <div className=" mb-5 mt-2 flex">
                  <div
                    className=" btn-bg p-2 rounded-l-lg flex justify-center items-center cursor-pointer"
                    onClick={increment}
                  >
                    <i className="fa-solid fa-chevron-up"></i>
                  </div>
                  <input
                    className="  focus:outline-none  font-light w-full h-10 flex items-center   border-[#E0E0E0] border-y-2 text-center "
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
                    className=" btn-bg p-2 rounded-r-lg flex justify-center items-center cursor-pointer"
                    onClick={decrement}
                  >
                    <i className="fa-solid fa-angle-down text-center "></i>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center"
                  onClick={payBUSD}
                >
                  <Button btn={"Place Order"} />
                </div>

                <div
                  className="cursor-pointer outline-none border-none absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
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
