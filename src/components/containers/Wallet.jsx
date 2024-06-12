import "../../styles/Wallet.Module.scss";
import useStore from "../../store/coin";

export default function Wallet() {
  const { machineCoin, walletCoin, insertCoin } = useStore((state) => state);

  return (
    <div className="machine">
      <p className="walletTitle">My Wallet</p>
      <div className="coinEnter">
        <p>\ {walletCoin}</p>
      </div>
      <div className="coinContainer">
        <div
          className={`coin ${walletCoin >= 50 ? "" : "disabled"}`}
          onClick={() => walletCoin >= 50 && insertCoin(50)}
        >
          50
        </div>
        <div
          className={`coin ${walletCoin >= 100 ? "" : "disabled"}`}
          onClick={() => walletCoin >= 100 && insertCoin(100)}
        >
          100
        </div>
        <div
          className={`coin ${walletCoin >= 500 ? "" : "disabled"}`}
          onClick={() => walletCoin >= 500 && insertCoin(500)}
        >
          500
        </div>
        <div
          className={`coin ${walletCoin >= 1000 ? "" : "disabled"}`}
          onClick={() => walletCoin >= 1000 && insertCoin(1000)}
        >
          1,000
        </div>
      </div>
    </div>
  );
}
//클래스에 맞게 값 지정
