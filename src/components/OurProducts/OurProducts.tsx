import React from 'react';
import styled from 'styled-components';
import { ProductsGrid } from './components/ProductsGrid';

type OurProductsProps = {
  className?: string;
};
export const OurProducts = ({ className }: OurProductsProps) => {
  return (
    <div id="products" className={className}>
      <HeaderTitle>Our Products</HeaderTitle>
      <ProductsGrid />
    </div>
  );
};

const HeaderTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
