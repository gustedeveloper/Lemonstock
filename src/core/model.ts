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
  };
}

export interface PhotoVM {
  id: string;
  title: string;
  alt: string;
  price: number;
  picUrl: string;
  selected: boolean;
}
