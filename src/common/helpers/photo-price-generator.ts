export const priceLevelCategories = {
  low: ["food", "drinks", "abstract", "education"],
  medium: ["landscape", "city", "animals", "technology", "sports", "business"],
  high: [
    "people",
    "travel",
    "adventure",
    "fashion",
    "space",
    "galaxy",
    "interior",
    "romance",
  ],
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
