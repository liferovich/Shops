import { AxiosResponse } from 'axios';
import api from '../http';
import { UserResponse } from '../models/response/UserResponse';

export default class UserService {
    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<UserResponse>> {
        return api.post<UserResponse>('/user/login', { email, password });
    }

    static async register(
        email: string,
        password: string
    ): Promise<AxiosResponse<UserResponse>> {
        return api.post<UserResponse>('/user/registration', { email, password });
    }
}