import { BaseResponse } from "./BaseResponse";

// Category.ts (optional: separate file for interface)
export interface Category {
    categoryId: number;
    explain: string;
    userId: number;
    savedDate: string; // Consider using Date if you plan to manipulate dates
  }

export interface ResponseCategoryAll extends BaseResponse{
  data:Category[];
}

export interface ResponseCategory extends BaseResponse {
  data : Category;
}



