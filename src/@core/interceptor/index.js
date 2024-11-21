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
    opt.headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDNmYTJhZC1jM2U4LTQ5MWEtOTdjNC00Yzg4Y2ZmZjNkYmMiLCJqdGkiOiJlNTViNzYyZS1iZjUwLTRlNmQtOGJjMi0xMGQ2OTgzZjhlYTMiLCJlbWFpbCI6Im5hdmlkcmV6YWFiYmFzemFkZWg4OUBnbWFpbC5jb20iLCJVaWQiOiJxaXVhVDZBN2hMbFZtL1laU3QwWmhEZVlZTHBLT0ZLdW4xU1FlRUo2S2JZPUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiU3R1ZGVudCIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciJdLCJleHAiOjE3MzIyOTUwODgsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.-Tln9lCTW8rtqzW9_s3MBFo0-UB4yIN44h-_ZmXYAqw';
    return opt;
})

export default instance