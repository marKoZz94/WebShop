import React, {FC, useEffect, useCallback, useState} from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
} from "react-router-dom";

import { makeSelectLoading, makeSelectToken } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import LoadOverlay from '../../components/Animations/LoadOverlay';

// Animations
import FadeIn from '../../components/Animations/FadeIn';
import routes from '../../config/routes';
import PrivateRoute from '../PrivateRoute';
import Error404 from '../HttpStatusPages/error404';
import {logoutAction} from '../Login/actions'
import {refreshToken} from './actions';
import {UserService} from '../../services/UserService'

import '../../assets/scss/app.scss';

import { ReactComponent as ReactSprite } from "../../assets/icons/icons.svg";

import Container from '../../components/Layout/Container';
import LoginPage from '../Login';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error403 from '../HttpStatusPages/error403';
import Notifications from '../Notifications';
import Homepage from '../Homepage';
import ProductDetails from '../Products/Details';

const App: FC = () => {
  
  const loading = useSelector(makeSelectLoading);
  const dispatch = useDispatch();
  const token = useSelector(makeSelectToken);

  useEffect(() => {
    if(!token){
      dispatch(refreshToken())
    }
  }, [token, dispatch]);

  const logout = useCallback(()=>
    dispatch(logoutAction())
  ,[dispatch])

  const storage = UserService.getJwtFromLocalStorage();
  const isAuth = storage && storage.token ? true : false;

  return (

    <AppWrapper>
      {
        loading ?
          <LoadOverlay />
        : ''
      }
      <SpriteIcons>
        <ReactSprite />
      </SpriteIcons>
      <Header isAuth={isAuth}  logout={logout} />
        <Container>
          <FadeIn>
            <Switch>
              <Route exact path={routes.homepage} ><Homepage /> </Route>
              <Route path={routes.login} ><LoginPage /> </Route>
              <Route path={routes.product} ><ProductDetails /> </Route>
              <Route path="/zabranjen-pristup">
                <Error403 />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </FadeIn>
          <Notifications />
        </Container>
      <Footer />           
    </AppWrapper>

  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SpriteIcons = styled.div`
  display: none;
`

export default App;
