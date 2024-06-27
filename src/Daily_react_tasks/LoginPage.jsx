
import { useState } from 'react'

import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'


function LoginPage() {

    const [firstname,getFirstname] = useState('')
    const [lastname,getLastname] = useState('')
    const [email,getEmail] = useState('')
    const [phoneno,getPhoneno] = useState('')
    const [showerror,getshowerror]= useState('');
    const [password,getpassword]= useState('');
    const [formname,getFormname]= useState('Registration Form');
    const [buttonname,getButtonname]= useState('Registration');
    const phoneNoExpression = /^[0-9]{10}$/
    
  const params = useParams();
  

  const location = useLocation();
  console.log(location)
    console.log(location.pathname);

    const firstnameHandler = (event)=>{
      getFirstname(event.target.value)
    }
    const lastnameHandler = (event)=>{
      getLastname(event.target.value)
    }
    const emailHandler = (event)=>{
      getEmail(event.target.value)
    }
    const phonenoHandler = (event)=>{
      getPhoneno(event.target.value)
    }
    const passwordHandler = (event)=>{

    }
    useEffect(()=>{
      if(location.pathname === '/login'){
        getFormname('Login form')
        getButtonname('Login')
      }
    },[])
    
    const submitHandler = ()=>{
      if(firstname === ""){
        getshowerror("Plz enter your first name")
      }else if(lastname === ""){
        getshowerror("Plz enter your Last name")
      }else if(email === ""){
        getshowerror("Plz enter your Email")
      }else if(phoneno === ""){
        getshowerror("Plz enter your Phone no")
      }else if(!phoneno.match(phoneNoExpression)){
        getshowerror("Plz enter only ten digit")
      }else{
        console.log(firstname,lastname,email,phoneno)
      }
      
    }
    return(
        <>
        <div id="form-main-container">
          <div id="form-container">
            <div class="header-form">{formname} </div>
            <div>{showerror}</div>
            <form class="form">
        {buttonname !== 'Login' && 
          <>
              <div class="input-box">
                <label for="firstname">First name </label>
                <input type="text" placeholder="First name" value={firstname} onChange={firstnameHandler}/>
              </div>
              <div class="input-box">
                <label for="lastname">Last name </label>
                <input type="text" placeholder="Last name" value={lastname} onChange={lastnameHandler}/>
              </div>
              <div class="input-box">
                  <label for="phoneno">Phone no </label>
                  <input type="text" placeholder="Phone No" value={phoneno} onChange={phonenoHandler}/>
                </div>
                </>
            }
              <div class="input-box">
                <label for="email">Email </label>
                <input type="text" placeholder="Email" value={email} onChange={emailHandler}/>
              </div>
              <div class="input-box">
                  <label for="password">Password </label>
                  <input type="text" placeholder="password" value={password} onChange={passwordHandler}/>
              </div>
              
              <input type="button" value={buttonname} onClick={submitHandler}/>
            </form>
          </div>
          </div>

        </>
    )
}
export default LoginPage