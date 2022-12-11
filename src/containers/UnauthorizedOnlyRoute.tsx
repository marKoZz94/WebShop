import React, {FC, useEffect} from "react";
import { Route, RouteProps } from 'react-router-dom';
import routes from '../config/routes';
import { useSelector} from 'react-redux';
import { makeSelectLoading} from './Login/selectors';

import history from '../utils/history';
import { UserService } from "../services/UserService";


interface UnauthorizedOnlyRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component?: any;
    // tslint:disable-next-line:no-any
    children?: any;
  }
  
  const UnauthorizedOnlyRoute: FC<UnauthorizedOnlyRouteProps> = (props) => {
    const { component: Component, children, ...rest } = props;
    
    const loading = useSelector(makeSelectLoading);
        
    const storage = UserService.getJwtFromLocalStorage()
    const isAuth = storage && storage.token ? true : false
  
    useEffect(()=>{
      if(isAuth && !loading) {      
         history.push(routes.homepage)
       }
      
    }, [isAuth, loading])  

    return (
    
      <Route
        {...rest}
        render={routeProps =>
          // isAuth ? (
          //   <Redirect
          //     to={{
          //       pathname: routes.HomePage,
          //     }}
          //   />
          // ) : (
            Component ? (
                <Component {...routeProps} />
              ) : (
                children
              )
            
          //)
        }
      /> 
    );
  };
  
  export default UnauthorizedOnlyRoute;