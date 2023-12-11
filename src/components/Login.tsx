import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner} from 'react-bootstrap';
// import m_logo from "../assets/md_logo_small.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin, getUserData} from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
import backgroundImage from "../assets/background-image.png"
import md_logo_small from "../assets/md_logo_small4.png"
import { CompanyName } from "../assets/data/company";
import AlertBox from './Alerts';
export interface LoginCredentialsInterface {
  email: string,
  password: string
}

const Login = (): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const [sign_in, setSign_in] = useState(false);
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken)
  const isLoading = useSelector((state: RootState) => state.accessToken.isLoading)
  const isError = useSelector((state: RootState) => state.accessToken.isError)
  console.log(isError,"LOGIN ISERROR")
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
console.log(accessToken,"CRED")
  const isFormValid = (): boolean => {
    return (
      loginCredentials.email.trim() !== "" &&
      loginCredentials.password.trim() !== ""
    )
  }

  const handleLogin = () => {
    dispatch(UserLogin(loginCredentials));
    setSign_in(true)
  };
  
  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData(accessToken.accessToken));
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (userData && accessToken) {
      // navigate(`/account/${userData.id}`);
      navigate(`/ask/${userData.id}`);
    }
  }, [userData, navigate]);

  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container fluid style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      width: '100vw', 
      height: '100vh',
      position: 'relative', 
    }} >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
        zIndex: 1, // Ensure it's above the background image but below the content
      }}></div>
      {isError && sign_in && (
      <div className='register-alert'>
        <AlertBox type="danger" message='The email/password entered is incorrect'/>
      </div>
      )}
      <Row className='d-flex justify-content-center  align-item-center'  >
        <Col className='login_container content_bg pt-4 col-sm-10 col-md-6 col-xl-4' style={{zIndex:2, opacity:"0.8"}} >
        <div className="mb-4">
                <img
                    src={md_logo_small}
                    alt={CompanyName}
                    className="img_component d-flex"
                    style={{width:"150px",objectFit:"contain"}}
                />
                </div>

          <Form onSubmit={handleSubmit} className='px-2'>
            <Form.Group>
              <Form.Control type="email" name='email' value={loginCredentials.email} onChange={handleChange} placeholder="Enter email" className="mb-3" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" name='password' value={loginCredentials.password} onChange={handleChange} placeholder="Password" className="mb-3" />
            </Form.Group>

            <div className='d-flex justify-content-between align-items-center'>
              <Form.Check label="Remember me" />
              <Link to="">
                <span className='header textMediumSize'>Set a new password</span>
              </Link>
            </div>

            <div className='my-3'>
              <Button variant="primary" type="submit" disabled={!isFormValid()} className={`main_bg w-100 textMediumSize mt-3 d-flex align-items-center justify-content-center ${isFormValid()?"content_bg-2":""}`} onClick={handleLogin}>
                {isLoading && sign_in&& (
                <Spinner className='spinner-border-sm me-2'/>
                )}
                Sign in
              </Button>
              <Link to="/register" className=' d-flex justify-content-end align-items-center my-3 textMediumSize'>Don't have an account yet? <span className='px-3 py-2 header textMediumSize'>Register</span></Link>
            </div>
          </Form>

        </Col>
      </Row>
    </Container>
  );
}

export default Login;
