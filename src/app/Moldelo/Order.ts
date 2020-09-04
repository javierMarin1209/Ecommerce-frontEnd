import { OrderStatus } from './OrderStatus';

export class Order{
    orderId:number;
    state:OrderStatus;
    totalBasePrice:number;
    totalTaxPrice:number;
    totalPrice:number;
    discount:boolean;
}