
import './App.css';
import Slide from './Slide';
import Transformers from './Transformers';

function App() {
  return(
<<<<<<< HEAD
<div>
  <Slide/>
  <Transformers/>
=======
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
  const {name, image, id, about} = element;
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
>>>>>>> 1e2a846136183f1ca5addcfde81149d7f4efc561
</div>
  )
}

export default App;
