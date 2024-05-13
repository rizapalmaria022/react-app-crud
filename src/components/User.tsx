import { useState, useEffect } from "react";
import axiosClient from "../service/axiosClient";
import EditModal from "./common/editModal";
import { useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [userId, setUserId] = useState(0);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get("/users");
        const { users } = response.data;
        setUsers(users);
      } catch (error) {
        // Handle error or redirect to login
      }
    };
    fetchUser();
  }, []);

  const deleteUser = async (id: number) => {
    try {
      const response = await axiosClient.delete("/users/delete/" + id);

      if (response?.status == 200) {
        alert(response?.data.message);
        // refetch table
        await fetchUser();
      } else {
        alert("Error to register");
      }
    } catch (error) {
      // Handle error or redirect to login
    }
  };

  const editUser = (id: number) => {
    setUserId(id);
    setShowModal(true);
  };

  const Logout = () => {
    try {
      const response = axiosClient.get("/auth/logout/");

      if (response?.status == 200) {
        navigate("/login", { replace: true });
      } else {
        alert("Error to register");
      }
    } catch (error) {
      // Handle error or redirect to login
    }
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center"></a>
            <div className="flex items-center lg:order-2">
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => Logout()}
              >
                Logout
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
            List of Users
          </div>
          <div className="p-6">
            <div>
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                      <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Username
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Role
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => {
                          return (
                            <tr
                              className="border-b border-neutral-200 dark:border-white/10"
                              key={index}
                            >
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                {" "}
                                1{" "}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {user.firstname} {user.lastname}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {user.username}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {user.email}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {user.role}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <button
                                  type="button"
                                  className="mx-0.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                  onClick={() => editUser(user.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  data-modal-target="default-modal"
                                  data-modal-toggle="default-modal"
                                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                  onClick={() => deleteUser(user.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditModal showModal={showModal} userId={userId} />
    </>
  );
};

export default User;
