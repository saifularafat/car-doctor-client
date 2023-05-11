import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layout/loginLayout";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import CheckOut from "../pages/CheckOut/CheckOut";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact"

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
        {
          path:'about',
          element: <About />
        },
        {
          path: 'service',
          element: <Service />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path:'/checkOut/:id',
          element: <CheckOut />,
          loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
        }
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