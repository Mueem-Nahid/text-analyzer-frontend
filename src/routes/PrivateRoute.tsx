import {ReactNode} from 'react';
import {useKeycloak} from "@react-keycloak/web";

interface IProps {
  children: ReactNode
}

function PrivateRoute({children}: IProps) {
  /*const {userInfo} = useAppSelector(state => state.user)
  const {pathname} = useLocation();*/
  const {keycloak, initialized} = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? children : null;
}

export default PrivateRoute;