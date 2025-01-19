import { useState } from "react";
import updateBlog from "../services/editBlog";
import Swal from "sweetalert2";

const useUpdateBlog = (id, initialBlog) => {
    const [title, setTitle] = useState(initialBlog ? initialBlog.title : '');
    const [content, setContent] = useState(initialBlog ? initialBlog.content : '');
    const [author, setAuthor] = useState(initialBlog ? initialBlog.author : '');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [updatedBlog, setUpdatedBlog] = useState(null); 

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleSubmit = async (e, onSuccess) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        console.log({ title, content, author });

        try {
            const updatedData = await updateBlog(id, { title, content, author });
            setUpdatedBlog(updatedData); 

            Swal.fire("Updated!", "Your blog has been updated successfully.", "success");
            if (onSuccess) {
                onSuccess(updatedData); 
            }
        } catch (err) {
            Swal.fire("Error!", "There was an issue updating your blog.", "error");
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        title,
        content,
        author,
        handleTitleChange,
        handleContentChange,
        handleAuthorChange,
        handleSubmit,
        isLoading,
        error,
        updatedBlog, 
    };
};

export default useUpdateBlog;

