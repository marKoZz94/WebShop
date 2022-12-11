import React, {FC, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux';
import {makeSelectNotificationsSuccess,makeSelectNotificationsMessage, makeSelectNotificationsError, makeSelectNotificationsKey} from './selectors';
import styled from 'styled-components';
import reducer from './reducer';
import saga from './saga';
import colors from '../../config/colors';
import { useInjectSagaAndReducer } from '../../utils/helpers';
import { REDUX_SAGA_KEYS } from '../../config/config';

const Notifications: FC = () => {
  
  useInjectSagaAndReducer(REDUX_SAGA_KEYS.notifications, reducer, saga); 

  const success = useSelector(makeSelectNotificationsSuccess);
  const error = useSelector(makeSelectNotificationsError);
  const message: any = useSelector(makeSelectNotificationsMessage);
  const notifyKey = useSelector(makeSelectNotificationsKey);
  

  useEffect(()=> {
    if(success) {
      toast.success(message);
    }
  }, [success, message, notifyKey])

  useEffect(()=> {
    if(error && message) {
      toast.error(message);
    }

  }, [error, message, notifyKey]);

  return (
    <>
      <StyledContainer position="bottom-left"  />
    </>
  )
}

const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {}

  .Toastify__toast {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 0px 20px 6px rgba(188, 208, 219, 0.4);
    padding: 8px 12px;

    .Toastify__close-button {
      color: ${colors.TEXT_BLACK};

      svg {
        fill: ${colors.TEXT_BLACK};
      }
    }
  }

  .Toastify__toast--error {
    color: ${colors.RED_COLOR};

    .Toastify__toast-body {
      color: ${colors.TEXT_GRAY};
    }

    .Toastify__progress-bar {
      background: ${colors.RED_COLOR};
    }
  }

  .Toastify__toast--warning {}
  .Toastify__toast--success {
    color: ${colors.GREEN_COLOR};

    .Toastify__toast-body {
      color: ${colors.TEXT_GRAY};
    }

    .Toastify__progress-bar {
      background: ${colors.GREEN_COLOR};
    }
  }
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`;

export default Notifications;
