import {ReactNode} from 'react';
import {useKeycloak} from "@react-keycloak/web";
import {Navigate} from "react-router-dom";
import Spinner from "../components/Spinner.tsx";

interface IProps {
  children: ReactNode
}

function PrivateRoute({children}: IProps) {
  /*const {userInfo} = useAppSelector(state => state.user)
  const {pathname} = useLocation();*/
  const {keycloak, initialized} = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  if (!initialized) {
    return <div className="min-h-[80dvh] flex justify-center items-center">
      <Spinner w={10} h={10}/>
    </div>;
  }

  return isLoggedIn ? children : <Navigate to="/signup"></Navigate>;
}

export default PrivateRoute;