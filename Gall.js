import React from 'react'

export default function 
Gall({data}) {
  return (
    <div>
    <div >
        {data.map((image) =>
        <div key={image.id}>
        <div >
        <img  style={{margin:'4px', padding:"4px",borderRadius:"8px" }}src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="300" width="300" alt={image.title}/>
        </div>
        </div>)}
        </div>
        </div>
        
  )
}
