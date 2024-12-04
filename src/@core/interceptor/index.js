import axios from 'axios'
import { clearStorages, getItem, removeItem, setItem } from '../services/storage/storage.services';

const baseURL = import.meta.env.VITE_BASE_URL

const instance = new axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
    return response.data;
}

const onError = (err) => {

    if (err.response.status >= 400 && err.response.status < 500) {
        alert("Client error: " + err.response.status)
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
    // const token = getItem("token") ? JSON.parse(getItem("token")) : "";
    opt.headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYzZiNmIwMS0yZDA3LTQxMjMtOGE5OS1hMDljZjQ0NDljNDQiLCJqdGkiOiJhZWMzZDE5ZS01ZjgwLTQ0NDEtODI5OS1kODQ0N2U0ZTM2NDQiLCJlbWFpbCI6InRpbmFtYWhtb3VkaTIwMUBnbWFpbC5jb20iLCJVaWQiOiJsUXBqWFphN2JET1Bra0xGb3dRTDdxS1NZUGFDUmNYZGZTb1Z6K0VqUjFrPUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiVGVhY2hlciIsIlJlZmVyZWUiLCJBZG1pbmlzdHJhdG9yIiwiU3R1ZGVudCJdLCJleHAiOjE3MzM0MTcyNTcsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.xET1TcsRRD__hm1LuFhB5gWilRoFaHAXstdQz31IHPE';
    return opt;
})

export default instance