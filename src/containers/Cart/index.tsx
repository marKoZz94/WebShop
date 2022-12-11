/*
 * Cart
*/

import React, { FC, useCallback, useEffect, useState } from 'react';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import H2 from '../../components/Headings/H2';
import { Modal, ModalClose } from '../../components/Modal';
import ModalContainer from '../../components/Modal/ModalContainer';
import ModalBody from '../../components/Modal/ModalBody';
import { cartListSelector, loadingSelector } from './selectors';
import { cartListAction, deleteCart } from './actions';
import Table from '../../components/Table';
import Input from '../../components/Inputs/Input';
import styled from 'styled-components';
import colors from '../../config/colors';
import { discauntCalculate } from '../../utils/helpers';
import LoadOverlayFadingCircle from '../../components/Animations/LoadOverlayFadingCircle';
import { REDUX_SAGA_KEYS } from '../../config/config';

interface IModalSuccess {
    modal: boolean;
    closeModal: Function;
}

const CartModal: FC<IModalSuccess> = ({closeModal, modal}) => {
  
  const key: string = REDUX_SAGA_KEYS.cart;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  const cart = useSelector(cartListSelector);
  const loading = useSelector(loadingSelector);

  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    setQuantity(quantity => quantity + 1);
  };
 
  const decrease = () => {
    setQuantity(quantity => quantity - 1);
  };

  useEffect(() => {
    dispatch(cartListAction('1'))
}, [dispatch]);

  const closeOnClick = useCallback(() => {
    closeModal(false);
}, [closeModal]);

const deleteItem = useCallback((id) => {
    dispatch(deleteCart(id));
  }, [dispatch]);

  return (
    <Modal className={modal ? 'modalOpen' : ''}>
        <ModalContainer>
        <ModalClose onClick={closeOnClick}><svg><use href={`#close`} /></svg></ModalClose>
            <ModalBody>
                {loading ? <LoadOverlayFadingCircle />
                : <>
                <H2>Cart ({cart.length})</H2>
                <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.length > 0 ? 
                                cart.map((item: any, i: number) => {
                                    return ( 
                                        <tr key={i}>
                                            <td>{item.title}</td>
                                            <td>{item.price} €</td>
                                            <td><Quantity><button onClick={() => {decrease()}}>-</button><Input defaultValue={quantity} onInputChange={setQuantity} /><button onClick={() => {increase()}}>+</button></Quantity></td>
                                            <td>{discauntCalculate(item.price, item.discountPercentage)} €</td>
                                            <td><ButtonDelete onClick={() => deleteItem(item.id)}><svg><use href={`#delete`} /></svg></ButtonDelete></td>
                                        </tr>
                                    )
                                }) 
                            : null}
                        </tbody>
                    </table>
                </Table>
                </>}
            </ModalBody>
        </ModalContainer>
    </Modal>
  );
}

const Quantity = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${colors.BLACK_COLOR};
    border-radius: 20px;
    justify-content: space-between;
    padding: 0 10px;
    max-width: 100px;
    div {
        margin-bottom: 0;
    }
    input {
        border: 0;
        text-align: center;
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;

const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    margin: 0 auto;
    svg {
        stroke: ${colors.BLACK_COLOR};
    }
`;
export default CartModal;
