import { useState } from 'react';
import { data } from './data';

function Slide() {
    const [robot, setRobot] = useState(0);
    const {id, name, description, image, about}=data[robot]
  
    const previousRobot = () => {
    setRobot((robot =>{
      robot --; 
      if(robot<0){
        return data.length - 1;
      }
      return robot;
    }))
    }
     const nextRobot = () => {
    setRobot((robot =>{
      robot ++;
      if(robot > data.length -1){
        robot = 0;
    
      }
      return robot;
    }))
     }
    
      return(
        <div key={id}  >
        <div className='heading'>
           <h1>TRANSFORMERS CHARACTERS</h1>
             </div>
    
             <div className='heading'>
           <h3>Learn about the Transformers robots</h3>
           </div>
    
           <div className='container'>
          <img src={image} width='300px' alt='robot' />
           </div>
    
           <div className='container'>
            <h2>{name}</h2>
           </div>
           <div className='container'>
            <h3 className='type'>{description}</h3>
           </div>
       
       <div className='btn'>
        <button className='array' onClick={previousRobot} > ← </button>
        <button className='array' onClick={nextRobot} > →</button>
    </div>
    
           </div>
      )
    }
    
    export default Slide;