import GoogleMapReact from 'google-map-react'
import LocationMarker from '../LocationMarker'
import {useState} from 'react'
import LocationInfoBox from './LocationInfoBox'

function Map({eventData,center,zoom}) {
const[locationInfo,setLocationInfo]=useState(null)



  const markers=eventData.map(ev=>{
      if(ev.categories[0].id===10){
return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
onClick={()=>setLocationInfo({id:ev.id,title:ev.title})} key={ev.id}/>
      }
      return null
  })  
    return (
        <div className="map">
           
           <GoogleMapReact bootstrapURLKeys={{key:"AIzaSyD64Q3R2gilQ22JCu3MXIJ-7FUJmZhOO7o"}}
           defaultCenter={center}
           defaultZoom={zoom}>
           {markers} 
           </GoogleMapReact> 
           {locationInfo &&<LocationInfoBox info={locationInfo}/>}
        </div>
    )
}
Map.defaultProps ={
    center:{
        lat:50.0755,
        lng:14.4378
    },
    zoom:6
}

export default Map
