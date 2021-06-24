import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./service/client";
import SpaceMission from "./component/spaceMission";

function App() {
  return (
    <ApolloProvider client={client}>
      <SpaceMission />
    </ApolloProvider>
  );
}

export default App;
