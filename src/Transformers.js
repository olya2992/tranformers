import { useState } from 'react';
import { data } from './data';
function Transformers() {
    
    const [bot, setBot] = useState(data)
    
    const removeItem =(id) => {
      let newBots = bot.filter(bot => bot.id !== id)
      setBot(newBots)
    }
    
      return(
        <div >
    
    <div className='heading below'>
           <h2>{bot.length} FAVORITE TRANSFORMERS</h2>
           </div>
     
    {bot.map((element =>{
      const {name, image,about, id} = element;
      return(<div>
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
    

export default Transformers;