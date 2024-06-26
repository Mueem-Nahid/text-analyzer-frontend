import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import HomePage from "../pages/HomePage.tsx";
import StartAnalysisPage from "../pages/StartAnalysisPage.tsx";
import Signup from "../pages/Signup.tsx";
import AnalyzePage from "../pages/AnalyzePage.tsx";
import NotFoundPage from "../pages/404.tsx";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: '/start-analysis',
        element:
          <PrivateRoute>
            <StartAnalysisPage />
          </PrivateRoute>,
      },
      {
        path: '/analyze/:id',
        element:
          <PrivateRoute>
            <AnalyzePage />
          </PrivateRoute>,
      },
      {
        path: '*',
        element: <NotFoundPage/>,
      },
    ]
  }
]);

export default routes;