import {useAppDispatch} from "./redux/hook.ts";
import {setCredentials} from "./redux/features/user/userSlice.ts";
import {IUser} from "./types/globalTypes.ts";
import {useEffect} from "react";
import Navbar from "./layouts/Navbar.tsx";
import './styles/index.css';
import keycloak from "./kc/Keycloak.ts";
import {ReactKeycloakProvider} from "@react-keycloak/web";

function App() {
  const dispatch = useAppDispatch()


  useEffect(() => {
    const checkUser = () => {
      const storedUser: string | null = localStorage.getItem('user');
      const user: IUser | null = storedUser ? JSON.parse(storedUser) : null;
      if (user) {
        dispatch(setCredentials(user));
      }
    }

    checkUser()
  }, [dispatch])


  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Navbar/>
      </ReactKeycloakProvider>
    </>
  )
}

export default App