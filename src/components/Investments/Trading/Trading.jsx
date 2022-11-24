import React, { useEffect, useState } from "react";
import "../investment.css";
import useEncryption from "../../EncryptData/EncryptData";
import instance from "../../BaseUrl/BaseUrl";
import toast from "react-hot-toast";

function Trading() {
  const [isReward, setIsReward] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRewardPerPage, setisRewardPostsPerPage] = useState(10);

  useEffect(() => {
    RewardsHistory();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * isRewardPerPage;
  const indexOfFirstPost = indexOfLastPost - isRewardPerPage;
  const currentRewards = isReward.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPaginate = () => setCurrentPage(currentPage + 1);
  const prevPaginate = () => setCurrentPage(currentPage - 1);

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(isReward?.length / isRewardPerPage); i++) {
    pageNumbers.push(i);
  }

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
            {currentRewards?.reverse()?.map((item) => (
              <tr>
                <>
                  <td data-title="Date">
                    {new Date(item?.createdAt)?.toLocaleDateString("en-US", {
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
                    {item?.rewards?.toFixed(1)}
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <nav
          aria-label="Page navigation "
          className="text-white flex justify-end items-center"
        >
          <ul className="inline-flex space-x-2">
            <li>
              <button
                onClick={() => prevPaginate()}
                className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            {pageNumbers?.length > 0 &&
              pageNumbers?.map((i) => (
                <li key={i}>
                  <button
                    className={`w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline  ${
                      currentPage === i ? "bg-[#03014e]" : "hover:bg-[#03014e]"
                    }`}
                    onClick={() => paginate(i)}
                  >
                    {i}
                  </button>
                </li>
              ))}
            <li>
              <button
                onClick={() => nextPaginate()}
                className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Trading;
