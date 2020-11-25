import Store from './Store';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  color: string;
  size: string;
  gender: string;
  store: Store;
}

export default Product;
