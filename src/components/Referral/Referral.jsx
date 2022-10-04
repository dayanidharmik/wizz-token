import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import "./Referral.css";

function Referral() {
  const Tradingdata = [
    {
      id: 0,
      td1: "Refer & Winbig",
      td2: "Sale",
      td3: "referrer@gmail.com",
      td4: "0123456789",
      td5: "399",
      td6: "06/25/2016",
      td7: "Success",
    },
    {
      id: 1,
      td1: "Refer & Winbig",
      td2: "Sale",
      td3: "referrer@gmail.com",
      td4: "0123456789",
      td5: "399",
      td6: "06/25/2016",
      td7: "Success",
    },
    {
      id: 2,
      td1: "Refer & Winbig",
      td2: "Sale",
      td3: "referrer@gmail.com",
      td4: "0123456789",
      td5: "399",
      td6: "06/25/2016",
      td7: "Success",
    },
    {
      id: 3,
      td1: "Refer & Winbig",
      td2: "Sale",
      td3: "referrer@gmail.com",
      td4: "0123456789",
      td5: "399",
      td6: "06/25/2016",
      td7: "Success",
    },
    {
      id: 4,
      td1: "Refer & Winbig",
      td2: "Sale",
      td3: "referrer@gmail.com",
      td4: "0123456789",
      td5: "399",
      td6: "06/25/2016",
      td7: "Success",
    },
  ];
  return (
    <div className=" container  mx-auto px-10 mt-5">
      <div className="mt-7 flex-col md:flex-row ">
        <MainTitle title={"Referral"} />
      </div>
      <div>
        <table class=" mt-24 rwd-table lg:w-full w-max mx-auto text-center nodetype-bg text-[#DFE5FF] ">
          <tbody>
            <tr>
              <th>Campaign</th>
              <th>Event</th>
              <th>Referrer</th>
              <th>Order ID</th>
              <th>Purchase Value</th>
              <th>Date</th>
              <th>Status</th>
            </tr>

            {Tradingdata.map((items) => (
              <>
                <tr>
                  <td data-th="campaign " key={items.id}>
                    {items.td1}
                  </td>
                  <td data-th="Event">{items.td2}</td>
                  <td data-th="Referrer">{items.td3}</td>
                  <td data-th="Order ID">{items.td4}</td>
                  <td data-th="Purchase Value">{items.td5}</td>
                  <td data-th="Date">{items.td6}</td>
                  <td data-th="Status">{items.td7}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Referral;
