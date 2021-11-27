import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CartItem } from '../../../types/CartItem';
import { useCartContext } from '../../../CartContext/CartContext';
import { CartContextAction } from '../../../CartContext/actions';

type ListItemProps = {
  item: CartItem;
};
export const ListItem = ({ item }: ListItemProps) => {
  const { dispatch } = useCartContext();

  const onQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +event.target.value;
    if (dispatch) {
      dispatch({
        type: CartContextAction.CHANGE_QUANTITY,
        quantity: newQuantity,
        prodId: item.id,
      });
    }
  };

  return (
    <Container>
      <div>{item.name}</div>
      <input type="number" value={item.quantity} onChange={onQuantityChange} />
      <div>
        <div>${(item.price * item.quantity) / 100}</div>
        <div>${item.price / 100} each</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid #616161;
`;
