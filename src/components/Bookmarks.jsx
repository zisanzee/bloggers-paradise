import PropTypes from 'prop-types'

const Bookmarks = ({timeRead, bookmarks}) => {

    
   
  
  const newLocal = " mt-8 text-center mb-6 text-lg font-bold bg-fuchsia-200 text-blue-700 border-2 border-blue-600 py-6 px-12 rounded-md";
  return (
    <section className=" w-1/3 h-full ">
      <div className={newLocal}>
        <p>Spent time on read: {
           timeRead
        
          } mins </p>
      </div>
     <div className=" p-8 sticky top-0 w-full rounded-md bg-slate-200">
      <h2 className="font-bold text-xl">Bookmarked Blogs : {bookmarks.length}</h2>
      <div>
      {
        bookmarks.map(item => <h1 key={item} className="py-5 px-6 bg-slate-50 mt-4 rounded-sm text-sm "> {item}</h1>)
      }
      </div>
     </div>
    </section>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  timeRead: PropTypes.array
}

export default Bookmarks;