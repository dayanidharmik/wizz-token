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

      if (results.status) {
        setreferaalleval1(results.data);
        // toast.success(results.message);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (!effectCalled.current && getDetelis?.username) {
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
          <MainTitle title={"Level 1"} />

          <div className="rounded-2xl  ">
            <table class="responsive-table border1">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  {/* <th scope="col">Name</th> */}
                  {/* <th scope="col">Email</th> */}
                  <th scope="col">Date joined</th>
                  <th scope="col">Number of Nodes</th>
                  <th scope="col">Status(Active/Inactive)</th>
                  <th scope="col">Spons or List</th>
                  <th scope="col">View Member</th>
                </tr>
              </thead>
              {referaalleval1.length === 0 ? (
                <tbody>
                  <>
                    <tr>
                      <td data-title="Username">_</td>
                      {/* <td data-title="Name">_</td>
                      <td data-title="Email">_</td> */}
                      <td data-title="Date joined">_</td>
                      <td data-title="Number of Nodes">_</td>
                      <td data-title="Status(Active/Inactive)">_</td>
                      <td data-title="Spons or List">_</td>
                      <td data-title="View Member">_</td>
                    </tr>
                  </>
                </tbody>
              ) : (
                <tbody>
                  {referaalleval1.map((items) => (
                    <>
                      <tr>
                        <td data-title="Username">
                          {items.child[0]?.username}
                        </td>
                        {/* <td data-title="Name">_</td> */}
                        {/* <td data-title="Email">{items.child[0]?.email}</td> */}
                        <td data-title="Date joined">
                          {items.child[0]?.createdAt}
                        </td>
                        <td data-title="Number of Nodes">_</td>
                        {items.child[0]?.status === "Unblocked" ? (
                          <td data-title="Status(Active/Inactive)">
                            <i className="fa-sharp fa-solid fa-circle-check text-green-600"></i>
                          </td>
                        ) : (
                          <td data-title="Status(Active/Inactive)">
                            <i className="fa-sharp fa-solid fa-circle-xmark text-red-600"></i>
                          </td>
                        )}
                        <td data-title="Spons or List">_</td>
                        <td data-title="View Member">_</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </>
      </div>
    </div>
  );
}

export default Referral;
