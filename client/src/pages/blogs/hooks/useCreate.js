import createBlog from "../services/createBlog";
import { useState } from "react";
import Swal from "sweetalert2";

function useCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [blog, setBlog] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
        else if (name === 'content') setContent(value);
        else if (name === 'category') setCategory(value);
        else if (name === 'author') setAuthor(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBlog = await createBlog({ title, content, category, author });
            setBlog([...blog, newBlog]);
            setTitle('');
            setContent('');
            setCategory('');
            setAuthor('');
            Swal.fire({
                icon: 'success',
                title: 'Blog created successfully!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    return {
        title,
        content,
        category,
        handleInputChange,
        handleSubmit,
        author,
        blog,
    };
}

export default useCreate;
