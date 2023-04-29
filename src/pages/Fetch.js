import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";




function Fetch(props) {
const [endPoint, setEndPoint]=useState('')
const [container, SetContainer] = useState([])
const [finalpoint, setFinalpoint]= useState('')


useEffect(() =>{
   fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=+${endPoint}`, {
   "method": 'GET',
    "headers": {
    
    }
  })

.then(response => {
 return response.json()
})

.then(data => {
  console.log(data)
  if (data.error) return null;
  SetContainer(data.data)
})

.catch(err => {
  console.error(err)
})
}, [finalpoint])



   return (
    <div className="Fetch">

    </div>
  );
}

export default Fetch;