import Home from "./Home";
import Nav from "./Nav";
import { useState,useEffect } from "react";

const App=()=>{
  const [ip,setip]=useState("anshu");
  const [data,setnewdata]=useState(null);
  const api="6810686359134c71b4cd51d1b3e2fefc";
  const getdata=async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${ip}&apiKey=${api}`);
    const data1=await response.json();
    setnewdata(data1);
  
  }
  useEffect(()=>{
    getdata();
  },[]);
  return(
    <div>
    <Nav setip={setip} getdata={getdata}/>
    <Home newsData={data}/>
  </div>
  )

}
export default App;