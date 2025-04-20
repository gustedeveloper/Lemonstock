import { Button, Grid2 } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  removeAll: () => void;
  navigate: (path: string) => void;
}

export const DrawerActions: FC<Props> = (props) => {
  const { removeAll, navigate } = props;
  return (
    <Grid2
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Button
        variant="outlined"
        size="small"
        startIcon={<DeleteIcon />}
        onClick={removeAll}
      >
        Remove All
      </Button>
      <Button
        sx={{ width: "130px" }}
        variant="contained"
        size="small"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
    </Grid2>
  );
};
