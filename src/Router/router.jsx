import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layout/loginLayout";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />
        },
      ]
    },
    {
      path: '/',
      element: <LoginLayout />,
      children: [
        {
          path: 'login',
          element: <Login />
        }, 
        {
          path: 'signup',
          element: <Register />
        },
        {
          path: 'terms',
          element: <Terms />
        }
      ]
    }
  ]);
export default router;