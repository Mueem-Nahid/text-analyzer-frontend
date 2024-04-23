import Navbar from "./layouts/Navbar.tsx";
import './styles/index.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./kc/Keycloak.ts";

function App() {

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Navbar/>
      </ReactKeycloakProvider>
    </>
  )
}

export default App