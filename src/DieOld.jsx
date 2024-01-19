export default function Die() {
  const roll = Math.floor(Math.random() * 9) + 1;
  return <>{roll}</>;
}
