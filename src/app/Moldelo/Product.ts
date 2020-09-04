import { ProductStatus } from './ProductStatus';

export class Product{
    productId:number;
    name:string;
    description:string;
    basePrice:number;
    taxRate:number;
    productStatus:ProductStatus;
    inventoryQuantity:number;
}