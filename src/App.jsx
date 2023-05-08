import "./App.css";
import Characters from "./components/Characters/Characters";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Characters />
      </GlobalProvider>
    </>
  );
}

export default App;
