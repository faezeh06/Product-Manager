import ProductDetailsReducers from './ProductDetailsReducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    ProductDetails: ProductDetailsReducers,
})