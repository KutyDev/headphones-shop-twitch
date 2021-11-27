import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCartContext } from '../../../CartContext/CartContext';
import { ListItem } from './ListItem';

type ProductsListProps = {};
export const ProductsList = (props: ProductsListProps) => {
  const { cart } = useCartContext();
  const { t } = useTranslation();

  if (cart.length === 0) {
    return <div>{t('Your cart is empty')}</div>;
  }

  return (
    <div>
      {cart.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
};
