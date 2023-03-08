import React,{useState,useEffect} from 'react';
// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
// import"./EditComponent.css";
export default function EditComponent() {
  const navigate=useNavigate();

  const[id,setId]=useState();
  const[name,setName]=useState();
  const[age,setAge]=useState();
  const[travelsname,setTravelsName]=useState();
  const[date,setDate]=useState();
  const[boardingpoint,setBoardingPoint]=useState();
  const[endingpoint,setEndingPoint]=useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/bus/${location.state.id}`)
    .then((res)=>{
        console.log(res.data)
        setId(res.data.id);
        setName(res.data.name);
        setAge(res.data.age);
        setTravelsName(res.data.travelsname);
        setDate(res.data.date);
        setBoardingPoint(res.data.boardingpoint);
        setEndingPoint(res.data.endingpoint);
    })
  }, []);

  async function validateUser(e){
    e.preventDefault();
    await axios.post("http://localhost:8080/bus",{
        id:id,
        name:name,
        age:age,
        travelsname:travelsname,
        date:date,
        boardingpoint:boardingpoint,
        endingpoint:endingpoint,
    })
    .then(r=>{
        alert("Success 😊");
    setId();
    setName();
    setAge();
    setTravelsName();
    setDate();
    setBoardingPoint();
    setEndingPoint();
    navigate("/")
    })
  }
  console.log(name)
  const location=useLocation();
    return (
        <>{ 
        name &&
            <>
            <form id='edit'>
                <h1><span>E</span>DIT DETAILS 🧑🏻‍💻</h1>
                   
                        <label>ID
                        <input type="text" 
                        className="form-control" 
                        placeholder="id" 
                        value={id}
                            onChange={(e)=>setId(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>NAME
                        <input type="text" 
                        className="form-control" 
                        placeholder="name"
                        value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                            </label>
                    <br></br>

                    
                        <label>AGE
                        <input type="text" 
                        className="form-control" 
                        placeholder="age" 
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}/>
                        </label>
                    <br></br>

                    
                        <label>TRAVELS NAME
                        <input
                            type="text"
                            className="form-control"
                            placeholder="travelsname"
                            value={travelsname}
                            onChange={(e)=>setTravelsName(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>DATE
                        <input
                            type="text"
                            className="form-control"
                            placeholder="date"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}/>
                            </label>
                    <br></br>

                    
                        <label>BOARDING POINT
                        <input
                            type="text"
                            className="form-control"
                            placeholder="boardingpoint"
                            value={boardingpoint}
                            onChange={(e)=>setBoardingPoint(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>ENDING POINT
                        <input
                            type="text"
                            className="form-control"
                            placeholder="endingpoint"
                            value={endingpoint}
                            onChange={(e)=>setEndingPoint(e.target.value)}/>
                            </label>
                    <br></br>
                    <button type="submit" onClick={validateUser}>Submit</button>
            </form>
            </>
        }
        </>
    
  )
}