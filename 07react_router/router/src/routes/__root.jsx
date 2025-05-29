import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useNotification } from "../context/NotificationContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { count, addNotification, resetNotification } = useNotification();

  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/about">About</Link> {"  "}
      <Link to="/products">Products</Link> {"  "}
      <br />
      <br />
      <h2>
        Using Context API:
        <br />
        <br />
        This is notification count: {count}
      </h2>
      <br />
      <button
        onClick={addNotification}
        style={{
          color: "yellow",
          cursor: "pointer",
          backgroundColor: "green",
          border: "none",
          padding: "10px 30px",
          borderRadius: "20px",
        }}
      >
        Add notification
      </button>
      <br />
      <br />
      <button
        onClick={resetNotification}
        style={{
          color: "yellow",
          cursor: "pointer",
          backgroundColor: "red",
          border: "none",
          padding: "10px 30px",
          borderRadius: "20px",
        }}
      >
        Reset notification
      </button>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
