import { v4 as uuid } from "uuid";
import { useState } from "react";
function randEmoji() {
  const choice = ["😶‍🌫️", "🤢", "😈", "🤕", "🤠", "🫠", "🥳", "😎", "😳", "😇"];
  return choice[Math.floor(Math.random() * choice.length)];
}
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randEmoji() }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  const pukeMaker = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "🤢" };
      });
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "1rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={pukeMaker}>Make them all pukes</button>
    </div>
  );
}
