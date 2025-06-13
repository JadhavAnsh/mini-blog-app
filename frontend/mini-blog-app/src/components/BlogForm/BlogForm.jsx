import { useBlog } from '@/context/BlogContext';
import { useState } from 'react';
import './BlogForm.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createBlog } = useBlog();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      await createBlog({ title, content });
      alert('Blog created successfully!');
      setTitle('');
      setContent('');
    } catch (err) {
      alert(err.message);
    }
  };
  
  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Create a New Blog</h2>

      <label className="form-label">Title</label>
      <input
        type="text"
        className="form-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label className="form-label">Content</label>
      <textarea
        className="form-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter blog content"
        rows="6"
      ></textarea>

      <button type="submit" className="form-button">Publish</button>
    </form>
  );
};

export default BlogForm;
