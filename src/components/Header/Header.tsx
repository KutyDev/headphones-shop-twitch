import React from 'react';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/icons/cart.svg';
import { useCartContext } from '../../CartContext/CartContext';

type HeaderProps = {};
export const Header = (props: HeaderProps) => {
  const { t } = useTranslation();
  const { cart } = useCartContext();
  const history = useHistory();

  return (
    <HeaderContainer>
      <MenuButton to="/">
        <img alt="logo" src={logo} />
      </MenuButton>
      <MenuItems>
        <MenuButtonHashLink to="/#products">
          {t('Our products')}
        </MenuButtonHashLink>
        <MenuButton to="/#about">{t('About us')}</MenuButton>
        <MenuButton to="/#contact">{t('Contact')}</MenuButton>
        <CartLink>
          <img
            alt="cartIcon"
            src={cartIcon}
            onClick={() => history.push('/cart')}
          />
          {cart.length}
        </CartLink>
      </MenuItems>
    </HeaderContainer>
  );
};

const CartLink = styled.div`
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const MenuButton = styled(Link)`
  width: 120px;
  outline: none;
  color: black;
`;

const MenuButtonHashLink = styled(HashLink)`
  width: 120px;
  outline: none;
  color: black;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;
