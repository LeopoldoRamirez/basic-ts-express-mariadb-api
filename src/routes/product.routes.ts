import { Router  } from "express";
import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct  } from "../controllers/product.controller";

const router = Router();

router.get( '/', getProducts );

router.get( '/:id', getProductById );

router.post( '/', saveProduct );

router.put( '/:id', updateProduct );

router.delete( '/:id', deleteProduct );

export default router;