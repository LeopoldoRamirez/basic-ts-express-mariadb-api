import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name :"products"
})
export class Product {

    @PrimaryGeneratedColumn({
        name: "product_id"
    })
    productId : number;


    @Column({
        name:"product_name"
    })
    productName: string;

    @Column({
        name: "product_price"
    })
    price: number;

    @Column({
        name:"is_active"
    })
    isActive:boolean;
}