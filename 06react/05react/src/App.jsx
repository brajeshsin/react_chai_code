import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, ">>>>>>>>");
        setMessage(data);
      })
      .catch(() => setMessage("faileddd"));
  }, []);

  return (
    <div>
      <h1>Welcome to my code....</h1>
      <p>Learning react from scratch..</p>

      {message.map((mydata) => (
        <h2 key={mydata.id}>{mydata.title}</h2>
      ))}
    </div>
  );
}
