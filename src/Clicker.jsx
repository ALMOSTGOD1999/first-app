export default function Clicker(buttonText, message) {
  const handleClick = () => {
    alert(message);
  };
  <button onClick={() => alert(message)}>{buttonText}</button>;
}
