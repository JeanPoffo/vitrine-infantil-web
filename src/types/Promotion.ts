import Store from './Store';

interface Promotion {
  id: string;
  name: string;
  description: string;
  cupon: string;
  link: string;
  store: Store;
}

export default Promotion;
