import React from 'react';

 class Friends extends Component {
    render(){
      const hobies= ['bailar', 'escuchar musica', 'jugar'];
      const hobiesMy = this.props.hobies.map((hob,index)=>{
          return <li key={index}>{hob}</li>
      })
        
        return (
            <div >      
               <div >   
                   <h3 >{hob}</h3> 
                   <ul>{hobiesMy}</ul>                 
               </div>
           </div>
        )
    }
 }



export default Friends

