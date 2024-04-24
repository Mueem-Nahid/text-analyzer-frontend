import './styles/index.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./kc/Keycloak.ts";
import MainLayout from "./layouts/MainLayout.tsx";

function App() {

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <MainLayout/>
      </ReactKeycloakProvider>
    </>
  )
}

export default App