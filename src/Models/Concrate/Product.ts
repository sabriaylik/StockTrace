import Category from "./Category"
import MeasureUnit from "./MeasureUnit"

export default class Product {
    productId: number;
    explain : string;
    purchasePrice: number;
    salePrice: number;
    earningRate: string;
    savedDate: string;
    userId: 1;
    category : Category;
    measureUnit:MeasureUnit;

    constructor(productId: number,explain : string,purchasePrice: number,salePrice: number,earningRate: string,
        savedDate: string,userId: 1,category : Category,measureUnit:MeasureUnit){
            this.productId = productId;
            this.explain = explain;
            this.purchasePrice = purchasePrice;
            this.salePrice = salePrice;
            this.earningRate = earningRate;
            this.savedDate = savedDate;
            this.userId = userId;
            this.category = category;
            this.measureUnit = measureUnit;
            
    }




}