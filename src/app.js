import React, { useState, useEffect } from "react";
import NavBar from './layouts/navbar'
import './assets/app.scss'

const App = () =>{
const[filLabel, setFilLabel] = useState();
const[navOp, setOp] = useState();

useEffect(() =>{
  const fetchData = async() => {
   const APIPath = process.env.NOT_SECRET_PATH
    try {
     const inSearch = await fetch(`${APIPath}/fleet/requests`, {            
     method: 'GET',
        /* headers: { 'Authorization': tokenStorage } when API require Auth for request*/ 
     })

     const res = await inSearch.json();

     if(inSearch.status == 200){
     setFilLabel([ {labels: res.labels, values: Object.keys(Object.values(res.AllInfo)[0])} ])

     }else{
      console.log({ error: inSearch.status, message: inSearch.statusText })
     /* window.location.href = "http://localhost:8070/Login", 
        no authentication because this is a simple application*/
     }
    } catch (error) {
        console.log({ error: error.status, message: 'Error to fetch.' })
      /* window.location.href = "http://localhost:8070/Login", 
        no authentication because this is a simple application*/
    }
  }
  fetchData();

}, [])

return(
    <div className="main-container">
        <NavBar navOp={[
          { name: 'first li', link: '#' },
          { name: 'second li', link: '#' },
          { name: 'third li', link: '#' },
          { name: 'four li', link: '#' }
        ]} />
    </div>
)
}

export default App;

