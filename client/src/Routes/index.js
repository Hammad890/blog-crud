import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import ErrorPage from "../pages/error-page";
import BlogPage from "../pages/blogs";
import Home from "../pages/home";
import ContactUsPage from "../pages/contact";
import AboutUsPage from "../pages/about";
import BlogForm from "../pages/blogs/components/blogform";
import BlogDetails from "../pages/blogs/components/blogDetails"
import UpdateBlogForm from "../pages/blogs/components/updateBlogForm";

const router = createBrowserRouter([
  { path: "/", 
  element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path :'/', index: true, element: <Home/>},
      { path :'blogs', element: <BlogPage/>},
      {path: 'contact', element: <ContactUsPage/>},
      {path: 'about', element: <AboutUsPage/>},
      {path: 'blogs/new', element: <BlogForm/>},
      {path: 'blogs/:id', element: <BlogDetails/>},
      { path: 'blogs/:id/edit', element: <UpdateBlogForm/>},
    ]
    }
])

export default router