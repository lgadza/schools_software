import React, { useEffect, useState } from 'react';
import './SchoolAccountLogin.css'; 
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin, getUserData } from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
import { LoginCredentialsInterface } from './Login';
import AlertBox from './Alerts';

const SchoolAccountLogin: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken)
  const isError = useSelector((state: RootState) => state.accessToken.isError)
  const userData=useSelector((state:RootState)=>state.userData.data)

  const initialLoginCred: LoginCredentialsInterface = {
    email: "",
    password: ""
  }
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentialsInterface>(initialLoginCred)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const isFormValid = (): boolean => {
    return (
      loginCredentials.email.trim() !== "" &&
      loginCredentials.password.trim() !== ""
    )
  }
useEffect(() => {

    if (accessToken) {
      dispatch(getUserData(accessToken.accessToken));
    }
  
}, [accessToken,dispatch]);
useEffect(()=>{
  if(userData){
    navigate(`/mss/${userData.role}/account/${userData.id}`);
  }
},[userData,navigate])
  const handleLogin =  () => {
   dispatch(UserLogin(loginCredentials))
console.log(isError, "ERROR")
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
     {isError && (
            <div className='register-alert'>
              <AlertBox type='danger' message='The email/password entered is incorrect'/>
            </div>
      )}
    
    <div className="login-box main_bg d-flex flex-column justify-content-center">
     
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="email"
            required
            value={loginCredentials.email} onChange={handleChange} 
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            value={loginCredentials.password} onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <div className='d-flex'>
        <button disabled={!isFormValid()} type="submit" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SchoolAccountLogin;
