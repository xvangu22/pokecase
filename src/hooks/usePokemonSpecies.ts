import { useGet } from "@utils/api/useGet";
import type { PokemonSpecies } from "@types/pokemon";

export const usePokemonSpecies = ({ name, id }: { name?: string; id?: number }) => {
  const identifier = name || id;
  return useGet<PokemonSpecies>({
    url: `/pokemon-species/${identifier}`,
    queryKey: ["pokemon-species", identifier],
    enabled: !!identifier,
  });
};