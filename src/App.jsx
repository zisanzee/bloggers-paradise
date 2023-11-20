import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex max-w-screen-xl mx-auto">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
