import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import wizzlogo from "../img/wizz-logo.png";
import { Link, useLocation } from "react-router-dom";
import useEncryption from "../EncryptData/EncryptData";
import instance from "../BaseUrl/BaseUrl";
import toast, { Toaster } from "react-hot-toast";

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
  const { encryptData, decryptData } = useEncryption();
  const effectCalled = useRef(false);
  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();

    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  // ==============addWallet API=========
  const addWallet = async (wallet) => {
    try {
      const encrypt = encryptData(
        JSON.stringify({
          walletAddress: wallet,
        })
      );

      // console.log("address1", wallet);
      const result = await instance.post("/addWallet", {
        data: encrypt,
      });

      const results = decryptData(result.data.data);
      // console.log(results);

      if (results.status) {
        // toast.success(results.message);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  const openmetamask = async () => {
    const wallet = await window?.ethereum?.enable();
    setaddress(wallet?.toString());
    addWallet(wallet?.toString());
    handleNetworkSwitch("bsc");
  };

  useEffect(() => {
    if (!effectCalled.current && getDetelis) {
      openmetamask();
      effectCalled.current = true;
    }
  }, []);

  useEffect(() => {
    window?.ethereum?.on("chainChanged", networkChanged);
    return () => {
      window?.ethereum?.removeListener("chainChanged", networkChanged);
    };
  }, []);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className=" container  mx-auto md:py-10  px-10 ">
        <div className="flex justify-between gap-5 items-center">
          <Link to="/">
            <img
              src={wizzlogo}
              alt=""
              className="w-16 h-10 md:w-max md:h-max "
            />
          </Link>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-5 gap-3 md:p-0 p-5 text-center">
            {getDetelis?.username === undefined ? (
              <>
                {pathname === "/login" ||
                pathname === "/signUp" ||
                pathname === "/forgetpassword" ||
                pathname === "/resetpassword" ||
                pathname === "/otp" ? (
                  ""
                ) : (
                  <>
                    <Link to="/login">
                      <Button btn={"Log In/Sign Up"} />
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="text-white text-xl">
                  Hello, {getDetelis?.username}
                </p>
                <div onClick={() => openmetamask()}>
                  <Button
                    btn={`${
                      address === ""
                        ? "Connect Wallet"
                        : address?.slice(0, 3) + "...." + address?.slice(-3)
                    }`}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logo;
