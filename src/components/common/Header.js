import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  border-top: 3px solid cyan;
  background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);

  /* background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  border-bottom: 3px solid ${({ theme }) => theme.secondaryColor}; */
`;

const Menu = styled.nav`
  display: ${({ open }) => (open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  /* border-bottom: 3px solid ${({ theme }) => theme.secondaryColor}; */
  /* background: ${({ theme }) => theme.bodyBackgroundColor}; */

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  /* color: #fff; */
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  /* color: ${({ theme }) => theme.bodyFontColor}; */
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    /* background: ${({ theme }) => theme.bodyFontColor}; */
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
