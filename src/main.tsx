import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './components/Signup.tsx';
import User from './components/User.tsx';
import Login from './components/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "users",
        element: <User/>
      },
      {
        path: "signup",
        element: <Signup/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
