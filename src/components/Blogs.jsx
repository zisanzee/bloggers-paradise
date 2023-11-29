import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types"

const Blogs = ({addBookmark, UnmarkRead, bookmarks, removeBookmark, markRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <section className=" w-2/3">
     
      {blogs.map((blog) => (
        <Blog markRead={markRead} UnmarkRead={UnmarkRead} removeBookmark={removeBookmark} bookmarks={bookmarks} addBookmark={addBookmark} key={blog.id} blog={blog} />
      ))}
    </section>
  );
};
Blogs.propTypes = {
  addBookmark: PropTypes.func,
  removeBookmark: PropTypes.func,
  markRead: PropTypes.func,
  bookmarks: PropTypes.array,


}
export default Blogs;
