import React from "react";
import '../investment.css'
function Trading() {
  const Tradingdata = [
    {
      id: 0,
      Date: "-",
      Smart: "-",
      Power: "-",
      Master: "-",
      Total: "-",
      Rewards: "-",
    },
    {
      id: 1,
      Date: "-",
      Smart: "-",
      Power: "-",
      Master: "-",
      Total: "-",
      Rewards: "-",
    },
    {
      id: 2,
      Date: "-",
      Smart: "-",
      Power: "-",
      Master: "-",
      Total: "-",
      Rewards: "-",
    },
    {
      id: 3,
      Date: "-",
      Smart: "-",
      Power: "-",
      Master: "-",
      Total: "-",
      Rewards: "-",
    },
    {
      id: 4,
      Date: "-",
      Smart: "-",
      Power: "-",
      Master: "-",
      Total: "-",
      Rewards: "-",
    },
  ];
  return (
    <>
      <div class=" container  mx-auto md:px-10 mt-5">
        <table class="rwd-table lg:w-full w-max mx-auto text-center nodetype-bg text-[#DFE5FF] ">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Smart NODE</th>
              <th>Power NODE</th>
              <th>Master NODE</th>
              <th>Total NODE</th>
              <th>Rewards Received</th>
            </tr>

            {Tradingdata.map((items) => (
              <>
                <tr>
                  <td data-th="Date" key={items.id}>
                    {items.Date}
                  </td>
                  <td data-th="Smart NODE">
                    <p>{items.Smart}</p>
                  </td>
                  <td data-th="Power NODE">{items.Power}</td>
                  <td data-th="Master NODE">{items.Master}</td>
                  <td data-th="Total NODE"> {items.Total}</td>
                  <td data-th="Rewards Received">{items.Rewards}</td>
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
