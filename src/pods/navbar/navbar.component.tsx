import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Pages {
  id: number;
  name: string;
  path: string;
}

const pages: Pages[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Categories",
    path: "/categories-catalog",
  },
];

export const NavBarComponent: FC = () => {
  const location = useLocation();

  const tabValue = ["/", "/categories-catalog"].includes(location.pathname)
    ? location.pathname
    : false;

  return (
    <Tabs
      value={tabValue}
      textColor="inherit"
      indicatorColor="secondary"
      sx={{
        "& .MuiTabs-flexContainer": {
          display: "flex",
          gap: "10px",
        },
      }}
    >
      {pages.map((page) => (
        <Tab
          key={page.id}
          label={page.name}
          value={page.path}
          component={Link}
          to={page.path}
          sx={{
            width: "197px",
            fontSize: "16px",
          }}
        ></Tab>
      ))}
    </Tabs>
  );
};
