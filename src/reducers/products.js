import { ADD_PRODUCT } from '../constants';

import { productsMockup } from '../mocks';

const initialState = productsMockup;

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return [
        ...state,
        payload
      ];
    default:
      return [
        ...state
      ];
  }
}

export default productsReducer;