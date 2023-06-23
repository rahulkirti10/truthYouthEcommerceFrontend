import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='SLForm'>
          
    <div className='One'>
      <img src='../Images/logo.svg' height="50%" width="90%" />
    </div>

    <div className='Two'>
      <label>Login to your account</label>
      <input className='Input' type="text" placeholder='Enter Mobile Number'/>
      <div className='Text'>
      <input className='Code' type="text" value="+91" readOnly/>
      <input className='Input' type="text" placeholder='Enter Mobile Number'/>        
      </div>    
    </div>
    
    <div className='Three'>

    <label className='TC'>By continuing, you agree to our <Link className='New2'>Terms of use</Link> and <Link className='New2'>Privacy Policy</Link></label>
    <Link className='Btn'>Request OTP</Link>
      
    </div>

</div>
  )
}

export default SignUp