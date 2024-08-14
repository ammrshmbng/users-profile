
const UserLists = () => {
  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto mt-20 sm:px-8">
    <div className="flex items-center justify-between pb-6">
      <div>
        <h2 className="font-semibold text-gray-700">User Accounts</h2>
        <span className="text-xs text-gray-500">View accounts of registered users</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="ml-10 space-x-8 lg:ml-40">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md focus:outline-none focus:ring hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
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
            <tr>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">3</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap">Besique Monroe</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Administrator</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Sep 28, 2022</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span className="px-3 py-1 text-xs font-semibold text-green-900 bg-green-200 rounded-full">Active</span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">7</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="/images/ddHJYlQqOzyOKm4CSCY8o.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap">James Cavier</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Author</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Sep 28, 2022</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span className="px-3 py-1 text-xs font-semibold text-green-900 bg-green-200 rounded-full">Active</span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">12</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap">Elvis Son</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Editor</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Sep 28, 2022</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span className="px-3 py-1 text-xs font-semibold text-yellow-900 bg-yellow-200 rounded-full">Suspended</span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 text-sm bg-white">
                <p className="whitespace-no-wrap">66</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="/images/fR71TFZIDTv2jhvKsOMhC.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap">Dana White</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white">
                <p className="whitespace-no-wrap">Administrator</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white">
                <p className="whitespace-no-wrap">Sep 28, 2022</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white">
                <span className="px-3 py-1 text-xs font-semibold text-red-900 bg-red-200 rounded-full">Inactive</span>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">12</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap">Elvis Son</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Editor</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="whitespace-no-wrap">Sep 28, 2022</p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span className="px-3 py-1 text-xs font-semibold text-yellow-900 bg-yellow-200 rounded-full">Suspended</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center px-5 py-5 bg-white border-t sm:flex-row sm:justify-between">
        <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
        <div className="inline-flex mt-2 sm:mt-0">
          <button className="w-12 h-12 mr-2 text-sm font-semibold text-gray-600 transition duration-150 border rounded-full hover:bg-gray-100">Prev</button>
          <button className="w-12 h-12 text-sm font-semibold text-gray-600 transition duration-150 border rounded-full hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default UserLists
