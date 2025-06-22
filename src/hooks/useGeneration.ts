import { useGet } from "@utils/api/useGet";
import type { NamedAPIResourceList } from "@types/common";
import type { Generation } from "@types/games";

export const useGeneration = (generation: number) => {
  return useGet<Generation>({
    url: `/generation/${generation}`,
    queryKey: ["generation", generation],
    enabled: !!generation,
  });
};

export const useGenerations = () => {
  return useGet<NamedAPIResourceList[]>({
    url: `/generation`,
    queryKey: ["generations"],
    enabled: true,
  });
};
