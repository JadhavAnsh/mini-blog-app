import { useState } from 'react';
import './BlogForm.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create blog post');
      }

      alert('Blog posted successfully!');
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err.message);
      alert('Error posting blog.');
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
