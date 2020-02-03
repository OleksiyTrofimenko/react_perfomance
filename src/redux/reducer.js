import { combineReducers } from 'redux';

import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default rootReducer;
