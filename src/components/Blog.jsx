import { useState } from "react";


const Blog = ({ blog, UnmarkRead, addBookmark, bookmarks, removeBookmark, markRead }) => {
  const getDaysAgo = (dateString) => {
    const currentDate = new Date();

    const dateParts = dateString.split("-");
    const year = dateParts[0];
    const month = dateParts[1] - 1;
    const day = dateParts[2];
    const targetDate = new Date(year, month, day);
    const formattedDate = targetDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    const differenceInMs = currentDate - targetDate;

    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return `${formattedDate} (${differenceInDays} Days ago)`;
  };

  const [canRead, setCanRead] = useState(true)

  return (
    <div className="py-8 border-b-2 ">
      <img className="w-full rounded-md" src={blog.coverImg} alt="" />
      <div className="flex mt-7 mb-4 justify-between">
        <div className="flex gap-6">
          <div className=" flex items-center w-14 h-14 overflow-hidden rounded-full">
            <img className=" h-full w-fit" src={blog.authorImg} alt="" />
          </div>
          <div>
            <h3 className=" text-2xl font-semibold">{blog.author}</h3>
            <p className=" text-base text-gray-500">
              {getDaysAgo(blog.postedDate)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {blog.readingTime} min read
          <button
            onClick={() => {
              if(!bookmarks.includes(blog.title)){
                addBookmark(blog.title)
              } else {
                removeBookmark(blog.title)
              }
              }}
             
          >
            <svg className=" transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={bookmarks.includes(blog.title)? 'green': 'none'}
            >
              <path
                d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <h1 className=" text-4xl font-bold w-11/12">{blog.title}</h1>
      <div className="flex my-5 gap-3 text-gray-400">
        {blog.hashtags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
      <button onClick={()=>{
        if (canRead){
          markRead(blog.readingTime)
          setCanRead(false)
        } else {
          UnmarkRead(blog.readingTime)
          setCanRead(true)
        }
      }} className={canRead? 'text-blue-600': 'text-red-600'} >
        {canRead? 'Mark as read': 'Unmark as read'}
      </button>
    </div>
  );
};

export default Blog;
