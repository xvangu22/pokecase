import { useState } from "react";

export const useFilters = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);
  const resetQuery = () => {
    setQuery("");
    setPage(1);
  }
  const resetPage = () => setPage(1);
  const resetFilters = () => setFilters([]);
  const resetAll = () => {
    resetQuery();
    resetFilters();
  };
  
  return {
    query,
    setQuery,
    page,
    setPage,
    filters,
    setFilters,
    resetPage,
    resetQuery,
    resetFilters,
    resetAll,
  };
};
