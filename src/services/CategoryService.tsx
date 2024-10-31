
import axios, { AxiosResponse } from 'axios';
import {Category } from '../Models/Category';


export interface CategoryResult {
    success:boolean,
    message:String,
    data:Category[]
  }

class CategoryService{

     baseUrl: string ="http://192.168.1.101:6565/SP_war/sp/stock/category/selectall";
     insertUrl: string ="http://192.168.1.101:6565/SP_war/sp/stock/category/insert";


    public async getData(): Promise<Category[]> {
        try {
            const response: AxiosResponse<CategoryResult> = await axios.get(`${this.baseUrl}`);
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }



    // Example method to post data
    public async postData(data: String): Promise<CategoryResult> {
        try {
            const category = {
                categoryId : null,
                explain : data,
                savedDate:'2024-10-30',
                userId:-1

            }
            console.log(category);
            const response: AxiosResponse<CategoryResult> = await axios.post(`${this.insertUrl}`, category);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }

}


// Export an instance of the service
const categoryService = new CategoryService();
export default categoryService;
