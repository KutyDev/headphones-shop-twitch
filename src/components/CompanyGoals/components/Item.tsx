import React from 'react';
import styled from 'styled-components';
import { CompanyGoalType } from '../enums/CompanyGoalType';
import { getIcon } from './utils/getIcon';

type ItemProps = {
  type: CompanyGoalType;
  title: string;
  description: string;
};
export const Item = ({ type, title, description }: ItemProps) => {
  return (
    <div>
      <Image src={getIcon(type)} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

const Image = styled.img`
  height: 90px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #3a3a3a;
`;

const Description = styled.div`
  margin-top: 17px;
  color: #616161;
  font-size: 16px;
`;
