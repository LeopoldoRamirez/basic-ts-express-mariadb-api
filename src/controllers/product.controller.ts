import { Request, Response  } from "express";
import { getRepository, Repository } from "typeorm";
import { Product } from "../entity/Product";


function getProductRepo():Repository<Product>{
    return getRepository(Product);
}

export const getProducts = async ( request: Request, response: Response ) : Promise<Response> =>{
    
    try {
        const respository :Repository<Product> = getProductRepo();

        const products = await respository.find();

        return response.status(200).json(products);
    } catch (error) {
        return response.status(500).json( error );    
    }
    
    
    return response.status(201).json({msg: "ok"});
}


export const getProductById = async ( request: Request, response: Response ) : Promise<Response> =>{
    const id = request.params.id;
    
    try {
        const repository: Repository<Product> = getProductRepo();
        
        const product = await repository.findOne( id );

        if( product ){
            return response.status(200).json( product );
        }

        return response.status(404).json( { msg: `Product with id ${id} not found` }  );
    } catch (error) {
        return response.status(500).json( error );    
    }    
}


export const saveProduct = async ( request: Request, response: Response ) : Promise<Response> =>{
    console.log("into save method ", request.body );
    
    const repository:Repository<Product> = getProductRepo();
    try {
        

        // create an entity to persist from request json body
        const productEntity = repository.create( request.body );

        // perfomrs the insert in database
        const results: Product[] =  await repository.save(productEntity);

        return response.status(200).json( results );
    } catch (error) {
        return response.status(500).json(error);    
    }


    
}


export const updateProduct = async ( request: Request, response: Response ) : Promise<Response> =>{
    const id = request.params.id;
    const updates =  request.body;
    try {
        const repository :Repository<Product> = getProductRepo();
        
        const wantedProduct = await repository.findOne(id);

        if( wantedProduct ){
            repository.merge( wantedProduct , updates );
            const results = await repository.update( id, wantedProduct);

            return response.status(200).json( results );
        }        

        return response.status(404).json( { msg: `Product with id ${id} not found` } );
    } catch (error) {
        return response.status(500).json(error);    
    }

    
}


export const deleteProduct = async ( request: Request, response: Response ) : Promise<Response> =>{
    try {
        const id = request.params.id;

        const repository:Repository<Product> = getProductRepo();
        
        const results = repository.delete(id);

        return response.status(200).json(results);    
    } catch (error) {
        return response.status(500).json(error);    
    }

    
}