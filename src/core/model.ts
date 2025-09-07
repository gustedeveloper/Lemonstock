export interface PhotoAPI {
  id: number;
  alt: string;
  width: number;
  height: number;
  liked: boolean;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
  };
}

export interface PhotoVM {
  id: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  price: number;
  picUrl: {
    original: string;
    large: string;
    medium: string;
    small: string;
  };
  selected: boolean;
}

export interface Section {
  categoryTitle: string;
  images: PhotoVM[];
}

export interface Category {
  name: string;
  imageUrl: string;
}

export const categoryData: Category[] = [
  {
    name: "NATURE",
    imageUrl:
      "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
  },
  {
    name: "CITY",
    imageUrl:
      "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
  },
  {
    name: "PEOPLE",
    imageUrl:
      "https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg",
  },
  {
    name: "CULTURE",
    imageUrl:
      "https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg",
  },
  {
    name: "ANIMALS",
    imageUrl:
      "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg",
  },
  {
    name: "ADVENTURE",
    imageUrl:
      "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg",
  },
  {
    name: "LOVE",
    imageUrl:
      "https://images.pexels.com/photos/1173576/pexels-photo-1173576.jpeg",
  },
  {
    name: "FOOD",
    imageUrl:
      "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
  },
  {
    name: "ABSTRACT",
    imageUrl:
      "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg",
  },
  {
    name: "MINIMALISM",
    imageUrl:
      "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg",
  },
  {
    name: "VINTAGE",
    imageUrl:
      "https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg",
  },
  {
    name: "FASHION",
    imageUrl:
      "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg",
  },
  {
    name: "SPACE",
    imageUrl:
      "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg",
  },
  {
    name: "SPORTS",
    imageUrl:
      "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
  },
  {
    name: "TECHNOLOGY",
    imageUrl:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  },
  {
    name: "EDUCATION",
    imageUrl:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
  },
  {
    name: "INTERIOR DESIGN",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    name: "OFFICE",
    imageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
];
