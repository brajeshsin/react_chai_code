import { useEffect, useState } from "react";

export default function ChaiMenu() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => setError("Failed to fetch data"));
    // console.log(menu, "menu");
  }, []);

  return (
    <div>
      <h2>Available chai</h2>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}

      <ul>
        {menu.map((chai) => {
          // console.log(chai, "this is chai data");
          return (
            <li key={chai.id}>{chai.title ? chai.title : "Unknown chai"}</li>
          );
        })}
      </ul>
    </div>
  );
}
