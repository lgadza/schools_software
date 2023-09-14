import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner} from 'react-bootstrap';
import m_logo from "../assets/md_logo_small.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin, getUserData} from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
import { CompanyName } from '../assets/data/company';
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
      navigate(`/ask.makronexus.com/${userData.id}`);
    }
  }, [userData, navigate]);

  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>

      {isError && sign_in && (
      <div className='register-alert'>
        <AlertBox type="danger" message='The email/password entered is incorrect'/>
      </div>
      )}
      <Row className='d-flex justify-content-center align-item-center'>
        <Col className='login_container content_bg col-sm-10 col-md-6 col-xl-4' >
          <div className="imageContainer mb-3">
            <img
              src={m_logo}
              alt={CompanyName}
              style={{ width: "100px", height: "120px" }}
              className="img_component"
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
                Set a new password
              </Link>
            </div>

            <div className='my-3'>
              <Button variant="primary" type="submit" disabled={!isFormValid()} className={`main_bg w-100 mt-3 d-flex align-items-center justify-content-center ${isFormValid()?"content_bg-2":""}`} onClick={handleLogin}>
                {isLoading && sign_in&& (
                <Spinner className='spinner-border-sm me-2'/>
                )}
                Sign in
              </Button>
              <Link to="/register" className=' d-flex justify-content-end align-items-center my-3'>Don't have an account yet? <span className='px-3 py-2 header'>Register</span></Link>
            </div>
          </Form>

        </Col>
      </Row>
    </Container>
  );
}

export default Login;
