// Category.ts (optional: separate file for interface)
export interface Category {
    categoryId: number;
    explain: string;
    userId: number;
    savedDate: string; // Consider using Date if you plan to manipulate dates
  }