import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://voeja-scrum-pocker-server.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.get<T>(url, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const post = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.post<T>(url, data, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const put = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.put<T>(url, data, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.delete<T>(url, config);
        return response;
    } catch (error) {
        throw error;
    }
};