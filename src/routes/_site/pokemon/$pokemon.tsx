import Pokemon from "@features/Pokemon/Details";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/pokemon/$pokemon")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pokemon } = useParams({ from: "/_site/pokemon/$pokemon" });

  return <Pokemon name={pokemon} />;
}
