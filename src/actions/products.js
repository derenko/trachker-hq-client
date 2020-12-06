import { ADD_PRODUCT } from '../constants';

export const addProductAction = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}