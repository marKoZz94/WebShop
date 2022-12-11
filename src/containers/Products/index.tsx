/*
 * Products
*/

import React, { FC, useCallback, useEffect, useState } from 'react';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Col3 from '../../components/Layout/Grid/Col3';
import Row from '../../components/Layout/Row';
import { categoriesSelector, loadingSelector, pageCountSelector, productsSelector } from './selectors';
import { getCategories, getProducts } from './actions';
import ProductCard from './Card';
import ReactPaginate from 'react-paginate';
import LoadOverlayFadingCircle from '../../components/Animations/LoadOverlayFadingCircle';
import Select from '../../components/Inputs/Select';
import Input from '../../components/Inputs/Input';
import Pagination from '../../components/Pagination';
import Col9 from '../../components/Layout/Grid/Col9';
import colors from '../../config/colors';
import H2 from '../../components/Headings/H2';
import { REDUX_SAGA_KEYS } from '../../config/config';

const Products: FC = () => {

    const key: string = REDUX_SAGA_KEYS.products;

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const dispatch = useDispatch();

    const products = useSelector(productsSelector);
    const pageCount = useSelector(pageCountSelector);
    const loading = useSelector(loadingSelector);
    const categories = useSelector(categoriesSelector);

    const [category, setCategory] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    useEffect(() => {
        let page = 1;
        dispatch(getProducts(page, category, search))
    }, [category, dispatch, search]);

    const handlePageClick = useCallback((data: any) => {
        let page = data.selected >= 0 ? data.selected + 1 : 0;
        dispatch(getProducts(page, category, search));
    }, [category, dispatch, search]);
    
    return (
        <ProductsWrapper>
            <Row>
                <Col3>
                    <Filters>
                        <H2>Find Product</H2>
                        <Select 
                            options={categories}
                            value={category}
                            onSelectChange={setCategory}
                            defaultOption={''}
                            defaultOptionLabel={'Select category'}
                        />
                        <Input
                            defaultValue={search}
                            placeholder={'Search'}
                            onInputChange={setSearch}
                        />
                    </Filters>
                </Col3>
                <Col9>
                    <ProductRow>
                        {loading ? <LoadOverlayFadingCircle /> :
                            products && products.length > 0 ? 
                                products.map((product: any, i: number) => {
                                    return (
                                        <Col3Card key={i}>
                                            <ProductCard product={product} />
                                        </Col3Card>
                                    )
                                }) 
                        : null}
                    </ProductRow>
                    {products && pageCount > 1 ?
                        <Pagination>
                            <ReactPaginate
                                previousLabel={<svg><use href={`#arrow-left`} /></svg>}
                                nextLabel={<svg><use href={`#arrow-right`} /></svg>}
                                pageCount={pageCount}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                disabledClassName={"disabled"}
                                activeClassName={'active'}
                            />
                        </Pagination>
                    : null}
                </Col9>
            </Row>
        </ProductsWrapper>
    );
}

const ProductsWrapper = styled.div`
    min-height: 600px;
    margin-top: 20px;
    padding: 20px;
`;

const ProductRow = styled(Row)`
    @media (max-width: 768px) {
        display: flex;
      justify-content: center;
    }
`;
const Col3Card = styled(Col3)`
    display: flex;
`

const Filters = styled.div`
    background: ${colors.GRAY};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export default Products;
