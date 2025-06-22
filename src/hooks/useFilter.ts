import { useState } from "react";

export const useFilters = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);
  const resetPage = () => setPage(1);
  const resetFilters = () => setFilters([]);
  const resetAll = () => {
    resetPage();
    resetFilters();
  };
  
  return {
    page,
    setPage,
    filters,
    setFilters,
    resetPage,
    resetFilters,
    resetAll,
  };
};
