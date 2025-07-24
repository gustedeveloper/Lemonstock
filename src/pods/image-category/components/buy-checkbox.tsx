import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { PhotoVM } from "../../../core/model";

interface Props {
  picture: PhotoVM;
  handleCheckBox: (id: string) => void;
}

export const BuyCheckbox: FC<Props> = (props) => {
  const { picture, handleCheckBox } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={picture.selected}
          onChange={() => handleCheckBox(picture.id)}
          color="secondary"
          sx={{ color: "white" }}
        />
      }
      label="Buy"
    />
  );
};
