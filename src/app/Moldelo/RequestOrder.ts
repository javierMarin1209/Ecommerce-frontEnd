import { ProductXorder } from './productXorder';

export class RequestOrder{
    orderId:number;
    productXorders:Array<ProductXorder>;
    userXorders:string;
}