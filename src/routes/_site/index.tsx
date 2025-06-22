import { List } from "@features/Pokemon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/")({
  component: Home,
});

function Home() {
  return <List fromGeneration={1} />
}
