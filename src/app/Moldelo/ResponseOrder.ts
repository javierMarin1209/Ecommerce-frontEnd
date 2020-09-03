import { ProductXorder } from './productXorder';
import { OrderStatus } from './OrderStatus';

export class ResponseOrder{
    orderId:number;
    discount:boolean;
    totalPrice:number;
    totalTaxPrice:number;
    totalBasePrice:number;
    productXorders:Array<ProductXorder>;
    state:OrderStatus;
}