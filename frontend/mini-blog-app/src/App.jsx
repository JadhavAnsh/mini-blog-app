import { Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogCard/BlogList';
import BlogDetails from './components/BlogDetails/BlogDetails';
import BlogForm from './components/BlogForm/BlogForm';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
