import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import HomePage from "../pages/SecuredPage.tsx";
import SecuredPage from "../pages/SecuredPage.tsx";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <HomePage/>
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