import React, {FC, useState} from 'react';
import { useSelector } from 'react-redux';

// Selectors
import {makeSelectProfileInfo} from '../../containers/App/selectors';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import styled from 'styled-components';
import colors from '../../config/colors';
import Container from '../Layout/Container';
import P from '../Paragraph';
import CartModal from '../../containers/Cart';
import Links from '../Links';
import { cartListSelector } from '../../containers/Cart/selectors';
import Number from '../../components/Notification/NotificationNumber';
import Button from '../Buttons';

interface Props  {
  logout : () => void,
  isAuth : boolean,
}

const Header: FC<Props> = ({logout, isAuth}) => {

  const userInfo = useSelector(makeSelectProfileInfo);
  const cart = useSelector(cartListSelector);

  const logoutAction = () => {
    logout();
  }

  const [openMenu, setOpenMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const openDropDownMenu = () => {
    setOpenMenu(!openMenu);
  };

  const openHamburgerMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  const openModal = () => {
    setOpenCart(!openCart);
  }

  return (
    <>
    <HeaderWrapper>
      <HeaderContainer>
        <Name>
          <Link to={routes.homepage}>Web Shop</Link>
        </Name>
        <Actions>
          {isAuth ? 
            <span>
              {userInfo.image ? <img src={userInfo.image} alt="avatar" /> : <svg><use href={`#user`} /></svg>}
              <P>{userInfo.firstName} {userInfo.lastName}</P>
              <Button theme="white" onClick={logoutAction}>Logout</Button>
            </span>
            : 
            <Links theme="white" to={routes.login}>Login</Links>
           } 
          <button onClick={openModal}><i><svg><use href={`#add-to-cart`} /></svg>{cart && cart.length > 1 ? <Number className={cart && cart.length > 1 ? 'hasMessage' : ''}>{cart.length}</Number> : <></>}</i></button>
        </Actions>
      </HeaderContainer>
    </HeaderWrapper>
    <CartModal 
      modal={openCart}
      closeModal={setOpenCart}
    />
    </>
  )
}

const HeaderWrapper = styled.div`
  color: ${colors.WHITE_COLOR};
  padding: 40px;
  background: #000046; 
  background: -webkit-linear-gradient(to left, #1CB5E0, #000046);
  background: linear-gradient(to left, #1CB5E0, #000046);

  z-index: 9998;
  a {
    color: ${colors.WHITE};
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  a {
    font-size: 38px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
    fill: ${colors.WHITE};
  }
  span {
    display: flex;
    align-items: center;
    img, span {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    p {
      color: ${colors.WHITE};
      margin-bottom: 0;
    }
  }
  button {
    margin-left: 10px;
    position: relative;
  }
`;

export default Header;

