import { Divider, Grid2, IconButton } from "@mui/material";
import { FC } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Props {
  handleDrawerClose: () => void;
}

export const DrawerHeader: FC<Props> = (props) => {
  const { handleDrawerClose } = props;
  return (
    <>
      <Grid2 size={12}>
        <IconButton onClick={handleDrawerClose} sx={{ p: "5px", m: "15px" }}>
          <ChevronRightIcon />
        </IconButton>
      </Grid2>
      <Divider sx={{ mb: "20px" }} />
    </>
  );
};
