import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Home from './components/Home';
import AuthContext from './athuntication/AuthContext';
import Login from './athuntication/Login';
import Register from './athuntication/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
