import { useState, useEffect } from "react";
// import Order from "./Order";
import AllChai from "./AllChai";

export function App() {
  const [message, setMessage] = useState(1);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, ">>>>>>>>");
  //       setMessage(data);
  //     })
  //     .catch(() => setMessage("faileddd"));
  // }, []);

  useEffect(() => {
    setMessage((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to my code....</h1>
        <p>Learning react from scratch</p>
        <h2>{message}</h2>

        {/* {message.map((mydata) => (
        <h2 key={mydata.id}>{mydata.title}</h2>
      ))} */}
      </div>
      <AllChai />
    </>
  );
}
