import axiosInstance from "../../../config/axios";

const updateBlog = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/blogs/${id}`, data);
        console.log("Updated blog:", response.data);
        return response.data;
        
    } catch (err) {
        console.error("Error updating blog:", err);
        throw err;
    }
};

export default updateBlog;
