export default function ShoppingListItems({ item, quantity, completed }) {
  const style = {
    color: completed ? "green" : "red",
    textDecoration: completed ? "line-through" : "bold",
  };
  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  );
}
