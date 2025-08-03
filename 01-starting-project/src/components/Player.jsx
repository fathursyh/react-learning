import { useRef, useState } from "react";

export default function Player() {
  const nameInput = useRef(null);
  
  const [playerName, setPlayerName] = useState('');
  function clickHandler() {
    setPlayerName(nameInput.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome { playerName || 'Unknown Person' }</h2>
      <p>
        <input type="text" ref={nameInput} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
