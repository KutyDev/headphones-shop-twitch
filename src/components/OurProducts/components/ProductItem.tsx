import React from 'react';

import styled from 'styled-components';
import headphones from '../../../assets/images/products/headphones-1.png';
import { useCartContext } from '../../../CartContext/CartContext';
import { CartContextAction } from '../../../CartContext/actions';

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
};
export const ProductItem = ({ id, name, price }: ProductItemProps) => {
  const { dispatch } = useCartContext();

  const addToCart = () => {
    if (dispatch) {
      dispatch({ type: CartContextAction.ADD_TO_CART, prodId: id });
    }
  };

  return (
    <div onClick={addToCart}>
      <ImageContainer>
        <img alt="product" src={headphones} />
      </ImageContainer>
      <ProductInfo>
        <div>{name}</div>
        <div>${price / 100}</div>
      </ProductInfo>
    </div>
  );
};

const ImageContainer = styled.div`
  display: flex;
`;

const ProductInfo = styled.div`
  background: radial-gradient(
    49.65% 49.65% at 46.02% 55.47%,
    #ffd027 0%,
    #ebb100 100%
  );
  color: white;
  padding: 20px 0;

  & > div:first-child {
    margin-bottom: 6px;
  }
`;
