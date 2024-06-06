import Inventory from "./components/containers/Inventory";
import MachineContainer from "./components/containers/MachineContainer";
import Wallet from "./components/containers/Wallet";

function App() {
  return (
    <div className="App">
      <MachineContainer />
      <Wallet />
      <Inventory />
    </div>
  );
}

export default App;
