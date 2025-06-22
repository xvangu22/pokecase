import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { usePokemons, useGeneration, useFilters } from "@hooks/index";
import type { Pokemon } from "@types/pokemon";
import ListCard from "./ListCard";
import Loader from "../Loader/Loader";

const PAGE_SIZE = 12;

function List({ fromGeneration }: { fromGeneration: number }) {
  const { page, setPage, filters, setFilters } = useFilters();
  const { data: generation } = useGeneration(fromGeneration || 1);
  const pokemonQueries = usePokemons(generation?.pokemon_species || []);

  const filteredQueries = useMemo(() => {
    return pokemonQueries.filter((query) => {
      if (!query.data) return false;
      const pokemon = query.data as Pokemon;
      return (
        filters.length === 0 ||
        pokemon.types.some((type) => filters.includes(type.type.name))
      );
    });
  }, [pokemonQueries, filters]);

  const paginatedQueries = useMemo(() => {
    return filteredQueries.slice(0, PAGE_SIZE * page);
  }, [filteredQueries, page]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeName = event.target.id;
    setFilters((prev) =>
      prev.includes(typeName)
        ? prev.filter((type) => type !== typeName)
        : [...prev, typeName]
    );
    setPage(1);
  };

  if (pokemonQueries.every((query) => query.isLoading))
    return <Loader isLoading={true} />;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-inter font-bold capitalize text-slate-100 text-3xl">
        {generation?.name?.replace("-", " ")}
      </h1>

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-inter font-bold capitalize text-slate-100 text-2xl">
            Filter
          </h2>
          <p className="font-inter text-slate-300">
            Filter Pokémon by type. Click on a Pokémon to view its details.
          </p>
        </div>

        <ul className="list-none p-0 m-0 flex flex-wrap gap-2 w-auto">
          {generation?.types.map((type) => (
            <li key={type.name}>
              <label className="flex gap-2 px-2 py-1 items-center font-inter font-bold capitalize text-slate-100 border-1 border-slate-600 rounded cursor-pointer transition-all duration-300 ease-in-out has-checked:bg-slate-700 hover:bg-slate-700">
                <input
                  type="checkbox"
                  id={type.name}
                  className="hidden peer"
                  onChange={handleFilter}
                />
                {type.name.replace("-", " ")}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <ul className="list-none p-0 m-0 grid grid-cols-1 gap-6 md:grid-cols-3">
        {paginatedQueries.map((query, index) => {
          const pokemon = query.data as Pokemon;
          return (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.name}`}>
                <ListCard {...pokemon} />
              </Link>
            </li>
          );
        })}
      </ul>

      {paginatedQueries.length < filteredQueries.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-slate-700 text-white rounded cursor-pointer transition-all duration-300 hover:bg-slate-600 font-inter font-bold capitalize"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

export default List;
