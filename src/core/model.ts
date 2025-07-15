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
  //liked: boolean;
  //favourite: boolean;
  picUrl: string;
  // photographer: {
  //name: string;
  // url: string;
  // };
  selected: boolean;
}
