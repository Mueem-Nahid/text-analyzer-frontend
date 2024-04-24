import './styles/index.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./kc/Keycloak.ts";
import MainLayout from "./layouts/MainLayout.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <ToastContainer />
        <MainLayout/>
      </ReactKeycloakProvider>
    </>
  )
}

export default App