import {ReactNode} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../redux/hook.ts";
import {useKeycloak} from "@react-keycloak/web";

interface IProps {
  children: ReactNode
}

function PrivateRoute({children}: IProps) {
  const {userInfo} = useAppSelector(state => state.user)
  const {pathname} = useLocation();
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
}

export default PrivateRoute;