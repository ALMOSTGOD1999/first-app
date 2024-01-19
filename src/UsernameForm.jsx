import { useState } from "react";
export default function ReactForm() {
  const [username, setUsername] = useState("babu");
  const changeUsername = (evt) => {
    setUsername(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={changeUsername}
      />
      <button>Submit</button>
    </div>
  );
}
