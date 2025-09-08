import { useState, useCallback, useEffect } from "react";
import { PhotoVM } from "../../../core/model";
import { dedupeById } from "../../../common/helpers/dedupe-by-id";

interface UsePaginationProps {
  getPictures: (page: number, perPage: number) => Promise<PhotoVM[]>;
  perPage?: number;
  maxItems?: number;
}

interface UsePaginationReturn {
  items: PhotoVM[];
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  setItems: React.Dispatch<React.SetStateAction<PhotoVM[]>>;
}

export const usePagination = ({
  getPictures,
  perPage = 10,
  maxItems = 80,
}: UsePaginationProps): UsePaginationReturn => {
  const [items, setItems] = useState<PhotoVM[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPage = useCallback(
    async (pageToLoad: number) => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);
      try {
        const newItems = await getPictures(pageToLoad, perPage);

        setItems((prev) => {
          // merge + dedupe + cap to maxItems in one place
          const merged = dedupeById([...prev, ...newItems]).slice(0, maxItems);

          // decide if there's more to load: no more if we hit the cap or API returned nothing
          const noMore = merged.length >= maxItems || newItems.length === 0;
          setHasMore(!noMore);

          return merged;
        });

        // increment page only if API returned something (otherwise we'll keep requesting the same empty page)
        if (newItems.length > 0) setPage((p) => p + 1);
      } catch (e) {
        console.error("Error loading pictures:", e);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    },
    [getPictures, isLoading, hasMore, perPage, maxItems]
  );

  // initial load (resets state)
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      setItems([]);
      setPage(1);
      setHasMore(true);
      setIsLoading(true);
      try {
        const first = await getPictures(1, perPage);
        if (cancelled) return;

        const merged = dedupeById(first).slice(0, maxItems);
        setItems(merged);
        setPage(2);
        setHasMore(merged.length < maxItems && first.length > 0);
      } catch (e) {
        if (!cancelled) {
          console.error("Error initializing pictures:", e);
          setHasMore(false);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    init();
    return () => {
      cancelled = true;
    };
  }, [getPictures, perPage, maxItems]);

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;
    fetchPage(page);
  }, [fetchPage, page, hasMore, isLoading]);

  return {
    items,
    page,
    isLoading,
    hasMore,
    loadMore,
    setItems,
  };
};
