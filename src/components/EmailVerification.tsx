import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/favicon.png"
import { useSelector, useDispatch } from 'react-redux';
import { emailVerification } from '../redux/actions'; 
import * as Icon from 'react-bootstrap-icons';
import { Dispatch } from 'redux';
import { RootState } from '../redux/store';


const EmailVerification: React.FC = () => {
  const params = useParams<{ user_id: string,user_name:string }>();

  const isLoading = useSelector((state: any) => state.emailVerification.isLoading);
  const isError = useSelector((state: any) => state.emailVerification.isError);
  const emailVerificationResponse = useSelector((state:RootState ) => state.verifyEmail.data);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const dispatch:Dispatch<any> = useDispatch();

  console.log(emailVerificationResponse, 'ME');
  

  const handleVerification = async () => {
    setSignUp(true);
   
    const user_id = params.user_id || ''; 
   
    await dispatch(emailVerification(user_id)); 
    setResponse(true);
  };
  const navigate=useNavigate()
  
  return (
    <Container style={{height:"100vh"}} >
      <Row style={{height:"100%"}} className="d-flex justify-content-center align-items-center pt-5 textColor">
        <Col lg={6}  className="content_bg">
          <Row>
            <Col>
              <div className=" ml-3 mt-3  d-flex justify-content-between align-items-center">
                <h4>Verify email</h4>
                <Link to={'/'}>
                  <Icon.XLg className="textColor" size={20} />
                </Link>{' '}
              </div>

              {isLoading && signUp && (
                <div className="  d-flex justify-content-center">
                  <Spinner  className='spinner-border-sm me-2' />
                </div>
              )}
              {isError && (
                <Alert variant="danger" className="mt-5">
                  <Alert.Heading>!You got an error!</Alert.Heading>
                  <small>Something went wrong on our side, we are working on it, we apologies for the inconvenience caused</small>
                </Alert>
              )}
              {response && !isError && <Alert variant="primary">{emailVerificationResponse.data.message}</Alert>}
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="d-flex mb-4">
                <Col>
                  <Form.Text>
                    <strong className='text-white'>Hey {params.user_name}! Please verify your email.</strong>
                  </Form.Text>
                  <div>
                    {response && !isError?(
                  <Button variant="primary" onClick={()=>{navigate("/")}} className="w-50 my-5 content_bg-2">
                    Explore more
                  </Button>
                    ):(
                  <Button onClick={handleVerification} variant="primary" className="w-50 my-5 content_bg-2">
                    Verify email
                  </Button>
                    )}
                  </div>
                  <Link className="mr-auto" to={'/'}>
                            <img
                    src={logo} 
                        alt={""}
                        style={{ width: `${30}px`, height: `${30}px`,  }}
                        className="img_component"
                    />              
                </Link>
                  <Form.Text className="text-secondary ms-2"><small>@{new Date().getFullYear()} Makronexus. All rights reserved</small></Form.Text>
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
