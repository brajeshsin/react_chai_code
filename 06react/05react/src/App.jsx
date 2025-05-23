import { useState, useEffect } from "react";
import Order from "./Order";
import AllChai from "./AllChai";
import useSpecialHook from "./hooks/useSpecialHook";

export function App() {
  const { user, loading, error } = useSpecialHook();
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

  // console.log(user, "user");

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
      <Order />
      <AllChai />
      {user &&
        user.map((data) => {
          console.log(data, ">>>>>>");

          return (
            <div key={data.id}>
              <h3>{data.name}</h3>
            </div>
          );
        })}
    </>
  );
}
