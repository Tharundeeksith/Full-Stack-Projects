import React from 'react'
import {useState,useEffect} from 'react';
// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./ViewComponent.css";

export default function ViewComponent() {
    const location=useLocation();
    const[value,setValue]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/bus/${location.state.id}`)
        .then((res)=>{
        setValue(res.data);
        console.log(value)}

        )
    },[])
  return (
    <>{
        value&&<>
        <h1 id='details'>DETAILS ID-<span>{value.id}</span></h1>
        {/* <h3>ID     : {value.id}</h3> */}
        <h3>NAME   : {value.name}</h3>
        <h3>AGE  : {value.age}</h3>
        <h3>TRAVELS NAME : {value.travelsname}</h3>
        <h3>DATE : {value.date}</h3>
        <h3>BOARDING POINT : {value.boardingpoint}</h3>
        <h3>ENDING POINT  : {value.endingpoint}</h3>
        </>
    }
    </>
  )
}
