import { useCatStore } from "../store/catStore";

function CatBox2() {
  //   const {
  //     cats: { bigCats },
  //   } = useCatStore();

  const bigCats = useCatStore((state) => state.cats.bigCats);
  return (
    <div className="box">
      <h1>Cat Box - Zustand</h1>

      <p>Big Cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
}

export default CatBox2;
