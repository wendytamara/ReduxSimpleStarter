import React from 'react';

   const hobies= ['bailar', 'escuchar musica', 'jugar'];

   const Friends = () =>  {
    const myHobies = hobies.map((el, index) => <a key={index}> {el} </a>)
        return (
            <div >
               <ul>{myHobies}</ul>
           </div>
      )
 }



export default Friends
