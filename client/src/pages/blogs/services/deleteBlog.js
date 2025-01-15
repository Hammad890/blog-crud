import axiosInstance from "../../../config/axios";

const deleteBlogs =async(id)=>{
    try{
        const response= await axiosInstance.delete(`/blogs/${id}`)
        return (response)
    }catch(err){
        console.error(`Error deleting blog with id ${id}:`, err);
        throw err;
    }
}

export default deleteBlogs;