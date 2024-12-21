

export default class MeasureUnit {
    measureUnitId: number;
    explain: string;
    savedDate: Date;



    constructor( measureUnitId: number,explain: string,savedDate: Date){
        this.measureUnitId = measureUnitId;
        this.explain = explain;
        this.savedDate = savedDate;
    }
}