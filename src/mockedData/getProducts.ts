export const getProducts = (): Product[] => {
  return [
    { id: '1', name: 'Headphones - 1', price: 4200 },
    { id: '2', name: 'Headphones - 2', price: 2000 },
    { id: '3', name: 'Headphones - 3', price: 5040 },
    { id: '4', name: 'Headphones - 4', price: 3500 },
    { id: '5', name: 'Headphones - 5', price: 2550 },
  ];
};

export type Product = {
  id: string;
  name: string;
  price: number;
};
