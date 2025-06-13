import './BlogCard.css';

const BlogCard = ({ title, content }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <h2 className="blog-card-title">{title}</h2>
      </div>
      <div className="blog-card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
