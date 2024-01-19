import { useState } from "react";

export default function ScoreKeeper(numPlayer) {
  const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
  function p1ScoreChanger() {
    const p1NewScore = { ...score, p1Score: score.p1Score + 1 };
    setScore(p1NewScore);
  }
  function p2ScoreChanger() {
    const p2NewScore = { ...score, p2Score: score.p2Score + 1 };
    setScore(p2NewScore);
  }

  return (
    <div>
      <p>player1 :{score.p1Score}</p>
      <p>player2 :{score.p2Score}</p>
      <button onClick={p1ScoreChanger}>+player1</button>
      <button onClick={p2ScoreChanger}>+player2</button>
    </div>
  );
}
