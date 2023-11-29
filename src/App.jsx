import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

function App() {
  const localBook = ()=>{
    const item = JSON.parse(localStorage.getItem('bookmark'))
    return item || []
  } 
  const localTimeRead = ()=>{
    const item = JSON.parse(localStorage.getItem('timeRead'))
    
    return item || 0
  } 



  const [timeRead, setTimeRead] = useState(localTimeRead);
  const [bookmarks, setBookmarks] = useState(localBook);

  const addBookmark = title => {
    const newAdd = [...bookmarks, title]
    if(!bookmarks.includes(title)){
      setBookmarks(newAdd)
      localStorage.setItem('bookmark', JSON.stringify(newAdd))
    }
  }
  const removeBookmark = title => {
    const newRemove = bookmarks.filter((item)=> item !== title)
    setBookmarks(newRemove)
    localStorage.setItem('bookmark', JSON.stringify(newRemove))
  }
  const markRead = time => {
    setTimeRead(timeRead + time)
  }
  const UnmarkRead = time => {
    setTimeRead(timeRead - time)
  }
 
  return (
    <>
      <Header />
      <div className="flex gap-6 max-w-screen-xl mx-auto relative h-auto">
        <Blogs markRead={markRead} UnmarkRead={UnmarkRead} bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark} />
        <Bookmarks className=" sticky top-0" bookmarks={bookmarks} timeRead={timeRead} />
      </div>
    </>
  );
}

export default App;
