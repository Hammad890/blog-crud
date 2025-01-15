import axiosInstance from "../../../config/axios";

const getBlogs =async()=>{
    try {
        const response = await axiosInstance.get('/blogs');
        console.log (response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getBlogById = async(id)=>{
    try {
        const response = await axiosInstance.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {getBlogById,getBlogs};