import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./UserComponent.css";

export default function UserComponent() {
    const navigate=useNavigate();
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/bus")
        .then((response)=>{
            setData(response.data);
            console.log(response.data)
        })
    }, []);
  return (
    // <h1>Hello</h1>
    <>
    <h1><span>R</span>eservation Details 📊</h1>
    <div className='add'>
    <button className='add' onClick={()=>{
        navigate('/add')
    }}>Add Details</button></div>
    <table id='user'>
        <thead>
            <tr>
                <th>Name </th>
                <th>Travels</th>
                <th>Action</th>
            </tr>
        </thead><br></br>
        <tbody>
            {
                data.map(
                    e=>
                    <tr key={e.id}>
                        <td>{e.name}    </td>
                        <td>{e.travelsname}  </td>
                        <button id='one' onClick={()=>navigate('/view',{state:{id:e.id}})}>View</button>
                        <button id='two' onClick={()=>navigate('/edit',{state:{id:e.id}})}>Edit</button>
                        <button id='three' onClick={()=>navigate('/delete',{state:{id:e.id}})}>Delete</button>
                        <br></br>
                    </tr>
                )
            }
        </tbody>
    </table>
    </>
  )
}