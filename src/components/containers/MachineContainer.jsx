import "../../styles/MachineContainer.module.scss";
import useStore from "../../store/coin";

export default function MachineContainer() {
  const { machineCoin } = useStore();
  return (
    <div className="machineContainer">
      machinecontainer
      <p>자판기 \ {machineCoin}</p>
    </div>
  );
}
