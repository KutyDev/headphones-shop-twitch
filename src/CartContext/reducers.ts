import { CartContextAction } from './actions';
import { getProducts } from '../mockedData/getProducts';
import { CartItem } from '../types/CartItem';

const products = getProducts();

export interface ReducerState {
  cart: CartItem[];
}

export const startingState: ReducerState = {
  cart: [],
};

export type Action =
  | { type: CartContextAction.ADD_TO_CART; prodId: string }
  | { type: CartContextAction.REMOVE_FROM_CART; prodId: string }
  | {
      type: CartContextAction.CHANGE_QUANTITY;
      prodId: string;
      quantity: number;
    };

const addToCart = (prodId: string, state: ReducerState): ReducerState => {
  const product = products.find((prod) => prod.id === prodId);
  if (!product) return state;

  const cartItem: CartItem = { ...product, quantity: 1 };
  const currentCart = [...state.cart];
  if (currentCart.filter((cart) => cart.id === product.id).length > 0) {
    return state;
  }

  currentCart.push(cartItem);

  return { ...state, cart: currentCart };
};
const removeFromCart = (prodId: string, state: ReducerState): ReducerState => {
  return state;
};
const changeQuantity = (
  prodId: string,
  quantity: number,
  state: ReducerState,
): ReducerState => {
  const product = state.cart.find((prod) => prod.id === prodId);
  if (!product) return state;

  const cartWithoutProduct = state.cart.filter((prod) => prod.id !== prodId);
  if (quantity === 0) {
    return { ...state, cart: cartWithoutProduct };
  }

  return {
    ...state,
    cart: [...cartWithoutProduct, { ...product, quantity }],
  };
};

export const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case CartContextAction.ADD_TO_CART:
      return addToCart(action.prodId, state);
    case CartContextAction.CHANGE_QUANTITY:
      return changeQuantity(action.prodId, action.quantity, state);
    case CartContextAction.REMOVE_FROM_CART:
      return removeFromCart(action.prodId, state);
    default:
      return state;
  }
};
