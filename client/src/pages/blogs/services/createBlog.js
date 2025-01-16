import axiosInstance from "../../../config/axios";

const createBlog =async(body)=>{
    try{
        const response = await axiosInstance.post('/blogs',body );
        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}

export default createBlog;