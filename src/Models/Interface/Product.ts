import { BaseResponse } from "../Interface/BaseResponse";
import { ICategory } from "../Interface/Category";
import { IMeasureUnit } from "./MeasureUnit";


export  interface IProduct {
    productId: number,
    explain : string,
    purchasePrice: number,
    salePrice: number,
    earningRate: string,
    savedDate: string
    userId: 1,
    category : ICategory,
    measureUnit:IMeasureUnit
}


export interface ResponseProductAll extends BaseResponse{
    data:IProduct[]
}

export interface ResponseProduct extends BaseResponse {
    data:IProduct
}


