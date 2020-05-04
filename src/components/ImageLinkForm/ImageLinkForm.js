import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
 return (
  <div>
   <p className='f1 black'>
    {'This magic brain will detect faces in your pictures! Git it a try!'}
   </p>
   <p className='f1 black'>
    {'Take an image URL (.jpg, .jpeg, .png) from the web, and put it into the form!'}
   </p>
   <p className='f1 black'>
    {'Press detect and discover the magic!'}
   </p>
   <div className='center'> 
    <div className='form center pa4 br3 shadow-5'>
     <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
     <button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'
     onClick={onButtonSubmit}
     >Detect</button>
    </div>
   </div>
  </div>
 )
}

export default ImageLinkForm;