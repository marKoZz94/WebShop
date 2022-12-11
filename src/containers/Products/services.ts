import authInstance from "../../utils/axios/authInstance";

export const getProductsService = (page: number, per_page: number, category: string, search: string) => {
  let url = '/products';
  if(search) {
    url = url + `/search?q=${search}&`;
  }
  else {
    if(category) {
      url = url + `/category/${category}`;
    }
    url = url + '?';
  }
  if(per_page) {
    url = url + `limit=${per_page}&skip=${(page-1) * per_page}`;
  }
  return authInstance.get(`${url}`)
  // return authInstance.get(`/products${search ? `/search?q=${search}` : `${category ? `/category/${category}` : ''}`}?limit=${per_page}&skip=${(page-1) * per_page}`);
}

export const getProductService = (id: any) => {
  return authInstance.get(`/products/${id}`);
}

export const getCategoriesService = () => {
  return authInstance.get(`/products/categories`);
}

export const postAddToCartService = (data: any) => {
  let requestData = {
    merge: true,
    products: [
      data
    ]
  }
  return authInstance.put(`/carts/${data.id}`, requestData).then((res: any) => {console.log('res', res)});
}
  