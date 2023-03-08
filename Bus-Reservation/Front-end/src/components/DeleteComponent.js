import React from 'react'
// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserComponent from './UserComponent';
import { useEffect } from 'react';

export default function DeleteComponent() {
    const navigate=useNavigate();
    const location=useLocation();
    const key=location.state.id;
    useEffect(()=>{
        axios.delete(`http://localhost:8080/bus/${key}`)
        navigate('/')
    },[])
    console.log(key)
    return (
    <>
    {<UserComponent/>}
    </>
  )
}
