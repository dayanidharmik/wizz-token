import React from "react";

function Trading() {
  const Tradingdata = [
    {
      id: 0,
      td1: "UPS5005",
      td2: "UPS",
      td3: "ASDF19218",
      td4: "06/25/2016",
      td5: "12/25/2016",
    },
    {
      id: 1,
      td1: "UPS5005",
      td2: "UPS",
      td3: "ASDF19218",
      td4: "06/25/2016",
      td5: "12/25/2016",
    },
    {
      id: 2,
      td1: "UPS5005",
      td2: "UPS",
      td3: "ASDF19218",
      td4: "06/25/2016",
      td5: "12/25/2016",
    },
    {
      id: 3,
      td1: "UPS5005",
      td2: "UPS",
      td3: "ASDF19218",
      td4: "06/25/2016",
      td5: "12/25/2016",
    },
    {
      id: 4,
      td1: "UPS5005",
      td2: "UPS",
      td3: "ASDF19218",
      td4: "06/25/2016",
      td5: "12/25/2016",
    },
  ];
  return (
    <>
      <div class="container mx-auto mt-7 px-10 ">
        <table class="rwd-table w-full mx-auto text-center  text-[#19287D]">
          <tbody>
            <tr>
              <th>Name</th>
              <th>24 Hr Change</th>
              <th>current price</th>
              <th>Buying price</th>
              <th></th>
              <th></th>
            </tr>

            {Tradingdata.map((items) => (
              <>
                <tr>
                  <td data-th="Name " key={items.id}>
                    {items.td1}
                  </td>
                  <td data-th="24 Hr Change">
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-caret-up text-[#48BB78]"></i>
                      <p>{items.td2}</p>
                    </div>
                  </td>
                  <td data-th="current price">{items.td3}</td>
                  <td data-th="Buying price">{items.td4}</td>
                  <td>{items.td5}</td>
                  <td>
                    <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trading;
