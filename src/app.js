import React, { useState, useEffect } from "react";
import NavBar from './layouts/navbar'
import './assets/styles/app.scss'
import TableSync from "./components/tableSync";

const App = () =>{
const[filLabel, setFilLabel] = useState([]);
const[dataMirror, setMirror] =useState([])
const[navOp, setOp] = useState([]);
const[forExample, setExample] = useState(
    {
      id: {value: '1', label: 'ID'},
      reqNum: {value: 'ABC123', label: 'Requisição'},
      reqDate: {value: '',label:'Data'},
      reqHr: {value:'', label: 'Hora'},
      veicleType:{value: '', label: 'Veiculo'},
      veiclePlate: {value: '', label:'placa'},
      drvName: {value: '', label:'Motorista'},
      destiny:{value: '', label:'Destino'}
    },
  );

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
        <TableSync allContent={forExample}/>
    </div>
)
}

export default App;

