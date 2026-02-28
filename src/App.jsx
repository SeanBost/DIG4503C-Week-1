import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="app-card">
      <h1>Button Counter</h1>
      <button onClick={handleClick} className="skeu-btn">
        Click me
      </button>
      <p>Presses: {count}</p>
    </div>
  );
}
