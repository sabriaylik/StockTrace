


import axios, { AxiosResponse } from 'axios';
import {API_URL,CATEGORY_DELETE, PRODUCT_INSERT, PRODUCT_SELECTALL} from '../utils/constants/constants';
// import {API_URL,CATEGORY_DELETE,CATEGORY_INSERT,CATEGORY_SELECTALL, PRODUCT_INSERT, PRODUCT_SELECTALL} from '../utils/constants/constants';

// import { ICategory, ResponseCategory, ResponseCategoryAll } from '../Models/Interface/Category';
import { BaseResponse } from '../Models/Interface/BaseResponse';
import { IProduct, ResponseProductAll } from '../Models/Interface/Product';
import Product from '../Models/Concrate/Product';

// export interface CategoryResult {
//     success:boolean,
//     message:String,
//     data:Category[]
//   }

class ProductService{



    public async getData(): Promise<IProduct[]> {
        try {
            const response: AxiosResponse<ResponseProductAll> = await axios.get(`${API_URL + PRODUCT_SELECTALL}`);
            return response.data.data;
        } catch (error) {
            throw error; // Re-throw or handle error as necessary
        }
    }




    // Example method to post data
    // public async postData(data: IProduct): Promise<IProduct[]> {
    //     try {
    //         const product = {
    //             productId: null,
    //             explain : "yeni Ürün 8",
    //             purchasePrice: 10.5,
    //             salePrice: 12.5,
    //             earningRate: 0.13,
    //             savedDate: '2024-10-17T07:00:00.000+00:00',
    //             userId: 1,
    //             category : {
    //                 categoryId: 1,
    //                 explain: 'string',
    //                 userId: -1,
    //                 savedDate: '2024-11-10T14:32:00.000+00:00' // Consider using Date if you plan to manipulate dates
    //             },
    //             measureUnit:{
    //             measureUnitId: 1,
    //             explain: 'KG',
    //             savedDate: '2024-10-17T07:00:00.000+00:00'
    //             }

    //         };
    //         console.log("inserted postData Method");
    //         console.log( product  );
    //         const response: AxiosResponse<ResponseProductAll> = await axios.post(`${API_URL+CATEGORY_INSERT}`, product);
    //         console.log(response);
    //         return response.data.data;
    //     } catch (error) {
    //         console.error('Error posting data:', error);
    //         throw error; // Re-throw or handle error as necessary
    //     }
    // }


    // // Example method to post data
    // public async postData2(): Promise<IProduct[]> {
    //     try {
    //         const product = {
    //             productId: 0,
    //             explain : "yeni Ürün 9",
    //             purchasePrice: 10.5,
    //             salePrice: 12.5,
    //             earningRate: 0.13,
    //             savedDate: '2024-10-17T07:00:00.000+00:00',
    //             userId: 1,
    //             category : {
    //                 categoryId: 1,
    //                 explain: 'string',
    //                 userId: -1,
    //                 savedDate: '2024-11-10T14:32:00.000+00:00' // Consider using Date if you plan to manipulate dates
    //             },
    //             measureUnit:{
    //             measureUnitId: 1,
    //             explain: 'KG',
    //             savedDate: '2024-10-17T07:00:00.000+00:00'
    //             }
    //         };
    //         console.log("inserted postData Method");
    //         console.log( product  );
    //         const response: AxiosResponse<ResponseProductAll> = await axios.post(`${API_URL+PRODUCT_INSERT}`, product);
    //         console.log(JSON.stringify(response.data) );
    //         return response.data.data;
    //     } catch (error) {
    //         console.error('Error posting data:', error);
    //         throw error; // Re-throw or handle error as necessary
    //     }
    // }


    public async postData(product: Product): Promise<IProduct[]> {
        try {
            const response: AxiosResponse<ResponseProductAll> = await axios.post(`${API_URL + PRODUCT_INSERT}`, product);
            console.log(response.data);
            return response.data.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }

    public async deleteData(data:number): Promise<BaseResponse> {
        try {
            // console.log( `${API_URL+CATEGORY_DELETE+"/"+data}  `   );
            const response: AxiosResponse<BaseResponse> = await axios.delete(`${API_URL + CATEGORY_DELETE + '/' + data}`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; // Re-throw or handle error as necessary
        }
    }
}


// Export an instance of the service
const productService = new ProductService();
export default productService;







