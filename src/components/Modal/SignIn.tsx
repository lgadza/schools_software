import React, { Dispatch, useEffect, useState } from 'react';
import { Modal, Button, Form, Container, Col, Spinner } from 'react-bootstrap';
import { UserLogin, getUserData } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AlertBox from '../Alerts';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import md_logo_small from "../../assets/md_logo_small4.png"
import { CompanyName } from "../../assets/data/company";

interface SignInModalProps {
  onClose: () => void;
  show: boolean;
 
}
export interface LoginCredentialsInterface {
    email: string,
    password: string
  }

const SignInModal: React.FC<SignInModalProps> = ({ onClose, show }) => {

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
    <Modal show={show} onHide={onClose} centered >
      <Modal.Header closeButton>
        {/* <Modal.Title>Sign I n</Modal.Title> */}
        <div>
                <img
                    src={md_logo_small}
                    alt={CompanyName}
                    className="img_component d-flex"
                    style={{width:"150px",objectFit:"contain"}}
                />
                </div>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between align-items-center'>

      <Container>
      {isError && sign_in && (
      <div className='register-alert'>
        <AlertBox type="danger" message='The email/password entered is incorrect'/>
      </div>
      )}
      <Row className='d-flex justify-content-center pt-4  align-item-center' >
        <Col className=' content_bg ' style={{ opacity:"0.8"}}>
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
                <span className='header'>Set a new password</span>
              </Link>
            </div>

            <div className='my-3'>
              <Button variant="primary" type="submit" disabled={!isFormValid()} className={`main_bg w-100 mt-3 d-flex align-items-center justify-content-center ${isFormValid()?"content_bg-2":"bg-secondary"}`} onClick={handleLogin}>
                {isLoading && sign_in&& (
                <Spinner className='spinner-border-sm me-2'/>
                )}
                Sign in
              </Button>
              <Link to="/register" className=' d-flex justify-content-end align-items-center my-3 text-dark'>Don't have an account yet? <span className='px-3 py-2 header'>Register</span></Link>
            </div>
          </Form>

        </Col>
      </Row>
    </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{onClose()}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
