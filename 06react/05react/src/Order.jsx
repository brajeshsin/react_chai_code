import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const ServeChai = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Chai Counter</h2>
      <p>You have served {count} cups od Chai</p>
      <button onClick={ServeChai}>Serve Chai</button>
    </div>
  );
}
