import { CategoriesCatalogPage } from "../scenes/categories-catalog";
import { ImageGalleryPage } from "../scenes/image-gallery";
import { CheckoutPage } from "../scenes/checkout";
import { HomePage } from "../scenes/home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories-catalog"
            element={<CategoriesCatalogPage />}
          />
          <Route
            path="/category/:categoryName"
            element={<ImageGalleryPage />}
          />

          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
};
