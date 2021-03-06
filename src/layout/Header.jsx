import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/icons/logo.jpg';
import user from '../assets/icons/user.svg';
import cart from '../assets/icons/shopping-bag.svg';
import menu from '../assets/icons/menu.svg';
import dropDownArrow from '../assets/icons/down-arrow.svg';
import upArrow from '../assets/icons/up-arrow.svg';
import SearchBar from '../components/Search';

const Header = () => {
  const [click, setClick] = useState(false);
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (window.innerWidth < 620) {
      setDisplayValue('none');
    }
  }, []);
  return (
    <MyHeader>
      <Wrapper>
        <Row>
          <Logo src={logo} alt='logo' />
          <SearchBar width='150%' display={displayValue} />
          <AvaterShoppingBag>
            <img src={user} alt='user' />
            <img src={cart} alt='user' />
          </AvaterShoppingBag>
        </Row>
        <SecondRow>
          <BrowseCategories onClick={() => setClick(!click)}>
            <img src={menu} alt='hamburger' />
            <p>Browse Categories</p>
            {click ? (
              <img src={dropDownArrow} alt='drop-down-arrow' />
            ) : (
              <img src={upArrow} alt='pull-up-arrow' />
            )}
          </BrowseCategories>
          {click && (
            <CartegoryNav>
              <ul>
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/services'>Our Services</Link>
                <Link to='/about'>About Us</Link>
              </ul>
              <ul>
                <Link to='/'>Baby Clothings</Link>
                <Link to='/events'>Men Collections</Link>
                <Link to='/gallery'>Women Collections</Link>
                <Link to='/services'>Electronics</Link>
                <Link to='/about'>Mobile Accessories</Link>
              </ul>
            </CartegoryNav>
          )}

          <Nav>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/events'>Events</Link>
              <Link to='/gallery'>Gallery</Link>
              <Link to='/services'>Our Services</Link>
              <Link to='/about'>About Us</Link>
            </ul>
          </Nav>
          <Small>
            <Link to='/'>Help Center</Link>
          </Small>
        </SecondRow>
      </Wrapper>
    </MyHeader>
  );
};
export default Header;

const MyHeader = styled.header`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-top: 2rem;
  @media (max-width: 920px) {
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 620px) {
  }
`;

const Logo = styled.img`
  width: 5rem;
  margin-right: 15%;
  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

const AvaterShoppingBag = styled.div`
  display: flex;
  img {
    width: 3rem;
  }
  img:first-of-type {
    margin-right: 20px;
  }
`;

const SecondRow = styled(Row)`
  margin-top: 2.5rem;
  position: relative;
  top: 0;
  left: 0;
`;

const BrowseCategories = styled.div`
  background-color: black;
  display: flex;
  padding: 1.5rem;
  color: white;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.4s ease-in-out;

  :hover {
    background-color: #6d632d;
  }

  img:first-of-type {
    transform: rotate(180deg);
    width: 2rem;
  }
  img:last-of-type {
    width: 1.5rem;
  }
  p {
    margin: 0 1rem;
  }
  @media (max-width: 300px) {
    padding: 1rem;
  }
`;

const CartegoryNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-0.2%, 11%);
  z-index: 10;
  background-color: #0f0f0f;
  padding: 1rem 2rem 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  a {
    display: block;
    font: 1.5rem helvetica;
    margin: 2rem 1rem;
    width: 100%;
    color: #e2f3f5;
  }
  @media (max-width: 300px) {
    transform: translate(-0.2%, 9.5%);
    padding: 1rem 1.5rem 2rem;
  }
`;

const Nav = styled.nav`
  ul {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 760px) {
    display: none;
  }

  a {
    margin: 0 18px;
    color: black;
    font-weight: 700;

    :hover {
      color: gray;
      padding-bottom: 1.4rem;
      border-bottom: solid 4px black;
    }
  }
`;
const Small = styled.small`
  a {
    color: gray;
  }
`;
