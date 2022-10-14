import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

class BackendService {

    public static get<T>(url: string, config?: AxiosRequestConfig) {
        return new Observable<AxiosResponse<T>>((sub) => {
            axios.get(url, config).then(result => {
                sub.next(result);
            }).catch((err) => {
                sub.error(err);
            }).finally(() => {
                if (sub) sub.complete();
            })
        })
    }

    public static post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<AxiosResponse<T>>((sub) => {
            axios.post(url, data, config).then(result => {
                sub.next(result);
            }).catch((err) => {
                sub.error(err);
            }).finally(() => {
                if (sub) sub.complete();
            })
        })
    }

    public static put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<AxiosResponse<T>>((sub) => {
            axios.put(url, data, config).then(result => {
                sub.next(result);
            }).catch((err) => {
                sub.error(err);
            }).finally(() => {
                if (sub) sub.complete();
            })
        })
    }

    public static patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<AxiosResponse<T>>((sub) => {
            axios.patch(url, data, config).then(result => {
                sub.next(result);
            }).catch((err) => {
                sub.error(err);
            }).finally(() => {
                if (sub) sub.complete();
            })
        })
    }

    public static delete<T>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<AxiosResponse<T>>((sub) => {
            axios.delete(url, config).then(result => {
                sub.next(result);
            }).catch((err) => {
                sub.error(err);
            }).finally(() => {
                if (sub) sub.complete();
            })
        })
    }
}

export default BackendService;