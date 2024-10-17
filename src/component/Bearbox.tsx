import { useZustandStore } from "../store/bearStore";

function Bearbox() {
  const { bear, decreaseBearCount, increaseBearCount, removeAllBear } =
    useZustandStore();
  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>Bear: {bear}</p>
      <div>
        <button onClick={increaseBearCount}>Add Bear</button>
        <button onClick={decreaseBearCount}>Delete Bear</button>
        <button onClick={removeAllBear}>Remove All Bear</button>
      </div>
    </div>
  );
}

export default Bearbox;
