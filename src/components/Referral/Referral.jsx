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

  /*================getAllchild API===============*/

  const getAllchild = async () => {
    try {
      const result = await instance.get("/getAllchild");

      const results = decryptData(result.data.data);
      // console.log(results.data);
      if (results.status) {
        setreferaalleval1(results.data);
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
    <div className=" container  mx-auto md:px-10 mt-5 px-5">
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
                      url={`https://twitter.com/compose/tweet?url= Hello, I would like to invite you to join Wizzcoin Project. Join through  https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      // bgColor="#ff5a01"
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://www.linkedin.com/sharing/share-offsite/?url=https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://api.whatsapp.com/send/?text= Hello, I would like to invite you to join Wizzcoin Project. Join through https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
                      target="_blank"
                    />
                    <SocialIcon
                      url={`https://t.me/share/url?url= Hello, I would like to invite you to join Wizzcoin Project. Join through https://app.wizzcoin.io/signUp/?ref=${getDetelis?.username}`}
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
            <table class=" rwd-table lg:w-full w-max mx-auto text-center nodetype-bg text-[#DFE5FF]">
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
                    {/* {console.log(items.child[0])} */}
                    <tr>
                      <td data-th="Username">{items.child[0].username}</td>
                      {items.child[0].name ? (
                        <td data-th="Name">{items.child[0].name}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      <td data-th="Email">{items.child[0].email}</td>
                      <td data-th="Date joined">{items.child[0].createdAt}</td>
                      {items.child[0].Number ? (
                        <td data-th="Name">{items.child[0].Number}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      {items.child[0].status ? (
                        <td data-th="Name">
                          <i className="fa-sharp fa-solid fa-circle-check text-green-600"></i>
                        </td>
                      ) : (
                        <td data-th="Name">
                          <i className="fa-sharp fa-solid fa-circle-xmark text-red-600"></i>
                        </td>
                      )}
                      {items.child[0].Spons ? (
                        <td data-th="Name">{items.child[0].Spons}</td>
                      ) : (
                        <td data-th="Name">
                          <p>_</p>
                        </td>
                      )}
                      {items.child[0].view ? (
                        <td data-th="Name">{items.child[0].view}</td>
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
