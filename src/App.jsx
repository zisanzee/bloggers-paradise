import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [timeRead, setTimeRead] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = title => {
    if(!bookmarks.includes(title)){
      setBookmarks([...bookmarks, title])
    }
  }
  const removeBookmark = title => {
    setBookmarks(bookmarks.filter((item)=> item !== title))
  }
  const markRead = time => {
    setTimeRead(timeRead + time)
  }
  return (
    <>
      <Header />
      <div className="flex gap-6 max-w-screen-xl mx-auto relative h-auto">
        <Blogs markRead={markRead} bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark} />
        <Bookmarks className=" sticky top-0" bookmarks={bookmarks} timeRead={timeRead} />
      </div>
    </>
  );
}

export default App;
