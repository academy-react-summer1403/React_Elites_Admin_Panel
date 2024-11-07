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
    opt.headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYWJkNTdlYS1lNzU2LTQ3MGEtOTBiZS1iODMyMjI5NGY4ZDMiLCJqdGkiOiJjYmNhNzYxNy0zMGIyLTQ0NGUtOGQ5My1kM2NjNjFiMDBjNDIiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6InFTK09DMXU1eW01L0dsTEF1Z1BXQ0xGNVFaYUs5Yjl2MkVPZkhVTmRGN2s9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciIsIlN0dWRlbnQiXSwiZXhwIjoxNzMwOTk4OTc1LCJpc3MiOiJTZXBlaHJBY2FkZW15IiwiYXVkIjoiU2VwZWhyQWNhZGVteSJ9.20R4VTmN2zaIxqnChbuRjROCHHoK7CVNANX3-1T42xI';
    return opt;
})

export default instance