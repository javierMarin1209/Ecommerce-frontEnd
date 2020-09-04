import { ProductStatus } from './ProductStatus';

export class RequestProduct{
    email:string;
    productId:Number;
    name:string;
    description:string;
    basePrice:number;
    taxRate:number;
    productStatus:string;
    inventoryQuantity:number;
}