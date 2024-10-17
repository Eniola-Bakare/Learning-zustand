import { useCatStore } from "../store/catStore";

function CatBox3() {
  //   const cats = useCatStore.use.cats();
  const increaseSmallCats = useCatStore.use.increaseSmallCats();

  const increaseBigCats = useCatStore.use.increaseBigCats();

  return (
    <div className="box">
      <h1>Cat Box - Zustand</h1>

      {/* <p>Big Cats: {cats.smallCats}</p> */}
      <p>{Math.random()}</p>
      <button onClick={increaseBigCats}>add big cats</button>
      <button onClick={increaseSmallCats}>add small cats</button>
    </div>
  );
}

export default CatBox3;
