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
    opt.headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZjQ2OWI0Yi0zNjZkLTQ1Y2UtOTBiYi0yNWZhNjVkZTljZGMiLCJqdGkiOiJhMDdiOWMzZi0zNzc3LTQwZTUtYjBlMC0yODE4YmUzOTZiMzciLCJlbWFpbCI6InJlenZhbmVoLjMzM0BnbWFpbC5jb20iLCJVaWQiOiJMdlhGMEpkMHd0TE0vZkZYOXREZUdXTXlxdG50TWV0c0FFWHQ1NGRUVllNPUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUmVmZXJlZSIsIlN0dWRlbnQiLCJBZG1pbmlzdHJhdG9yIiwiVGVhY2hlciJdLCJleHAiOjE3MzI4NTYxNjQsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.gaHz-bo7313zJjVvlsDt4FcS2ZkoUUrTxzoHIDUo4k4';
    return opt;
})

export default instance