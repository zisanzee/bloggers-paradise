import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({addBookmark, bookmarks, removeBookmark, markRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <section className=" w-2/3">
     
      {blogs.map((blog) => (
        <Blog markRead={markRead} removeBookmark={removeBookmark} bookmarks={bookmarks} addBookmark={addBookmark} key={blog.id} blog={blog} />
      ))}
    </section>
  );
};

export default Blogs;
