import Blog, { IBlog } from './Blog.model';

type BlogRepoData = Pick<IBlog, 'title' | 'content' | 'author'| 'category'>

interface UpdatedRepoData{
  title?: string | undefined;
  content?: string | undefined;
  author?: string | undefined;
  category?: string | undefined;
}

class BlogRepository {
  // Create a new blog post
  static async create(data: BlogRepoData ): Promise<IBlog> {
    const blog = new Blog(data);
    return await blog.save();
  }

  // Find all blog posts
  static async findAll(): Promise<IBlog[]> {
    return await Blog.find();
  }

  // Find a blog post by its ID
  static async findById(id: string): Promise<IBlog | null> {
    return await Blog.findById(id);
  }

  // Update a blog post by its ID
  static async updateById(id: string, data: UpdatedRepoData): Promise<IBlog | null> {
    return await Blog.findByIdAndUpdate(
      id,
      { ...data, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
  }

  // Delete a blog post by its ID
  static async deleteById(id: string): Promise<IBlog | null> {
    return await Blog.findByIdAndDelete(id);
  }
}

export default BlogRepository;
