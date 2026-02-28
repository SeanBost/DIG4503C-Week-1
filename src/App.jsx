import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Button Counter</h1>
      <button onClick={handleClick} style={{ fontSize: "1.25rem", padding: "0.5rem 1rem" }}>
        Click me
      </button>
      <p>Presses: {count}</p>
    </div>
  );
}
