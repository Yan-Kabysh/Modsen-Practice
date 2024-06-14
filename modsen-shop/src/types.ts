interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

interface ProductProps {
  product: IProduct;
}

export type { IProduct, ProductState, ProductProps };
