import { useState } from "react";
import "../../styles/Wallet.Module.scss";

export default function Wallet() {
  const [coin, setCoin] = useState(20000);
  return (
    <div className="machine">
      <p className="walletTitle">My Wallet</p>
      <div className="coinEnter">
        <p>\ {coin}</p>
      </div>
      <div className="coinContainer">
        <div className="coin">50</div>
        <div className="coin">100</div>
        <div className="coin">500</div>
        <div className="coin">1,000</div>
      </div>
    </div>
  );
}
