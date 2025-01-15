import axios from "axios";

class BlogAxiosInstance {
    constructor(baseURL) {
        this.postAxiosInstance = axios.create({
            baseURL: baseURL || 'http://localhost:5000/blogs', 
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.setupInterceptors();
    }

    setupInterceptors() {
        this.postAxiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response) {
                    console.error('Response error:', error.response.status, error.response.data);
                    switch (error.response.status) {
                        case 500:
                            console.log('Internal Server Error');
                            break;
                        case 404:
                            console.log('Resource Not Found');
                            break;
                        case 400:
                            console.log('Bad Request');
                            break;
                        default:
                            console.log(`Unhandled status code: ${error.response.status}`);
                    }
                } else if (error.request) {
                    console.log('Request Error', error.request);
                } else {
                    console.log('Network Error', error.message);
                }
                return Promise.reject(error);
            }
        );
    }

    get(url, config) {
        return this.postAxiosInstance.get(url, config);
    }

    post(url, data, config) {
        return this.postAxiosInstance.post(url, data, config);
    }

    put(url, data, config) {
        return this.postAxiosInstance.put(url, data, config);
    }

    delete(url, config) {
        return this.postAxiosInstance.delete(url, config);
    }
}


const axiosInstance = new BlogAxiosInstance('http://localhost:5000');

export default axiosInstance;
