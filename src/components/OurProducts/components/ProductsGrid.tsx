import React from 'react';
import styled from 'styled-components';
import { ProductItem } from './ProductItem';
import { getProducts } from '../../../mockedData/getProducts';

type ProductsGridProps = {};
export const ProductsGrid = (props: ProductsGridProps) => {
  const products = getProducts();

  return (
    <Container>
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    padding: 20px;
  }
`;
