import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import wizzlogo from "../img/wizz-logo.png";
import { Link, useLocation } from "react-router-dom";

const networks = {
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};
const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    setError(err.message);
  }
};
function Logo() {
  const [address, setaddress] = useState("");
  const location = useLocation();
  const { pathname } = location;
  const getDetelis = JSON.parse(localStorage.getItem("detelis"));

  const openmetamask = async () => {
    const wallet = await window?.ethereum?.enable();
    setaddress(wallet.toString());
  };

  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();

    await changeNetwork({ networkName, setError });
    openmetamask();
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);
  return (
    <div className=" container  mx-auto md:py-10  px-10 ">
      <div className="flex justify-between gap-5 items-center">
        <img src={wizzlogo} alt="" className="w-16 h-10 md:w-max md:h-max " />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-5 gap-3 ">
          {getDetelis?.username === undefined && pathname === "/" ? (
            <Link to="/login">
              <Button btn={"Log In/Sign Up"} />
            </Link>
          ) : (
            <p className="text-2xl text-center md:mt-0 mt-5 text-white">{` ${
              getDetelis?.username === undefined
                ? ""
                : " Hello, " + getDetelis?.username
            }`}</p>
          )}
          <div onClick={() => handleNetworkSwitch("bsc")}>
            <Button
              btn={`${
                address === ""
                  ?  "Connect Wallet"
                  : address.slice(0, 3) + "...." + address.slice(-3)
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;

// <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
//   <main className="mt-4 p-4">
//     <h1 className="text-xl font-semibold text-gray-700 text-center">
//       Force MetaMask network
//     </h1>
//     <div className="mt-4">

//       <button
//         onClick={() => handleNetworkSwitch("bsc")}
//         className="mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full"
//       >
//         Switch to BSC
//       </button>
//       {/* <ErrorMessage message={error} /> */}
//     </div>
//   </main>
// </div>
