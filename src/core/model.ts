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
