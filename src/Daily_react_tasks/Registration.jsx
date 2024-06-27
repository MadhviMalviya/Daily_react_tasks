import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';

const Registration = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [showError, setShowError] = useState('');
  const [password, setPassword] = useState('');
  const [formName, setFormName] = useState('Registration Form');
  const [buttonName, setButtonName] = useState('Registration');
  const phoneNoExpression = /^[0-9]{10}$/;

  const location = useLocation();
  console.log(location.pathname);

  const firstnameHandler = (event) => {
    setFirstname(event.target.value);
  }
  const lastnameHandler = (event) => {
    setLastname(event.target.value);
  }
  const emailHandler = (event) => {
    setEmail(event.target.value);
  }
  const phonenoHandler = (event) => {
    setPhoneno(event.target.value);
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (location.pathname === '/login') {
      setFormName('Login Form');
      setButtonName('Login');
    }
  }, [location.pathname]);

  const submitHandler = () => {
    setShowError('');
    if (firstname === "") {
      setShowError("Please enter your first name");
    } else if (lastname === "") {
      setShowError("Please enter your last name");
    } else if (email === "") {
      setShowError("Please enter your email");
    } else if (phoneno === "") {
      setShowError("Please enter your phone number");
    } else if (!phoneno.match(phoneNoExpression)) {
      setShowError("Please enter a valid ten-digit phone number");
    } else if (password.length < 5) {
      setShowError("Please enter a valid password");
    } else {
      console.log(firstname, lastname, email, phoneno, password);
    }
  }

  return (
    <>
      <div id="form-main-container">
        <div id="form-container">
          <div className="header-form">{formName}</div>
          <div>{showError}</div>
          <form className="form">
            {buttonName !== 'Login' &&
              <>
                <div className="input-box">
                  <label htmlFor="firstname">First name </label>
                  <input type="text" placeholder="First name" value={firstname} onChange={firstnameHandler} />
                </div>
                <div className="input-box">
                  <label htmlFor="lastname">Last name </label>
                  <input type="text" placeholder="Last name" value={lastname} onChange={lastnameHandler} />
                </div>
                <div className="input-box">
                  <label htmlFor="phoneno">Phone no </label>
                  <input type="text" placeholder="Phone No" value={phoneno} onChange={phonenoHandler} />
                </div>
              </>
            }
            <div className="input-box">
              <label htmlFor="email">Email </label>
              <input type="text" placeholder="Email" value={email} onChange={emailHandler} />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password </label>
              <input type="password" placeholder="Password" value={password} onChange={passwordHandler} />
            </div>
            <button type="button" onClick={submitHandler}>{buttonName}</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Registration;
