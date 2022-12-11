import authInstance from "../../utils/axios/authInstance";

export const getCartListService = (id: string) => {
  return authInstance.get(`/carts/${id}`);
}

export const deleteCartService = (id: string) => {
  return authInstance.delete(`/carts/${id}`);
}
  
