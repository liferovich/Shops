import { AxiosResponse } from 'axios';
import api from '../http';
import { ProductsResponse, ProductResponse } from '../models/response/ProductResponse';

export default class ProductService {
    static async getProducts(category: string): Promise<AxiosResponse<ProductsResponse>> {
        return api.post<ProductsResponse>(`/products/category`, { category });
    }
    static async getProduct(id: number): Promise<AxiosResponse<ProductResponse>> {
        return api.get<ProductResponse>(`/products/${id}`);
    }
}
