import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://mini-blog-app-backend.onrender.com/api/posts');
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Failed to fetch blogs');
      }

      setBlogs(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogById = async (id) => {
    const res = await fetch(`https://mini-blog-app-backend.onrender.com/api/posts/${id}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || 'Failed to fetch blog');
    }

    return data;
  };

  const createBlog = async (blogData) => {
    const res = await fetch('https://mini-blog-app-backend.onrender.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || 'Failed to create blog');
    }

    setBlogs((prev) => [data, ...prev]);
    return data;
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        error,
        fetchBlogs,
        fetchBlogById,
        createBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
