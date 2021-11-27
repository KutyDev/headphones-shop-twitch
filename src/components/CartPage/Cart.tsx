import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ProductsList } from './components/ProductsList';

type CartProps = {};
export const Cart = (props: CartProps) => {
  const { t } = useTranslation();

  return (
    <CartContainer>
      <div>{t('Your cart')}</div>
      <div>
        <ProductsList />
      </div>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 20px;
`;
