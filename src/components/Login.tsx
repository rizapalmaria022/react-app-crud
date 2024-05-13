import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: 'riza@gmail.com',
    password: 'password'
  });

  const setCredentialsValue = (e) => {
    console.log(e.target.value)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post('http://localhost:5001/auth/login', credentials);
      const { token, message } = response.data;


      if(response?.status == 200){
        alert(message)
        // Store the tokens in localStorage or secure cookie for later use
        localStorage.setItem('token', token);
        //   Redirect or perform other actions upon successful login
        navigate('/users', { replace: true });
      }else{
        alert("Error to register")
      }
    
    } catch (error) {
      alert("Error to register")
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitLogin}>
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
                  value={credentials.email}
                  onChange={setCredentialsValue}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={credentials.password}
                  onChange={setCredentialsValue}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member ?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
