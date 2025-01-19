import { getBlogs, getBlogById } from "../services/getBlogs";
import { useState, useEffect } from 'react';

export default function useGetBlogs(selectedCategories = []) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoadingBlog, setIsLoadingBlog] = useState(false);
  
  const getBlogsData = async () => {
    setIsLoading(true);
    try {
      const allBlogs = await getBlogs();
      setBlogs(allBlogs);
      const categoriesList = [...new Set(allBlogs.map(blog => blog.category))];
      setCategories(categoriesList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getBlogDataById = async (id) => {
    setIsLoadingBlog(true);
    try {
      const response = await getBlogById(id);
      setBlog(response);
    } catch (error) {
      console.error(`Error fetching blog with id ${id}:`, error);
    } finally {
      setIsLoadingBlog(false);
    }
  };

  

  useEffect(() => {
    getBlogsData();
  }, []); 

  return { blogs, categories, isLoading, getBlogDataById, blog, isLoadingBlog};
}
