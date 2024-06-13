import Inventory from "./components/containers/Inventory";
import MachineContainer from "./components/containers/MachineContainer";
import Wallet from "./components/containers/Wallet";
import "../src/styles/global.scss";

function App() {
  return (
    <>
      <div className="App">
        <MachineContainer />
        <div className="userContainer">
          <Wallet />
          <Inventory />
        </div>
      </div>
    </>
  );
}

export default App;
