
import axios, { AxiosResponse } from 'axios';
import {API_URL,CATEGORY_DELETE,CATEGORY_INSERT,CATEGORY_SELECTALL} from '../utils/constants/constants';
import { ICategory, ResponseCategory, ResponseCategoryAll } from '../Models/Interface/Category';
import { BaseResponse } from '../Models/Interface/BaseResponse';
import Category from '../Models/Concrate/Category';

// export interface CategoryResult {
//     success:boolean,
//     message:String,
//     data:Category[]
//   }

class CategoryService{



    public async getData(): Promise<ICategory[]> {
        try {
            const response: AxiosResponse<ResponseCategoryAll> = await axios.get(`${API_URL+CATEGORY_SELECTALL}`);
            // console.log(`${API_URL+CATEGORY_SELECTALL}`);
            // console.log("\t\t   LIST OF CATEGORIES \n");
            // console.log(response.data);
            // console.log(JSON.stringify(response.data.data, null, 4).toString());

            // for (let i = 0; i < response.data.data.length; i++) {
            //     console.log(JSON.stringify(response.data.data[i], null, 2));
            //   }

            // console.log("\t\t   LIST OF CATEGORIES  END \n")
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }




    // Example method to post data
    public async postData(data: String): Promise<ICategory[]> {
        try {
            const category = {
                categoryId : null,
                explain : data,
                savedDate:new Date(),
                userId:-1
            }
            // console.log( `${API_URL+CATEGORY_INSERT}`  );
            const response: AxiosResponse<ResponseCategoryAll> = await axios.post(`${API_URL+CATEGORY_INSERT}`, category);
            // console.log(response.data);
            return response.data.data;
        } catch (error) {
            
            console.error('Error posting data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }

     // Example method to post data
     public async postData2(category: Category): Promise<ICategory[]> {
        try {
            console.log("Category Service postData2 Started")
            // console.log( `${API_URL+CATEGORY_INSERT}`  );
            const response: AxiosResponse<ResponseCategoryAll> = await axios.post(`${API_URL+CATEGORY_INSERT}`, category);
            // console.log(response.data);
            console.log("Category Service postData2 Started")

            return response.data.data;
        } catch (error) {
            
            console.error('Error posting data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }


    public async deleteData(data:number): Promise<BaseResponse> {
        try {
            
            // console.log( `${API_URL+CATEGORY_DELETE+"/"+data}  `   );
            const response: AxiosResponse<BaseResponse> = await axios.delete(`${API_URL+CATEGORY_DELETE+"/"+data}`);
            // console.log(response.data);
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
