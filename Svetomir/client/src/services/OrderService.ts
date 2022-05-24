import { AxiosResponse } from 'axios';
import api from '../http';
import { Order, OrderResponse, OrdersResponse } from '../models/response/OrderResponse';

export default class OrderService {
    static async addOrder(order: Order): Promise<AxiosResponse<OrderResponse>> {
        return api.post<OrderResponse>(`/order`, { order });
    }
    static async getOrders(id: number): Promise<AxiosResponse<OrdersResponse>> {
        return api.get<OrdersResponse>(`/order/${id}`);
    }
}
