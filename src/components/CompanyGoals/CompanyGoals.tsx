import React from 'react';
import styled from 'styled-components';
import { Item } from './components/Item';
import { CompanyGoalType } from './enums/CompanyGoalType';

type CompanyGoalsProps = {};

const goals = [
  {
    type: CompanyGoalType.HighQuality,
    title: 'High Quality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra praesent velit, velit congue volutpat aliquet. Id risus in id ac proin.',
  },
  {
    type: CompanyGoalType.WarrantyProtection,
    title: 'Warranty Protection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra praesent velit, velit congue volutpat aliquet. Id risus in id ac proin.',
  },
  {
    type: CompanyGoalType.FreeShipping,
    title: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra praesent velit, velit congue volutpat aliquet. Id risus in id ac proin.',
  },
];

export const CompanyGoals = (props: CompanyGoalsProps) => {
  return (
    <Container>
      {goals.map(({ title, description, type }) => (
        <Item key={type} title={title} description={description} type={type} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;

  & > div {
    margin: 0 20px;
  }
`;
