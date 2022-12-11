import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';
import {DAEMON} from './constants';
import getInjectors from './sagaInjectors';

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */
export default ({ key, saga}: any) => (WrappedComponent: any) => {
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextType = ReactReduxContext;

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;
    injectors: { injectSaga: (key: any, descriptor: {} | undefined, args: any) => void; ejectSaga: (key: any) => void; };
    // const injectors: any  
     
    constructor(props: {}, context: { store: any; }) {
      super(props, context);
      this.injectors = getInjectors(context.store);
      const mode = DAEMON ;
      
      this.injectors.injectSaga(key, { saga, mode}, this.props);
    }

    // React.useEffect(() => {
      
    //   return () => {
    //     this.injectors.ejectSaga(key);
    //   };
    // }, [key]);

    componentWillUnmount() {
      this.injectors.ejectSaga(key);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};

const useInjectSaga = ({ key, saga }: any) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    const injectors: any = getInjectors(context.store);
    const mode = DAEMON;
    
    if(key !== 'app') {
      injectors.injectSaga(key, { saga, mode });
    }  
    return () => {
      injectors.ejectSaga(key);
    };
  }, [context.store, key, saga]);
};

export { useInjectSaga };
