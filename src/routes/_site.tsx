import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import ToTop from "@features/ToTop/ToTop";

export const Route = createFileRoute("/_site")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="max-w-[1024px] m-auto p-6 pt-12">
        <Link to="/" className="font-start text-xl text-slate-100 transition-all duration-300 hover:underline">PokéDB</Link>
      </header>
      <main className="max-w-[1024px] m-auto  p-6">
        <Outlet />
        <ToTop />
      </main>
    </>
  );
}
