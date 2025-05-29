import { createFileRoute } from "@tanstack/react-router";
import { useNotification } from "../context/NotificationContext";

export const Route = createFileRoute("/learn_rout")({
  component: RouteComponent,
});

function RouteComponent() {
  const { count } = useNotification();
  return (
    <div>
      Hello "/learn_rout"!
      <h2>Hello Count: {count}</h2>
    </div>
  );
}
