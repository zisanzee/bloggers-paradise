import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className=" border-l-2 w-2/3">
      <h1 className="text-center">Blogs: {blogs.length}</h1>
      {
        blogs.map(blog=> <Blog key={blog.id} blog={blog}/>)
      }
      
    </div>
  );
};

export default Blogs;