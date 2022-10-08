import React, { useEffect, useRef, useState } from "react";
import MainTitle from "../MainTitle/MainTitle";
import toast, { Toaster } from "react-hot-toast";
import useEncryption from "../EncryptData/EncryptData";
import instance from "../BaseUrl/BaseUrl";
import Button from "../Button/Button";

import { SocialIcon } from "react-social-icons";

function Referral() {
  const getDetelis = JSON.parse(localStorage.getItem("detelis"));
  const { decryptData } = useEncryption();
  const effectCalled = useRef(false);
  const [referaalleval1, setreferaalleval1] = useState([]);
  const [open, setopen] = useState(false);
  //===== openpopp=====
  const openpopp = () => {
    setopen(!open);
  };
  const Tradingdata = [
    {
      id: 0,
      Username: "Refer & Winbig",
      Name: "Sale",
      Email: "referrer@gmail.com",
      Date: "0123456789",
      Number: "399",
      Status: "06/25/2022",
      Spons: "Success",
      view: "1000",
    },
    {
      id: 1,
      Username: "Refer & Winbig",
      Name: "Sale",
      Email: "referrer@gmail.com",
      Date: "0123456789",
      Number: "399",
      Status: "06/25/2022",
      Spons: "Success",
      view: "1000",
    },
    {
      id: 2,
      Username: "Refer & Winbig",
      Name: "Sale",
      Email: "referrer@gmail.com",
      Date: "0123456789",
      Number: "399",
      Status: "06/25/2022",
      Spons: "Success",
      view: "1000",
    },
    {
      id: 3,
      Username: "Refer & Winbig",
      Name: "Sale",
      Email: "referrer@gmail.com",
      Date: "0123456789",
      Number: "399",
      Status: "06/25/2022",
      Spons: "Success",
      view: "1000",
    },
    {
      id: 4,
      Username: "Refer & Winbig",
      Name: "Sale",
      Email: "referrer@gmail.com",
      Date: "0123456789",
      Number: "399",
      Status: "06/25/2022",
      Spons: "Success",
      view: "1000",
    },
  ];

  /*================getAllchild API===============*/

  const getAllchild = async () => {
    try {
      const result = await instance.get("/getAllchild");

      const results = decryptData(result.data.data);
      console.log(results.childData[0].level1);
      if (results.status) {
        setreferaalleval1(results.childData[0].level1);
        // toast.success(results.message);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };
  console.log(referaalleval1);
  useEffect(() => {
    if (!effectCalled.current && getDetelis) {
      getAllchild();
      effectCalled.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" container  mx-auto md:px-10 mt-5">
      <div className="mt-7 flex-col md:flex-row ">
        <MainTitle title={"Referral"} />
      </div>
      <div className="flex flex-col gap-8 py-10">
        <>
          {getDetelis && (
            <div className="text-center text-lg text-white flex flex-col justify-center items-center">
              <p className="flex gap-1">
                Referral Code : {getDetelis?.username}
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(getDetelis?.username);
                    toast.success("Copied successfully");
                  }}
                >
                  <i className="fa-solid fa-copy ml-2 cursor-pointer "></i>
                </div>
              </p>

              <p>Share your referral code with friends and get rewards</p>
              <div className="my-5" onClick={openpopp}>
                <Button btn={"Share Link"} />
              </div>
              {open && (
                <>
                  <div className="flex gap-5" onClick={openpopp}>
                    <SocialIcon
                      url={`https://twitter.com/compose/tweet?url=Join my team on metalink https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      // bgColor="#ff5a01"
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://www.linkedin.com/sharing/share-offsite/?url=https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://api.whatsapp.com/send/?text=https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://t.me/share/url?url=https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      target="_blank"
                    />
                  </div>
                  <div className="flex mt-5">
                    <div>
                      Link :{" "}
                      {`https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                    </div>

                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`
                        );
                        toast.success("Copied successfully");
                      }}
                    >
                      <i className="fa-solid fa-copy ml-2 cursor-pointer "></i>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          <div>
            <table class=" rwd-table lg:w-full w-max mx-auto text-center nodetype-bg text-[#DFE5FF] ">
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date joined</th>
                  <th>Number of Nodes</th>
                  <th>Status(Active/Inactive)</th>
                  <th>Spons or List</th>
                  <th>View Member</th>
                </tr>

                {referaalleval1.map((items) => (
                  <>
                    <tr>
                      {items.username ? (
                        <td data-th="Username">{items.username}</td>
                      ) : (
                        <td data-th="Username">_</td>
                      )}

                      {items.Name ? (
                        <td data-th="Name">{items.Name}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      {items.email ? (
                        <td data-th="Email">{items.email}</td>
                      ) : (
                        <td data-th="Email">_</td>
                      )}
                      {items.createdAt ? (
                        <td data-th="Date joined">{items.createdAt}</td>
                      ) : (
                        <td data-th="Date joined">_</td>
                      )}

                      {items.Number ? (
                        <td data-th="Name">{items.Name}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      {items.status ? (
                        <td data-th="Name">
                          <i className="fa-sharp fa-solid fa-circle-check"></i>
                        </td>
                      ) : (
                        <td data-th="Name">
                          <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                        </td>
                      )}
                      {items.Spons ? (
                        <td data-th="Name">{items.Spons}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      {items.view ? (
                        <td data-th="Name">{items.view}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </div>
  );
}

export default Referral;
