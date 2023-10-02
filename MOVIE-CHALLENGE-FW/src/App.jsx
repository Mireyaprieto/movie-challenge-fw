import { useEffect, useState } from 'react'
import Navegacion from './componentes/pelicula'

import Card from './componentes/card'
import './App.css'
import './Botones.css'
import './Card.css'

let  api_key = "?api_key=b75093051d20fceba2d6f3bced16be44";
let  base_url="https://api.themoviedb.org/3";
let url= base_url+"/discover/movie"+api_key+"&page=1";

function App() {
  const[movieData, setData]= useState([]);
  const [url_set,setUrl] = useState(url); 
 const [search, setsearch]=useState();
  useEffect(()=>{
    fetch (url_set).then(res=>res.json()).then(data => {
      /*console.log(data.results)*/
  setData(data.results);
  })
      },[url_set]) 
    
      
        
  
  return (
   <>
     <Navegacion/>
     
    <div className="container">
            {
               (movieData.length==0)?<p className="notfound">not found</p>: movieData.map((res,pos)=>{
                  return(
                     <Card info= {res} key={pos}/>
                  )
                  
               })
            }
         </div>
    
     
        
          </>
    
  )
}
  export default App