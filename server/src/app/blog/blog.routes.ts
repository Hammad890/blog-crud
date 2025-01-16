import express, { NextFunction, Request, Response } from 'express';
import validateBody from '../../shared/middleware/validateBody';
import BlogController from './blog.controller';
import { updateBlogSchema } from './schema/update-blog.valdation';


const router = express.Router();

// Create a blog
router.post(
  '/',
 
  // BlogController.createBlog,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await new BlogController().createBlog(req, res);
    } catch (err) {
      next(err);
    }
  }
);

// Get all blogs
router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await new BlogController().getAllBlogs(req, res);
    } catch (err) {
      next(err);
    }
  }
);

// Get a single blog by ID
router.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await new BlogController().getBlogById(req, res);
    } catch (err) {
      next(err);
    }
  }
);

// Update a blog by ID
router.put(
  '/:id',
  validateBody(updateBlogSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req)
      await new BlogController().updateBlog(req, res);
    } catch (err) {
      next(err);
    }
  }
);

// Delete a blog by ID
router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await new BlogController().deleteBlog(req, res);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
