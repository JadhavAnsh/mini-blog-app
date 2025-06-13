import { useEffect, useState } from 'react';
import BlogCard from './BlogCard'; // import your BlogCard
import './BlogList.css'; // optional for grid layout

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs from your backend
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to fetch blogs:', err));
  }, []);

  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id || blog.id}
            title={blog.title}
            content={blog.content}
          />
        ))
      )}
    </div>
  );
};

export default BlogList;
