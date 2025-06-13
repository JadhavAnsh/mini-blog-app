import BlogList from './components/BlogCard/BlogList'
import BlogForm from './components/BlogForm/BlogForm'
import Navbar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <Navbar />
      <BlogList />
      <BlogForm onSubmit={(data) => console.log(data)} />
    </>
  )
}

export default App
