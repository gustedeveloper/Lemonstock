import {
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { PhotoVM } from "../../core/model";
import { ImageCategoryComponent } from "./image-category.component";
import { PicturesContext } from "../../core/context/pictures-context";
import { dedupeById } from "../../common/helpers/dedupe-by-id";
import { Box, Button, Container } from "@mui/material";

interface Props {
  getPictures: (page: number, perPage: number) => Promise<PhotoVM[]>;
}

export const ImageCategoryContainer: FC<Props> = (props) => {
  const { getPictures } = props;

  const [items, setItems] = useState<PhotoVM[]>([]);
  const itemsRef = useRef<PhotoVM[]>([]);
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 20;
  const MAX_ITEMS = 80;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const {
    selectedPictures,
    setSelectedPictures,
    cartPictures,
    setCartPictures,
  } = useContext(PicturesContext);

  const handleCheckBox = (id: string) => {
    const selection = items.find((picture) => picture.id === id);
    if (!selection) return;

    const toggled = { ...selection, selected: !selection.selected };
    setItems((prev) => {
      const updated = prev.map((p) => (p.id === id ? toggled : p));
      itemsRef.current = updated;
      return updated;
    });
    updateCart(toggled, id);
  };

  const updateCart = (selection: PhotoVM, id: string) => {
    const updatedCart = cartPictures.filter((pic) => pic.id !== id);
    const updatedSelected = selectedPictures.filter((pid) => pid !== id);

    if (selection.selected) {
      setSelectedPictures([...selectedPictures, id]);
      setCartPictures([...updatedCart, selection]);
    } else {
      setSelectedPictures(updatedSelected);
      setCartPictures(updatedCart);
    }
  };

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const prevLength = itemsRef.current.length;
      const newItems = await getPictures(page, PER_PAGE);

      setItems((prev) => {
        const merged = dedupeById([...prev, ...newItems]).slice(0, MAX_ITEMS);
        itemsRef.current = merged;
        return merged;
      });

      const totalAfter = prevLength + newItems.length;
      const reached80 = totalAfter >= MAX_ITEMS;
      const gotFullPage = newItems.length === PER_PAGE;
      setHasMore(!reached80 && gotFullPage);
      setPage((p) => p + 1);
    } catch (e) {
      console.error("Error loading pictures:", e);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [getPictures, isLoading, hasMore, page]);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      setItems([]);
      itemsRef.current = [];
      setPage(1);
      setHasMore(true);
      setIsLoading(true);
      try {
        const firstBatch = await getPictures(1, PER_PAGE);
        const merged = dedupeById(firstBatch).slice(0, MAX_ITEMS);
        if (!cancelled) {
          setItems(merged);
          itemsRef.current = merged;
          setPage(2);
          const gotFullPage = firstBatch.length === PER_PAGE;
          const reached80 = merged.length >= MAX_ITEMS;
          setHasMore(!reached80 && gotFullPage);
        }
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
  }, [getPictures]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ImageCategoryComponent
        pictures={items}
        handleCheckBox={handleCheckBox}
      />

      {hasMore && (
        <Box sx={{ mt: 3, mb: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={loadMore}
            disabled={isLoading}
            sx={{
              textTransform: "none",
              font: "inherit",
              color: "secondary.main",
              borderRadius: "20px",
            }}
          >
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </Box>
      )}
    </Container>
  );
};
