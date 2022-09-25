import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,
} from "./productRedux";

import {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure
} from "./clientRedux";


// Auth

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

// PRODUCTS

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.get(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        dispatch(updateProductSuccess({ id: id, product: product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
}


export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post("/products", product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
}


// USERS

export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await publicRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailure());
    }
}

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        // const res = await userRequest.get(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
}

export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        dispatch(updateUserSuccess({ id: id, user: user }));
    } catch (err) {
        dispatch(updateUserFailure());
    }
}


export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post("/users", user);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
    }
}
