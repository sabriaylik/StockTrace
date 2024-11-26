import { BaseResponse } from "./BaseResponse";
import { Category } from "./Category";


export  interface Product {
    productId: number,
    explain : string,
    purchasePrice: number,
    salePrice: number,
    earningRate: number,
    savedDate: string
    userId: 1,
    category : Category,
    measureUnit:{
        measureUnitId: number,
        explain: string,
        savedDate: Date
    }
}


export interface ResponseProductAll extends BaseResponse{
    data:Product[]
}

export interface ResponseProduct extends BaseResponse {
    data:Product
}


