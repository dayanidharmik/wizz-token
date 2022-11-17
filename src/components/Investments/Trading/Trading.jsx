import React, { useEffect, useState } from "react";
import "../investment.css";
import useEncryption from "../../EncryptData/EncryptData";
import instance from "../../BaseUrl/BaseUrl";
import toast from "react-hot-toast";

function Trading() {
  const [isReward, setIsReward] = useState([]);

  const { encryptData, decryptData } = useEncryption();

  const RewardsHistory = async () => {
    try {
      const result = await instance.get("/rewardsHistory");

      const results = decryptData(result.data.data);

      setIsReward(results.history);

      if (results.status) {
        toast.success(results.message);
      } else {
        toast.error(results.message);
      }
    } catch (err) {}
  };

  useEffect(() => {
    RewardsHistory();
  }, []);
  return (
    <>
      <div className="container mx-auto px-10 mt-10 ">
        <table class="responsive-table rounded-2xl">
          <thead>
            <tr>
              <th scope="col">Date</th>
              {/* <th scope="col">Smart NODE</th>
              <th scope="col">Power NODE</th>
              <th scope="col">Master NODE</th>
              <th scope="col">Total NODES</th> */}
              <th scope="col">Rewards Received</th>
            </tr>
          </thead>

          <tbody>
            {isReward.map((item) => (
              <tr>
                <>
                  <td data-title="Date">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  {/* <td data-title="Smart NODE">_</td>
              <td data-title="Power NODE">_</td>
              <td data-title="Master NODE">_</td>
              <td data-title="Total NODES">_</td> */}
                  <td data-title="Rewards Received">
                    {item.rewards.toFixed(3)}
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trading;
