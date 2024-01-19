import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Headings from "./Header";
import ShoppingList from "./ShoppingList";
import ShoppingListItems from "./ShoppingListItems";
import PropertyList from "./PropertyList";
import Toggler from "./Toggler";
import TogglerCounter from "./ToggleCounter";
import Counter from "./assets/Counter";
import ColorBox from "./assets/ColorBox";
import ScoreKeeper from "./assets/ScoreKeeper";
import EmojiClicker from "./assets/emojiClicker";
import Die from "./assets/Die";
import Dice from "./assets/Dice";
import ReactForm from "./assets/ReactForm";

function App() {
  const [count, setCount] = useState(0);
  // const colors = [
  //   "#C6709F",
  //   "#B33557",
  //   "#673AB7",
  //   "#8BC3B5",
  //   "#DFE111",
  //   "#4CAF25",
  //   "#FF6799",
  //   "#FFEB3B",
  //   "#FF5772",
  //   "#9C2780",
  //   "#FFEB38",
  //   "#673AB7",
  //   "#00BCD4",
  //   "#BBD76F",
  //   "#CDD110",
  //   "#2196F3",
  // ];

  // const data = [
  // { id: 1, item: "milk", quantity: 1, completed: false },
  // { id: 2, item: "fruits", quantity: 5, completed: false },
  // { id: 3, item: "bread", quantity: 2, completed: false },
  // { id: 4, item: "condom", quantity: 15, completed: true },
  // ];

  // const properties = [
  //   { id: 123001, name: "Bari no 1", rating: 4.9, price: 1900 },
  //   { id: 123002, name: "Bari no 2", rating: 4.2, price: 1500 },
  //   { id: 123003, name: "Bari no 3", rating: 4.1, price: 1300 },
  //   { id: 123004, name: "Bari no 4", rating: 4.4, price: 1700 },
  //   { id: 123005, name: "Bari no 5", rating: 3.1, price: 1200 },
  // ];

  return (
    <>
      {/* <ReactForm /> */}
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[3, 4, 1]} />
      <Dice dice={[8, 7, 1]} /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper /> */}
      {/* <ColorBox colors={colors} /> */}
      {/* <Counter /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Headings color="magenta" Text="welcome" /> */}
      {/* <Headings color="magenta" Text="welcome" /> */}
      {/* <Headings color="magenta" Text="welcome" /> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
    </>
  );
}

export default App;
