import { FC } from "react";
import { PhotoVM } from "../../core/model";
import { ImageCategoryComponent } from "./image-category.component";
import { usePagination, useCartManagement } from "./hooks";

interface Props {
  getPictures: (page: number, perPage: number) => Promise<PhotoVM[]>;
}

const PER_PAGE = 10;
const MAX_ITEMS = 80;

export const ImageCategoryContainer: FC<Props> = ({ getPictures }) => {
  const { items, isLoading, hasMore, loadMore, setItems } = usePagination({
    getPictures,
    perPage: PER_PAGE,
    maxItems: MAX_ITEMS,
  });

  const { handleCheckBox } = useCartManagement({
    items,
    setItems,
  });

  return (
    <ImageCategoryComponent
      pictures={items}
      handleCheckBox={handleCheckBox}
      hasMore={hasMore}
      isLoading={isLoading}
      onLoadMore={loadMore}
    />
  );
};
