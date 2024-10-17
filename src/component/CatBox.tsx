import { useCatStore } from "../store/catStore";

function CatBox() {
  const { cats, increaseBigCats, increaseSmallCats, summaryFunction } =
    useCatStore();
  return (
    <div className="box">
      <h1>Cat Box - Zustand</h1>

      <p>Big Cats: {cats.bigCats}</p>
      <p>Small Cats: {cats.smallCats}</p>
      <p>{Math.random()}</p>

      <p>A total of: {summaryFunction()} cats</p>
      <div>
        <button onClick={increaseBigCats}>Increase Big Cats</button>
        <button onClick={increaseSmallCats}>Increase Small Cats</button>
      </div>
    </div>
  );
}

export default CatBox;
