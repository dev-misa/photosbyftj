import React from 'react'

function Footer() {
    const year = new Date().getFullYear(); 
  return (
    
    <div className="Footer">
      
      <div className="HRLine"></div>
       <div className="Footer-Logo">
         
         <div className="copy-tm">&copy;</div>
         <div className="year"><span>{year}</span></div>
         <div className="FelixJosh-Logo">
           <p>Felix Josh</p>
         </div>
         <div className="misa-credits">
           <p>Photography. &nbsp; Made by Misa with tons of coffee breaks.</p>
         </div>
       </div>
    </div>
  )
}

export default Footer

