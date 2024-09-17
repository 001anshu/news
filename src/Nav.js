

const Nav = ({setip,getdata}) => {
  
  return (
    
    <div>
      <nav className="flex justify-between p-5 gap-10">
        <div>
          <h1 className="md:text-5xl">Trendy news</h1>
        </div>
        <div className="flex gap-5">
          <h1 >Hot news</h1>
          <h1>All news</h1>
        </div>
        <div>
          <input type="text" placeholder="Search News "  onChange={(e)=>{
            setip(e.target.value);
          }} />
          <button onClick={getdata}>Search</button>
        </div>
      </nav>
      <h1 className="text-center">Stay updated with trendy news</h1>
      <div className="flex flex-wrap gap-8 justify-center p-5">
        
        <div className="bg-red-400 rounded-2xl w-32 text-white p-2 text-center">Sports</div>
        <div className="bg-red-400 rounded-2xl w-32 text-white p-2 text-center">Politics</div>
        <div className="bg-red-400 rounded-2xl w-32 text-white p-2 text-center">Health</div>
        <div className="bg-red-400 rounded-2xl w-32 text-white p-2 text-center">Entertainment</div>
        <div className="bg-red-400 rounded-2xl w-32 text-white p-2 text-center">Education</div>
      </div>
    </div>
  );
};

export default Nav;
