import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  defaultPreload: "Intent",
});

function RouteComponent() {
  return (
    <div>
      <h1>This is about section.</h1>
    </div>
  );
}
