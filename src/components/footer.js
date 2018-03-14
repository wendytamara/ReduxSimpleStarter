import React from 'react';

const hobies= ['bailar', 'escuchar musica', 'jugar'];

     class Music extends Component {
    render(){
     
      const hobiesMy = this.props.hobies.map((hob,index)=>{
          return <li key={index}>{hob}</li>
      })
        
        return (
            <div className="music-card"> 
             
               <div className="music-card-content">   
                   <h3 className = "music-title-artist">{hob}</h3> 
                   <ul>{hobiesMy}</ul>                 
               </div>
           </div>
        )
    }
   }



export default Friends

