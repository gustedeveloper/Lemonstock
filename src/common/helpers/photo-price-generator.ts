export const priceLevelCategories = {
  low: ["food", "abstract", "education", "minimalism", "office"],
  medium: [
    "nature",
    "city",
    "animals",
    "technology",
    "sports",
    "culture",
    "vintage",
  ],
  high: ["people", "adventure", "fashion", "space", "interior design", "love"],
};

const prices = {
  low: [2.5, 4],
  medium: [4.1, 6.5],
  high: [6.6, 9.9],
};

const getRandomPrice = (priceScale: number[]) =>
  Math.random() * (priceScale[1] - priceScale[0]) + priceScale[0];

export const getPhotoPrice = (category: string) => {
  const level = Object.entries(priceLevelCategories).find(([, list]) =>
    list.includes(category)
  )?.[0];

  switch (level) {
    case "low":
      return getRandomPrice(prices.low);
    case "medium":
      return getRandomPrice(prices.medium);
    case "high":
      return getRandomPrice(prices.high);
    default:
      return 0;
  }
};
