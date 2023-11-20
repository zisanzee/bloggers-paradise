

const Blog = ({blog}) => {
  return (
    <div>
      <img className="w-full" src={blog.coverImg} alt="" />
      <div>
        <div>
          <img className=" w-16" src={blog.authorImg} alt="" />
        </div>
      </div>
      <h1>{blog.title}</h1>
    </div>
  );
};

export default Blog;