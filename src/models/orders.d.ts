export type CurrentOrder = {
  client: string;
  products: product[];
  userId: number;
  status: 'pending' | 'delivered';
  dataEntry: string;
  dateProcessed: string;
  id: number;
};

export type CurrentProduct = {
  id: number;
  status: 'ready' | 'delivered';
};

export type Order = {
  client: string;
  products: product[];
  userId: number;
  status: 'pending' | 'delivered';
  dataEntry: string;
  dateProcessed: string;
  id: number;
};

export type OneProduct = {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
  dateEntry: string;
};

export type IProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  qty: number;
};
