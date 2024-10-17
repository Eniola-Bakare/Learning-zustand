import Bearbox from "./component/bearbox";
import CatBox2 from "./component/CartBx2";
import CatBox from "./component/CatBox";
import CatBox3 from "./component/CatBox3";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <Bearbox />
      <CatBox />
      <CatBox2 />
      <CatBox3 />
    </div>
  );
}

export default App;
