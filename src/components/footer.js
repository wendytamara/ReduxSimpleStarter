import React from 'react';

const friends= ['bailar', 'escuchar musica', 'jugar'];

     class Music extends Component {
    render(){
     
      const musicArtis = this.props.friends.map((cancion,index)=>{
          return <li key={index}>{cancion}</li>
      })
        
        return (
            <div className="music-card"> 
             
               <div className="music-card-content">   
                   <h3 className = "music-title-artist">{artista}</h3> 
                   <ul>{musicArtis}</ul>                 
               </div>
           </div>
        )
    }
   }



export default Friends

