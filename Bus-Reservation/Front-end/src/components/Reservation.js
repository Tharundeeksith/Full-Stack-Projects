import React, { useState } from 'react';
import axios from 'axios';
import "./Reservation.css";
import { useNavigate } from 'react-router';

function Reservation() {
    const url="http://localhost:8080/bus"
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    id:'',
    name:'',
    age: '',
    travelsname:'',
    date:'',
    boardingpoint: '',
    endingpoint: ''

  });

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: value
    // }));
    const newformdata={...formData}
    newformdata[event.target.id]=event.target.value
    setFormData(newformdata)
    console.log(newformdata)
  };

  const handleSubmit = (event) => {
    const obj ={
        id:formData.id,
        name:formData.name,
        age:formData.age,
        travelsname:formData.travelsname,
        date:formData.date,
        boardingpoint:formData.boardingpoint,
        endingpoint:formData.endingpoint
    }
    event.preventDefault();
    axios.post(url,obj)
    .then(res=>{
        console.log(obj)
        alert('Success 😊');
        navigate('/')
        
    })
    // console.log(formData); 
  };

  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
        <center><h1>Bus Reservation 🚍</h1></center>
      
      <label>
        Name:
        <input type="text" id="name" value={formData.name} onChange={(event)=>handleInputChange(event)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" id="age" value={formData.age} onChange={(event)=>handleInputChange(event)} />
      </label>
      <br />
      <label>
        Travelsname:
        {/* <input type="text" name="travelsname" value={formData.travelsname} onChange={handleInputChange}/> */}
        <select name="travelsname" id="travelsname" onChange={(event)=>handleInputChange(event)}>
  <option onChange={handleInputChange} value="Essaar Travels">Essaar Travels</option>
  <option onChange={handleInputChange} value="Supaa Travels">Supaa Travels</option>
  <option onChange={handleInputChange} value="Sri Kumaran Travels">Sri Kumaran Travels</option>
  <option onChange={handleInputChange} value="A1 Travels">A1 Travels</option>
  <option onChange={handleInputChange} value="Amarnath Travels">Amarnath Travels</option>
  <option onChange={handleInputChange} value="Air Indiaa Travels">Air Indiaa Travels</option>
  <option onChange={handleInputChange} value="Krish Travels">Krish Travels</option>
  <option onChange={handleInputChange} value="Sps Travels">Sps Travels</option>
</select>
      </label>
      <br />
      <label>
        Date:
        <input type="date" id="date" value={formData.date} onChange={(event)=>handleInputChange(event)} />
      </label>
      <br />
      <label>
        Boarding Point:
        <input type="text" id="boardingpoint" value={formData.boardingPoint} onChange={(event)=>handleInputChange(event)} />
      </label>
      <br />
      <label>
        Ending Point:
        <input type="text" id="endingpoint" value={formData.endingPoint} onChange={(event)=>handleInputChange(event)} />
      </label>
      <br />
      <button type="submit"  >Submit</button>
    </form>
  );
}

export default Reservation;
