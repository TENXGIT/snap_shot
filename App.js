import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import axios from 'axios';
import Gall from './Gall';
function App() {
  const apiKey = "7be361c07ed123a6fd1242a6ba375f02"
  const [search, setsearch] = useState("")
  const [data, setdata] = useState([])
  

  const changeHandler = (e) => {

    setsearch(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce => setdata(responce.data.photos.photo)
    ).catch(
      err => { console.log("error occured", err) }
    )
    }
  const handel_mount=e=>{
    e.preventDefault();
    const search="mountain"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce => setdata(responce.data.photos.photo)
    ).catch(
      err => { console.log("error occured", err) }
    )
  }
  const handel_beachs=e=>{
    e.preventDefault();
    const search="beaches"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce => setdata(responce.data.photos.photo)
    ).catch(
      err => { console.log("error occured", err) }
    )
  }
  const handel_food=e=>{
    e.preventDefault();
    const search="food"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce => setdata(responce.data.photos.photo)
    ).catch(
      err => { console.log("error occured", err) }
    )
  }
  const handel_birds=e=>{
    e.preventDefault();
    const search="birds"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      responce => setdata(responce.data.photos.photo)
    ).catch(
      err => { console.log("error occured", err) }
    )
  }

  return (

    <div  style={{padding:"0%",margin:"0%"}}>
      
      <center >
       
        <div style={{backgroundColor:'blue',height:"200px"}}><br/><br/>
        <div style={{color:'white',fontSize:"30px"}}>SNAP SHOT</div><br/><br/>
        <form onSubmit={submitHandler} >
          <label style={{color:'white',fontSize:"20px"}}>search:</label>
          <input size="30" type="text" onChange={changeHandler} value={search} /><br /><br />
          <input type="submit" name="Search" />
        </form>
        <div>
        <button style={{borderRadius:"5px" ,height:"24px",width:"100px"}} onClick={handel_mount}>MOUNTAIN</button>
        <button style={{borderRadius:"5px",height:"24px",width:"100px"}} onClick={handel_beachs}>BEACHES </button>
        <button style={{borderRadius:"5px",height:"24px",width:"100px"}} onClick={handel_food}>FOOD </button>
        <button style={{borderRadius:"5px",height:"24px",width:"100px"}} onClick={handel_birds}>BIRDS </button> 
        </div >
        <br/>
        </div>
       </center>
       <div >
          
         {data.length >= 1 ? <Gall data={data} /> : <h4 style={{color:'blue',fontSize:"30px"}}>No Image Loaded</h4>}
        
        </div>
    
    </div>
    
  );
}

export default App;
