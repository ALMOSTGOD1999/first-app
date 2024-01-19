import Die from "./Die";
import "./Dice.css";
export default function Dice({ dice, color = "slategray" }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} />
      ))}
    </section>
  );
}
