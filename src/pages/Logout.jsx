import React from 'react'

function Logout() {
  
   if (localStorage.getItem('token')) {
    
       localStorage.removeItem('token');
   
   }
}

export default Logout
