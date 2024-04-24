import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import HomePage from "../pages/HomePage.tsx";
import SecuredPage from "../pages/SecuredPage.tsx";
import Signup from "../pages/Signup.tsx";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App children/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path:'/signup',
        index: true,
        element: <Signup/>
      },
      {
        path: '/secured',
        element:
          <PrivateRoute>
            <SecuredPage />
          </PrivateRoute>,
      },
    ]
  }
]);

export default routes;