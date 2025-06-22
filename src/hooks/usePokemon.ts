import { useQueries } from "@tanstack/react-query";
import { axiosGet, useGet } from "@utils/api";
import type { NamedAPIResource } from "@types/common";
import type { Pokemon } from "@types/pokemon";

export const usePokemon = ({ name, id }: { name?: string; id?: number }) => {
  const identifier = name || id;
  return useGet<Pokemon>({
    url: `/pokemon/${identifier}`,
    queryKey: ["pokemon", identifier],
    enabled: !!identifier,
  });
};

export const usePokemons = (speciesList: NamedAPIResource[]) => {
  const sortedSpecies = [...speciesList].sort((a, b) => {
    const idA = Number(a.url.split("/").filter(Boolean).pop());
    const idB = Number(b.url.split("/").filter(Boolean).pop());
    return idA - idB;
  });

  return useQueries({
    queries: sortedSpecies.map((species) => {
      return {
        queryKey: ["pokemon", species.name],
        queryFn: () => axiosGet<Pokemon>(`/pokemon/${species.name}`),
        enabled: !!species?.name,
      };
    }),
  });
};
