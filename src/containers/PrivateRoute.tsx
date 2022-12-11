import React, {FC, useCallback, useEffect} from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom';
import routes from '../config/routes';
import {useSelector} from 'react-redux';
import {makeSelectLoadingProfileInfo, makeSelectProfileInfo} from './App/selectors';
import { UserService } from "../services/UserService";
import history from '../utils/history';
import LoadOverlaySticky from "../components/Animations/LoadOverlaySticky";

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component?: any;
    // tslint:disable-next-line:no-any
    children?: any;
    roles?: any;
  }
  
const PrivateRoute: FC<PrivateRouteProps> = (props) => {
    const { component: Component, children, roles, ...rest } = props;
    
    const tokenStorage = UserService.getJwtFromLocalStorage();   
    const token = tokenStorage ? tokenStorage.token :  null;

    const profileInfo = useSelector(makeSelectProfileInfo);
    const loading = useSelector(makeSelectLoadingProfileInfo);
        
    useEffect(()=>{
      
      if(roles && roles.length && !loading) {
        const grant =  roles.includes(profileInfo.role);

        if(!grant) {
          history.push(routes.error403)
        }
      }
    }, [profileInfo, loading, roles]);

    const grantRolePermission = useCallback((roles: string[] | undefined) => {
      if(roles && roles.length) {
        const grant =  roles.includes(profileInfo.role);
        return grant ? true :  false;
       
      }
      return true;
    }, [profileInfo])  

    return (
      
      <Route
        {...rest}
        render={routeProps =>

          token && loading ?  <LoadOverlaySticky /> : profileInfo && !loading ? 
            grantRolePermission(roles)
             ? (
              children
            ) : (
              <>
               <Redirect to={{pathname: ''}}/>
              </>
            )
           : (
            <>
               <Redirect
              to={{
                pathname: routes.homepage,
                state: { from: routeProps.location },
              }}
            />
            </>
           
          ) 
        }
      /> 
    );
  };
  
  export default PrivateRoute;