import { BaseResponse } from "./BaseResponse";

// Category.ts (optional: separate file for interface)
export interface ICategory {
    categoryId: number;
    explain: string;
    userId: number;
    savedDate: string; // Consider using Date if you plan to manipulate dates
  }

export interface ResponseCategoryAll extends BaseResponse{
  data:ICategory[];
}

export interface ResponseCategory extends BaseResponse {
  data : ICategory;
}



