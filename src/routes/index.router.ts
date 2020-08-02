import { Router } from "express";
import productRouter from "./product.routes";

const router = Router();

router.use( '/api-orm/products', productRouter );

// define default routes
router.get('/', ( request, response )=>{
    response.send('Default for API MariaBD, TS and express');
});

export default router;
