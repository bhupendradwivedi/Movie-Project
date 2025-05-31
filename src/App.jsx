import { Route,Routes } from "react-router-dom";
import Home from "./component/Home";
import Trending from "./component/Trending"
import Popular  from "./component/Popular"
import Tv  from "./component/Tv"
import Movies from "./component/Movies"
import Peoples from "./component/Peoples"



const App = () => {
  return (
    <div className=" bg-[rgb(7,16,21)] w-screen h-screen flex">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/trending" element={<Trending/>}   />
      <Route path="/Popular" element={<Popular/>}   />
      <Route path="/Tv" element={<Tv/>}   />
      <Route path="/Movies" element={<Movies/>}   />
      <Route path="/People" element={<Peoples/>}   />
  
      

        </Routes>
    </div>
  )
}

export default App