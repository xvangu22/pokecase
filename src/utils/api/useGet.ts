import { type QueryKey, useQuery } from "@tanstack/react-query";
import { axiosGet } from "./axiosGet";

interface GetOptions {
  url: string;
  queryKey: QueryKey;
  enabled?: boolean;
}

export function useGet<T>(options: GetOptions) {
  return useQuery({
    queryKey: options.queryKey,
    queryFn: () => axiosGet<T>(options.url),
    enabled: options.enabled,
  });
}
