import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        console.log("id", id);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched blog:", data);
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="blog-details">Loading...</p>;
  if (error) return <p className="blog-details error">{error}</p>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
