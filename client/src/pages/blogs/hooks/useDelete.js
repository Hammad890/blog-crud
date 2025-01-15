import deleteBlogs from "../services/deleteBlog";
import Swal from "sweetalert2";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useDelete =()=>{
    const [data,setData]= useState([]);
    const navigate = useNavigate(); 

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBlogs(id).then(()=>{
                    setData(data.filter(blog=>blog.id!==id));
                    Swal.fire("Deleted!", "Your blog has been deleted.", "success").then(() => {
                        navigate('/');
                    });
                }).catch(err => {
                    Swal.fire("Error", "There was a problem deleting the blog. Please try again later.", "error");
                });
            }
        });
    
}
    return {data, handleDelete}
}

export default useDelete;