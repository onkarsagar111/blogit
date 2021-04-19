import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://blog-t-4854f-default-rtdb.firebaseio.com/'
})

axiosInstance.defaults.headers.common['Authorization'] = "AUTH TOKEN!!"

export default axiosInstance;