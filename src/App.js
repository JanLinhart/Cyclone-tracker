import Map from './components/Map'
import './App.css';
import {useState,useEffect} from 'react';
import Loader from './Loader';
import Header from './Header';
function App() {
 const[eventData,setEventData]=useState([]); 
 const[loading,setLoading]=useState(false);


 useEffect(()=>{
   const fetchEvents=async()=>{
     setLoading(true)
     const res=await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
     const{events}=await res.json()
     setEventData(events)
     setLoading(false)
     console.log(eventData)
     
   };
   
   fetchEvents();
   
 }, []);
  
  return (
    <div className="App">
   <Header/>
   {!loading? <Map eventData={eventData}/>:<Loader/>}
    </div>
  );
}

export default App