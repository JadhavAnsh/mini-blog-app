import { Link } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import BlogCard from './BlogCard';
import './BlogList.css';

const BlogList = () => {
  const { blogs, loading, error } = useBlog();

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <Link to={`/blogs/${blog._id}`} key={blog._id}>
            <BlogCard title={blog.title} content={blog.content} />
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
