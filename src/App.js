import React, { useState } from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import "./App.css";

function App() {
  const [cartList, setCart] = useState([]);
  return (
    <div className="App">
      <Cart cartList={cartList} />
      <Item setCart={setCart} cartList={cartList} />
    </div>
  );
}

export default App;
