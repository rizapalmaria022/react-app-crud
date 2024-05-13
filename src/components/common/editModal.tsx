import { useState, useRef, useEffect } from "react";
import axiosClient from "./../../service/axiosClient";
import { useNavigate } from "react-router-dom";

const EditModal = (myshowModal, myUserID) => {
  const navigate = useNavigate();
  const prevProp = useRef();
  const [showModal, setShowModal] = useState(false);


  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  }, );

  const setUserInfoValue = (e) => {
    console.log(e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(
        "http://localhost:5001/users/update/" + myshowModal?.userId,
        userInfo
      );

      if (response?.status == 200) {
        alert(response?.data.message);
        // Close modal
        setShowModal(false);
        // Reload page
        window.location.reload();
      } else {
        alert("Error to update user detail");
      }
    } catch (error) {
      alert("Error to update user detail");
      window.location.reload();
    }
  };

  useEffect(() => {
    // This will run whenever 'myProp' changes
    setShowModal(myshowModal?.showModal);
    // Update the previous prop for the next comparison
    prevProp.current = myshowModal;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosClient.get("/users/" + myshowModal?.userId);
        const { user } = response.data;

        setUserInfo({
          firstname: user?.firstname,
          lastname: user?.lastname,
          username: user?.username,
          email: user?.email,
          role: user?.role,
        });
      } catch (error) {
        // Handle error or redirect to login
      }
    };

    if (myshowModal?.showModal == true) {
      fetchUserInfo();
    }
  }, [myshowModal]);
  return (
    <>
      {showModal === true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit User Information
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    className="space-y-6"
                    action="Post"
                    onSubmit={submitUpdate}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {/*First name input */}

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={userInfo.firstname}
                            onChange={setUserInfoValue}
                          />
                        </div>
                      </div>

                      {/*Last name input*/}

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={userInfo.lastname}
                            onChange={setUserInfoValue}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={userInfo.username}
                          onChange={setUserInfoValue}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={userInfo.email}
                          onChange={setUserInfoValue}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Role
                      </label>
                      <div className="mt-2">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="role"
                          onChange={setUserInfoValue}
                          value={userInfo.role}
                        >
                          <option value="">Choose a role</option>
                          <option value="ADMIN">Admin</option>
                          <option value="USER">User</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EditModal;
