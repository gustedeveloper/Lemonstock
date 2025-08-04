import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

export const SearchBar: FC = () => {
  return (
    <>
      <Box>
        <TextField
          id="outlined-basic"
          placeholder="Search images..."
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <SearchIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "30px",
                  }}
                />
              ),
              disableUnderline: true,
            },
            inputLabel: {
              shrink: false,
            },
          }}
          sx={{
            borderRadius: "5px",
            backgroundColor: "primary.main",
            color: "secondary.main",
            "& .MuiOutlinedInput-root": {
              pl: "10px",
              "& fieldset": {
                borderColor: "primary.main",
                transition: "border-color 0.3s ease",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiOutlinedInput-input": {
              color: "secondary.main",
              pl: "5px",
            },
            "& .MuiOutlinedInput-input::placeholder": {
              color: "secondary.main",
              opacity: 0.7,
            },
          }}
        />
      </Box>
    </>
  );
};
