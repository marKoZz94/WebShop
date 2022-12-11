import history from './history';
import { useInjectReducer } from './injectReducer';
import { useInjectSaga } from './injectSaga';

export const executeScroll = (refElement: any) => {
    if(refElement) {
    let topOfElement = refElement.current.offsetTop;

    window.scroll({ top: topOfElement, behavior: "smooth" });
    }
}

export const useInjectSagaAndReducer = (key: string, reducer: any, saga: any) : void => {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });
}

export const redirectBack = (route: any) => {
    history.push(route)
}

export const discauntCalculate = (productPrice?: any, discountPercentage?: any, difference?: number) => {
    var price = productPrice;
    var discount = discountPercentage;
    var totalValue = price - (price / 100) * discount;
    
    return (
        Math.floor(totalValue)
    )
}

export const differenceCalculate = (productPrice?: any, discountPercentage?: any, difference?: number) => {
    var price = productPrice;
    var discount = discountPercentage;
    var totalValue = price - (price / 100) * discount;
    
    return (
        Math.floor(totalValue)
    )
}

export const generateBaseBeUrL = (path: string) => {

    const baseURL = process.env.REACT_APP_API_URL;

    const url = baseURL ? baseURL.replace('/api', '') + path : '#';

    return url;
}