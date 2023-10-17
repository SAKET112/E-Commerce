import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes';

export const addToCart = (item) => {
    return{
        type: ADD_TO_CART,
        payload: item
    }
}

export const rmvFromCart = (id) => {
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}