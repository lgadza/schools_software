import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/md_logo_small4.png"
import { useSelector, useDispatch } from 'react-redux';
import { emailVerification } from '../redux/actions'; 
import * as Icon from 'react-bootstrap-icons';
import { Dispatch } from 'redux';
import { RootState } from '../redux/store';


const EmailVerification: React.FC = () => {
  const params = useParams<{ user_id: string,user_name:string }>();
  const isLoading = useSelector((state: RootState) => state.verifyEmail.isLoading);
  const isError = useSelector((state: RootState) => state.verifyEmail.isError);
  const emailVerificationResponse = useSelector((state:RootState ) => state.verifyEmail.data);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const dispatch:Dispatch<any> = useDispatch();

 
  

  const handleVerification = async () => {
    try {
      setSignUp(true);
  
      const user_id = params.user_id || '';
      await dispatch(emailVerification(user_id));
      setResponse(true);
    } catch (error) {
      console.error('Error during email verification:', error);
    }
  };
  
  const navigate=useNavigate()
  
  return (
    <Container style={{height:"100vh"}} >
      
      <Row style={{height:"100%"}} className="d-flex justify-content-center align-items-center pt-5 textColor">
        
        <Col lg={6}  className="content_bg">
        <Link className="d-flex mt-4" to={'/'}>
                            <img
                    src={logo} 
                        alt={""}
                        style={{ width: `${100}px`,  }}
                        className="img_component"
                    />              
                </Link>
          <Row>
            <Col>
              <div className=" ml-3 mt-3  d-flex justify-content-between align-items-center">
                <strong className='text-dark textMediumSize'>Verify email</strong>
                <Link to={'/'}>
                  <Icon.XLg className="text-dark" size={20} />
                </Link>{' '}
              </div>
              <hr />

              {isLoading && signUp && (
                  <div className="  d-flex justify-content-center">
                    <Spinner className='spinner-border-sm me-2' />
                  </div>
                )}
                {isError && (
                  <Alert variant="danger" className="mt-5">
                    <Alert.Heading>!You got an error!</Alert.Heading>
                    <small className='textSmallSize'>Something went wrong on our side, we are working on it, we apologize for the inconvenience caused</small>
                  </Alert>
                )}
                {response && emailVerificationResponse && !isError && (
                  <Alert variant="primary">{emailVerificationResponse.message}</Alert>
              )}

            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="d-flex mb-4">
                <Col>
                  <div>
                    {response && !isError?(

                  <Button variant="primary" onClick={()=>{navigate("/")}} className="w-50 my-5 content_bg-2 text-dark textSmallSize">
                    Explore more
                  </Button>
                       
                    ):(
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                       
                  <Form.Text>
                    <small className=' textMediumSize text-dark'>Hey {params.user_name}! Please verify your email.</small>
                  </Form.Text>
                  <Button onClick={handleVerification} variant="primary" className="w-50 my-5 content_bg-2 textSmallSize">
                    Verify email
                  </Button>
                  </div> 
                    )}
                  </div>
                  <div className='d-flex align-items-center justify-content-center'>
                  <Form.Text className="text-secondary me-2 textSmallSize"><small>@{new Date().getFullYear()} </small></Form.Text>
                  <Link className="mr-auto" to={'/'}>
                            <img
                    src={logo} 
                        alt={""}
                        style={{ width: `${70}px`,  }}
                        className="img_component"
                    />              
                </Link>
                  <Form.Text className="text-secondary ms-2 textSmallSize"><small> All rights reserved</small></Form.Text>
                  </div>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailVerification;
