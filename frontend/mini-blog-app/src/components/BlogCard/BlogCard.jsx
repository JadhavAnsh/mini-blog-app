import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ _id, title, content }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <Link to={`/blogs/${_id}`} className="blog-card-title-link">
          <h2 className="blog-card-title">{title}</h2>
        </Link>
      </div>
      <div className="blog-card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
