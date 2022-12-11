import React, {FC} from 'react';

import { generatePath, Link } from 'react-router-dom';
import routes from '../../../config/routes';
import { Products } from '../../../models/products';
import styled from 'styled-components';
import P from '../../../components/Paragraph';
import colors from '../../../config/colors';
import H3 from '../../../components/Headings/H3';
import Rating from '../rating';

interface IProduct {
    product: Products,
}

const ProductCard: FC<IProduct> = ({product}) => {

    var price = product.price;
    var discount = product.discountPercentage;
    var totalValue = price - (price / 100) * discount;
    var difference = price-totalValue;

    return (
        product ?
            <ProductCardWrapper to={generatePath(routes.product, {'id': product.id})}>
                <ProductCategory>
                    {product.category}
                </ProductCategory>
                <ProductImage>
                    <img src={product.thumbnail} alt="Product" />
                    <ProductRating>
                        <Rating 
                            rate={product.rating}
                        />
                    </ProductRating>
                </ProductImage>
                <ProductInfo>
                    <H3>{product.title}</H3>
                    <P>{product.description}</P>
                </ProductInfo>
                <ProductPrice>
                    <Saved>{product.discountPercentage && product.price ? 'Save ' + Math.floor(difference) + ' €' : ''}</Saved>
                    <P>{product.discountPercentage ? <del>{product.price} €</del> : product.price + '€'}</P>
                    <H3>{product.discountPercentage && product.price ? Math.floor(totalValue) + ' €' : ''}</H3>
                </ProductPrice>
            </ProductCardWrapper>
        : null
    )
}

const ProductCardWrapper = styled(Link)`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    background: ${colors.WHITE};
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid gray;
    position: relative;
    width: 100%;
    &:hover {
        transition: all 500ms;
        border-color: rgb(99 64 152 / 54%);
        box-shadow: inset 0 0 200px rgb(99 64 152 / 24%);
    }
`;

const ProductCategory = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${colors.SECONDARY_COLOR};
    color: ${colors.WHITE};
    padding: 10px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 20px;
`;

const ProductImage = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        width: 150px;
        height: 100px;
        object-fit: cover;
    }
`;

const ProductRating = styled.div`
    margin-top: 1rem;
`;

const ProductInfo = styled.div`
    h3 {
        color: ${colors.DARK_GRAY_COLOR};
    }
`;

const ProductPrice = styled.div`
    margin-top: auto;
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

const Saved = styled.span`
    color: ${colors.RED_COLOR} !important;
    font-size: 14px;
    font-weight: bold;
`;

export default ProductCard;