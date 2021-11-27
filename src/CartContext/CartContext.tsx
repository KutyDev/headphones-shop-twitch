import React, { Dispatch, useReducer } from 'react';
import { Action, reducer, ReducerState, startingState } from './reducers';

export interface CartContextInterface extends ReducerState {
  dispatch?: Dispatch<Action>;
}

const CartContext = React.createContext<CartContextInterface | undefined>(
  undefined,
);

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider = ({
  children,
  ...props
}: CartContextProviderProps) => {
  const [cartState, cartStateDispatch] = useReducer(reducer, startingState);

  const cartContextValue = {
    ...cartState,
    dispatch: cartStateDispatch,
  };

  return (
    <CartContext.Provider value={cartContextValue} {...props}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

export { useCartContext, CartContextProvider };
