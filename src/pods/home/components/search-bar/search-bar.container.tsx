import { useEffect, useState } from "react";
import { SearchBarComponent } from "./search-bar.component";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

export const SearchBarContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 800);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(debouncedQuery)}`);
    }
  }, [debouncedQuery, navigate]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <SearchBarComponent
      value={searchQuery}
      handleSearchChange={handleSearchChange}
    />
  );
};
