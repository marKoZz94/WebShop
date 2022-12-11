/*
 * Products
*/

import React, { FC, useCallback, useEffect, useState } from 'react';
import reducer from '../reducer';
import saga from '../saga';
import { useInjectReducer } from '../../../utils/injectReducer';
import { useInjectSaga } from '../../../utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Row from '../../../components/Layout/Row';
import { loadingSelector, productSelector } from '../selectors';
import { addToCart, getProduct } from '../actions';
import LoadOverlayFadingCircle from '../../../components/Animations/LoadOverlayFadingCircle';
import { generatePath, useParams } from 'react-router-dom';
import { ParamTypes } from '../../../models/urlParams';
import H3 from '../../../components/Headings/H3';
import P from '../../../components/Paragraph';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Rating from '../rating';
import colors from '../../../config/colors';
import { discauntCalculate } from '../../../utils/helpers';
import H2 from '../../../components/Headings/H2';
import Button from '../../../components/Buttons';
import Breadcrumb from '../../../components/Breadcrumb';
import routes from '../../../config/routes';
import Col6 from '../../../components/Layout/Grid/Col6';
import { makeSelectIsAuthenticated } from '../../App/selectors';
import history from '../../../utils/history';
import { REDUX_SAGA_KEYS } from '../../../config/config';

const ProductDetails: FC = () => {

    const key: string = REDUX_SAGA_KEYS.products;

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const dispatch = useDispatch();

    const {id} = useParams<ParamTypes>();

    const product = useSelector(productSelector);
    const loading = useSelector(loadingSelector);

    const isAuth = useSelector(makeSelectIsAuthenticated);

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id]);

    const addProductToCart = useCallback((e) => {
        e.preventDefault();
        const data = {
            id: id,
            quantity: 1,
            userId: 15,
        }
        if(isAuth) {
            dispatch(addToCart(data));
        } else {
            history.push(generatePath(routes.login));
        }
        
    }, [dispatch, id, isAuth]);

    return (
        product ?
            <ProductDetailsWrapper>
                <Breadcrumb 
                    firstRoute={routes.homepage}
                    secondRouteName={product.title}
                />
                {loading ? <LoadOverlayFadingCircle /> :
                <Row>
                    <Col6>
                        <Carousel
                            showIndicators={false}
                            showArrows={false}
                        >
                            {product.images && product.images.length > 0 ? 
                                product.images.map((image: any, i: number) => {
                                    return (
                                        <img key={i} src={image} alt="Product" />
                                    )
                                }) 
                            : null}
                        </Carousel>
                    </Col6>
                    <Col6>
                        <H2>{product.brand} {product.title}</H2>
                        <ProductRating>
                            <Rating 
                                rate={product.rating}
                            />
                            <P>{product.stock > 0 ? <><svg><use href={`#has-stock`} /></svg> In Stock</> : ''}</P>
                        </ProductRating>
                        <ProductPrice>
                            <P>{product.discountPercentage ? <del>{product.price}</del> : product.price} €</P>
                            <H3>{product.discountPercentage && product.price ? discauntCalculate(product.price, product.discountPercentage) + ' €' : ''}</H3>
                        </ProductPrice>
                        <P>{product.description}</P>
                        <Button className={product.stock ? '' : 'disabled'} disabled={product.stock ? false : true} onClick={addProductToCart}>Add to cart</Button>
                        {/* <Button onClick={addProductToCart}>Add to cart</Button> */}
                    </Col6>
                </Row>
                }

            </ProductDetailsWrapper>
        : null
    );
}

const ProductDetailsWrapper = styled.div`
    margin-top: 20px;
    position: relative;
    min-height: 600px;
`;

const ProductPrice = styled.div`
    margin-bottom: 10px;
    p, h3 {
        margin: 0.3rem 0;
        font-weight: bold;
    }
    p {
        font-size: 18px;
        color: ${colors.DARK_GRAY_COLOR} !important;
    }
    h3 {
        font-size: 24px;
    }
`;

const ProductRating = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
        margin-bottom: 0;
        margin-left: 10px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        svg {
            margin-right: 10px;
            width: 16px;
            height: 16px;
        }
    }
`;

export default ProductDetails;
