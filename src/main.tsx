import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.tsx";
import store from "./redux/store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>,
)
