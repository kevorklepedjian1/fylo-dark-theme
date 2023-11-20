import React from 'react';
import logo from '../images/logo.svg'



function Header() {
  return (
  
   <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
   <div>
     
       <img src={logo} alt="" className="w-24 lg:w-auto" />
    
   </div>

   <nav>
     <ul className="flex items-center justify-center gap-8">
       <li>
         <button className="text-white text-sm list-item">Features</button>
       </li>
       <li><button className="text-white text-sm list-item">Team</button></li>
       <li><button className="text-white text-sm list-item">Sign In</button></li>
     </ul>
   </nav>
 </header>
  )
}

export default Header