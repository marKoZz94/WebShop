/*
 * Login Page
*/

import React, { FC, useCallback, useState } from 'react';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import {loginAction} from './actions';

// Import Selectors
import { makeSelectLoading } from './selectors';

import Validator from 'validatorjs';
import { generatePath, Link } from 'react-router-dom';
import routes from '../../config/routes';
import Input from '../../components/Inputs/Input';
import LoadFadingCircle from '../../components/Animations/LoadFadingCircle';
import { UserService } from '../../services/UserService';
import Button from '../../components/Buttons';
import styled from 'styled-components';
import colors from '../../config/colors';
import H2 from '../../components/Headings/H2';
import { REDUX_SAGA_KEYS } from '../../config/config';


const LoginPage: FC = () => {
  
  const key: string = REDUX_SAGA_KEYS.login;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  const storage = UserService.getJwtFromLocalStorage();
  const isAuth = storage && storage.token ? true : false;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loading: boolean = useSelector(makeSelectLoading);

  const [usernameError, setUsernameError] = useState<boolean | string>('');
  const [passwordError, setPasswordError] = useState<boolean | string>('');

  const submitForm = useCallback((e) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password
    };

    let validation = new Validator(data, { username: 'required', password: 'required' });

    validation.fails(() => {
      setUsernameError(validation.errors.first('username'));
      setPasswordError(validation.errors.first('password'));
    });
    validation.passes(() => {
      setUsernameError('');
      setPasswordError('');
      dispatch(loginAction(data));
    });
  }, [username, password, dispatch]);

  return (

    <LoginWrapper>
      <H2>Login</H2>
      {!isAuth ?
        <form onSubmit={submitForm}>
          <div>
            <Input 
              type="text"
              placeholder="Insert username"
              onInputChange={setUsername}
              defaultValue={username}
              validationMessage={usernameError}
              label="Username"
              required={true}
            />
          </div>
          <div>
            <Input 
              type="password"
              placeholder="Insert password"
              onInputChange={setPassword}
              defaultValue={password}
              validationMessage={passwordError}
              label="Password"
              required={true}
            />
          </div>

          <Button type="submit">
            Login
            {loading ?
              <LoadFadingCircle />
            : ''}
          </Button>

        </form>
      : 
      <>
        <Link to={generatePath(routes.homepage)} className="link">Vratite se na pretragu</Link>
      </>}
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
margin: 30px 0;
h2 {
  text-align: center;
}
form {
  margin: 0 auto;
  padding: 20px;
  background: ${colors.GRAY};
  border-radius: 10px;
  max-width: 480px;
}
`;

export default LoginPage;
