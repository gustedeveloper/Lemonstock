import { FC } from "react";
import { Box, Button } from "@mui/material";

interface Props {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export const LoadMoreButton: FC<Props> = ({
  hasMore,
  isLoading,
  onLoadMore,
}) => {
  if (!hasMore) return null;

  return (
    <Box
      sx={{
        mt: 3,
        mb: 6,
        minHeight: "52px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onLoadMore}
        disabled={isLoading}
        sx={{
          textTransform: "none",
          font: "inherit",
          color: "secondary.main",
          borderRadius: "20px",
          transition: "opacity 0.3s ease-out",
        }}
      >
        {isLoading ? "Loading..." : "Load more"}
      </Button>
    </Box>
  );
};
