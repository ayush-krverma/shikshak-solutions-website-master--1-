import express from 'express';
const productsRouter = express.Router();
import {
    actionToGetProductsApiCall,
    actionToGetCategoriesApiCall,
    actionToGetSubCategoriesApiCall,
    actionToGetSubChildCategoriesApiCall,
    actionToGetBrandsApiCall,
    actionToGetProductImagesApiCall,
    actionToGetCartDataByProductAndUserIdApiCall,
    actionToGetAllCartCountDataByUserId,
    actionToGetUserCartDataByUserId, actionDeleteProductFromCartByCartId, actionUpdateProductQuantityOnCartByCartId
} from "../models/Products.js";
import expressAsyncHandler from "express-async-handler";
productsRouter.post(
    '/actionToGetProductsApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetProductsApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetCategoriesApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetCategoriesApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetBrandsApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetBrandsApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetSubCategoriesApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetSubCategoriesApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetSubChildCategoriesApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetSubChildCategoriesApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetProductImagesApiCall',
    expressAsyncHandler(async (req, res) => {
        actionToGetProductImagesApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToCartDataByProductAnduserId',
    expressAsyncHandler(async (req, res) => {
        actionToGetCartDataByProductAndUserIdApiCall(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);
productsRouter.post(
    '/actionToGetAllCartCountDataByUserId',
    expressAsyncHandler(async (req, res) => {
        actionToGetAllCartCountDataByUserId(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);

productsRouter.post(
    '/actionToGetUserCartDataByUserId',
    expressAsyncHandler(async (req, res) => {
        actionToGetUserCartDataByUserId(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);

productsRouter.post(
    '/actionDeleteProductFromCartByCartId',
    expressAsyncHandler(async (req, res) => {
        actionDeleteProductFromCartByCartId(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);


productsRouter.post(
    '/actionUpdateProductQuantityOnCartByCartId',
    expressAsyncHandler(async (req, res) => {
        actionUpdateProductQuantityOnCartByCartId(req.body).then((data) => {
            res.status(200).send(data);
        })
            .catch(error => {
                res.status(500).send(error);
            })
    })
);

export default productsRouter;
