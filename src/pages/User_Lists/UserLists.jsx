import UserCard from "./UserCard";
import { useState } from "react";


const UserLists = () => {
  const [page, setPage] = useState(1);
  const handlePage = (e) => {
    setPage((state)=>state+=Number(e.target.name));
  }

  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto mt-20 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">User Accounts</h2>
          <span className="text-xs text-gray-500">
            View accounts of registered users
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md focus:outline-none focus:ring hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
              CSV
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-widest text-left text-white uppercase bg-blue-600">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">User Role</th>
                <th className="px-5 py-3">Created at</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              <UserCard page={page} />
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center px-5 py-5 bg-white border-t sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">
            {" "}
            Showing 1 to 6 of {page} Entries{" "}
          </span>
          <div className="inline-flex mt-2 sm:mt-0">
            {
              
              page === 2 ?
              (
                <button onClick={handlePage}name="-1" className="w-12 h-12 mr-2 text-sm font-semibold text-gray-600 transition duration-150 border rounded-full hover:bg-gray-100">
                Prev
              </button>
              )
              :(
                <>
                <button onClick={handlePage}name="-1" className="w-12 h-12 mr-2 text-sm font-semibold text-gray-600 transition duration-150 border rounded-full hover:bg-gray-100">
              Prev
            </button>
            <button onClick={handlePage} name="+1" className="w-12 h-12 text-sm font-semibold text-gray-600 transition duration-150 border rounded-full hover:bg-gray-100">
              Next
            </button>
                </>
              )
              
            } 

            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLists;
