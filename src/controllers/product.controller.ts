import { Request, Response  } from "express";


export const getProducts = async ( request: Request, response: Response ) : Promise<Response> =>{


    return response.status(200).json({msg: "ok"});
}


export const getProductById = async ( request: Request, response: Response ) : Promise<Response> =>{


    return response.status(200).json({msg: "ok"});
}


export const saveProduct = async ( request: Request, response: Response ) : Promise<Response> =>{


    return response.status(201).json({msg: "ok"});
}


export const updateProduct = async ( request: Request, response: Response ) : Promise<Response> =>{


    return response.status(200).json({msg: "ok"});
}


export const deleteProduct = async ( request: Request, response: Response ) : Promise<Response> =>{


    return response.status(200).json({msg: "ok"});
}