

export default class Category {
    categoryId: number | null;
    explain: String;
    userId: number;
    savedDate: Date; // Consider using Date if you plan to manipulate dates

    constructor( categoryId: number | null,explain: String, userId: number , savedDate: Date){
        this.categoryId = categoryId,
        this.explain  = explain,
        this.userId = userId,
        this.savedDate = savedDate
    }
}