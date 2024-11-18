import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigating() {

    const navigate = useNavigate();
    const NavigateToAbout = () => {
        navigate('/about')
    }

    const Navigateto = (url) => {
     navigate(url)
        
    }
   
      const NavigateToWhere = () => {

    let Name = "Jack"

    if(Name == "jack")
    {
      navigate('/about')
    }
    else
    {
      navigate('/contact')
    }

  }
  return (
    <div>
          {/* Navigating On Button Click */}
    {/* <button onClick={() => navigate('/about')}>About</button>
    <button onClick={() => navigate('/')}>Home</button> */}


       {/* Navigate inside Event Handeler  */}
    {/* <button onClick={() => NavigateToAbout()}>About</button> */}


    {/* Navigating To Multiple Peges with Single Event Handler */}
{/* 
      <button onClick={() => Navigateto('/contact')}>Contact</button>
      <button onClick={() => Navigateto('/about')}>About</button> */}


       {/* Condition Based Navigation  */}
       <button onClick={() => NavigateToWhere()}>Click Me</button>
   
   
            {/* Go Back Button , we can use this with the perticular component */}
          <button onClick={() => navigate(-1)}>Go Back</button>  
   
    </div>
  )
}

export default Navigating
