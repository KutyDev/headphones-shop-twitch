import React from 'react';
import styled from 'styled-components';
import { CompanyGoals } from '../CompanyGoals/CompanyGoals';
import { OurProducts } from '../OurProducts/OurProducts';

type HomeProps = {};

export const Home = (props: HomeProps) => {
  return (
    <Container>
      <CompanyGoals />
      <PageItem />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageItem = styled(OurProducts)`
  margin-top: 50px;
`;
