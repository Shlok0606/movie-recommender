import React, { useState , useEffect} from 'react'
import Subhead from './Subhead';
import SingleContent from './SingleComponent';
// import '../Styles/Movies.css'

import Header from '../Components/Header';
const url=`https://api.themoviedb.org/3/trending/all/week?api_key=52bfcae0dc91f5f46cb967987f36523a` ;


function Trending() {

  const [data, setdata] = useState([])
  const fetchData = async ()=>{
      const res=await fetch(url);
      const ans=await res.json();
      setdata(ans.results);
 
    
  }
  useEffect(() => {
    
   return fetchData; 
   
  }, [])
  


  return (

<>
<Header></Header>
<Subhead data="Trending"></Subhead>
<div  className='cardGrid'> 
    
{
  data.map((c)=>{
   return  (

  
   <SingleContent
   key={c.id}
   id={c.id}
   poster={c.poster_path}
   title={c.title || c.name}
   date={c.first_air_date || c.release_date}
   media_type={c.media_type}
   vote_average={c.vote_average}
   page_type="trending"
 />


  )
       })
}
    
    </div>

    </>
  )
}

export default Trending