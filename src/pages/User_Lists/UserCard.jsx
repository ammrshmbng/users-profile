import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ page }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
    });
  }, [page]);

  const element = users.map((user) => {
    return (
      <tr key={user.id}>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="whitespace-no-wrap">{user.id}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={user.avatar}
                alt=""
              />
            </div>
            <div className="ml-3">
              <Link to={`/user-detail/${user.id}`}>
                <p className="whitespace-no-wrap hover:underline hover:text-blue-700">{user.first_name}</p>
              </Link>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="whitespace-no-wrap">{user.last_name}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="whitespace-no-wrap">Sep 28, 2022</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <span className="px-3 py-1 text-xs font-semibold text-green-900 bg-green-200 rounded-full">
            Active
          </span>
        </td>
      </tr>
    );
  });

  return <>{element}</>;
};

export default UserCard;
