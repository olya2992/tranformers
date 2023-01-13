import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
const [robot, setRobot] = useState(0);
const {id, name, description, image, about}=data[robot]
const [bot, setBot] = useState(data)

const removeItem =(id) => {
  let newBots = bot.filter(bot => bot.id !== id)
  setBot(newBots)
}

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
    <div>
    <div className='heading'>
       <h1>TRANSFORMERS CHARACTERS</h1>
         </div>

         <div className='heading'>
       <h3>Learn about the Transformers robots</h3>
       </div>

       <div className='container'>
      <img src={image} width='400px' alt='robot' />
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

<div className='heading below'>
       <h2>{bot.length} FAVORITE TRANSFORMERS</h2>
       </div>
 
{bot.map((element =>{
  const {name, image} = element;
  return(<div  >
      <div className='bots'>
        <h3>{name}</h3>
      </div>
      <div className='bots'>
        <h4>{about}</h4>
      </div>
      


      <div className='bots'>
        <img  src={image} alt= 'bots' width='200px'/>
      </div>

      <div className='bots'>
       <button onClick={()=>removeItem(id)}>DELETE</button>
      </div>

    </div>
  )
}))}

<div className='container'>
<button className='delete' onClick={()=>setBot([])} >DELETE All</button>
</div>
       </div>
  )
}

export default App;