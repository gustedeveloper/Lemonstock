import { useLocation } from "react-router-dom";
import { SearchResultsComponent } from "./search-results.component";

export const SearchResultsContainer = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";

  return <SearchResultsComponent filter={query} />;
};
