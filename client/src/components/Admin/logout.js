import React from 'react';
import axios from 'axios';

const Logout = (props) => {

  let request = axios.get(`/api/logout`)
  .then(request =>{
    setTimeout(()=>{
      props.history.push('/')
    },2000)

  })
  return (
    <div>
Sesión cerrada
    </div>
  );
};

export default Logout;