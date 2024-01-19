export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const isWinner = num1 === num2;
  const style = { color: isWinner ? "green" : "red" };

  return (
    <>
      <h1>welcome bitch</h1>
      <h2 style={style}> {isWinner ? "You WIN !!" : "You LOSE!!"} </h2>
      <p>Num1 :{num1}</p>
      {/* <Headings color="brown" text="hi"/> */}

      <p>Num2 : {num2}</p>
    </>
  );
}
