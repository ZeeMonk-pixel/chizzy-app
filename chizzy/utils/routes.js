import {AxiosAuthGet} from "../app/api/axios";

export const getRoutes = async(url, token) => {
    try {
        const res = await AxiosAuthGet(url, token);
        return res;

    } catch (error) {
        throw error;
    }
}