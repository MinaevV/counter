import { useState } from "react";

import "./App.css";
import Total from "./Total.js";
import Plus from "./Plus.js";
import Minus from "./Minus.js";

function App(props) {
  let [total, setTotal] = useState(0);

  const plusFn = (e) => {
    // console.log(useState);
    setTotal((prevCount) => prevCount + 1);

    console.log(e);
  };

  const minusFn = () => {
    setTotal((prevCount) => prevCount - 1);

  };

  return (
    <div className="container">
      <Minus onClick={minusFn}></Minus>
      <Total value={total}></Total>
      <Plus onClick={plusFn}></Plus>
    </div>
  );
}

export default App;
