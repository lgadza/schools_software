import { Col, Row,Form, Button, Spinner } from "react-bootstrap" 
import "../styling.css"
import { ApplicantRegistration } from "../../../Types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { ApplicantRegister } from "../../../redux/actions"
// import { Dispatch } from 'redux';
import { useSelector } from "react-redux"
import { RootState } from '../../../redux/store/index.js';
import { useNavigate } from "react-router-dom"
import AlertBox from "../../../components/Alerts.js"
import { Link } from "react-router-dom"

const RegisterInfo=():JSX.Element=>{
const response=useSelector((state:RootState)=>state.applicantRegistration.data)
const isError=useSelector((state:RootState)=>state.applicantRegistration.isError)
const isLoading=useSelector((state:RootState)=>state.applicantRegistration.isLoading)
const dispatch=useDispatch()
const navigate=useNavigate()
const [alertVisible, setAlertVisible] = useState(true);
const [signUpClicked, setSignUpClicked] = useState(false);
const initialFormData: ApplicantRegistration = {
  first_name: '',
  email: '',
  last_name: '',
  role:'student',
  second_name: '',
  date_of_birth: '',
  gender: '',
  citizenship: '',
  phone_number:'' ,
  policy_acceptance: false,
  data_process_acceptance: false,
  password: '',
  country_code:'',
};
console.log(isLoading,"ISLOADING")
const [formData, setFormData] = useState<ApplicantRegistration>(initialFormData);
const  handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};
const isFormValid = (): boolean => {
  return (
    formData.first_name.trim() !== "" &&
    formData.last_name.trim() !== "" &&
    // formData.country_code.trim() !== "" &&
    // formData.phone_number.trim() !== "" &&
    // formData.citizenship.trim() !== "" &&
    formData.gender.trim() !== "" &&
    formData.email.trim() !== "" &&
    // formData.date_of_birth.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.data_process_acceptance === true
  );
};
const handleChange=(e:any)=>{ //e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
  const {name,value}=e.target ;
  setFormData((prevFormData)=>({
    ...prevFormData,
    [name]:value
  }))
  
}
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, checked } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: checked ? true : false,
  }));
  

};

const handleRegistration = async() => {
  setSignUpClicked(true)
 const success=await dispatch<any>(ApplicantRegister(formData));

if(response){
  navigate("/login")
}else{
  console.log(success)
}
const timer = setTimeout(() => {
  setAlertVisible(false);
}, 3000); 

return () => {
  clearTimeout(timer);
};
};

// const handleClose = () => setShow(false);
   return( 
    <div className="content_bg  p-3">
        {isError && alertVisible && (
      <div className="register-alert">
      <AlertBox type="danger" message={`${isError && "Error during  registration, try again later!"}`}  />
      </div>
        )}
        {response && response.message=="This email has already been registered. Please login." && alertVisible && (
      <div className="register-alert">
      <AlertBox type="danger" message={`This email has already been registered. Please login.`}  />
      </div>
        )}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
              <Form.Label className="d-flex">First name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                placeholder="First name"
                name="first_name"
                value={formData.first_name}
                  required 
                  onChange={handleChange}
                  />
              </Col>
              <Col>
              <Form.Label className="d-flex">Last name <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                placeholder="Last name" 
                required
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                />
              </Col>
            </Row>
          </Form>
          {/* <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
              <Col>
              <Form.Label className="d-flex">Country code<span className="text-danger">*</span></Form.Label>
                <Form.Control 
                as="select"
                required
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                >
                  <option>Select</option>
            <option value="+263">+263</option>
            <option value="+27">+27</option>
                </Form.Control>
              </Col>
              <Col>
              <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
                <Form.Control type="tel" 
                placeholder="Phone number" 
                required
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                />
              </Col>
            </Row>
          </Form> */}
          <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
            <Col>
              <Form.Label className="d-flex">Email <span className="text-danger">*</span> </Form.Label>
                <Form.Control placeholder="Email" 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
              </Col>             
              <Col>
              <Form.Label className="d-flex">Gender<span className="text-danger">*</span></Form.Label>
          <Form.Control as="select" required
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          >
            <option>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
              </Col>
            </Row>
          </Form>
          <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
              {/* <Col>
              <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
                <Form.Control 
                placeholder="Date of birth" 
                required
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                />
              </Col> */}
               {/* <Col>
              <Form.Label className="d-flex">Citizenship<span className="text-danger">*</span></Form.Label>
                <Form.Control
                placeholder="Citizenship" 
                required
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                />
              </Col> */}
            </Row>
          </Form>
          <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
              <Col>
              <Form.Label className="d-flex">Password <span className="text-danger">*</span></Form.Label>
                <Form.Control
                placeholder="Password" 
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
              </Col>
              <Col>
              <Form.Label className="d-flex">Confirm password <span className="text-danger">*</span></Form.Label>
                <Form.Control placeholder="Confirm password" required/>
              </Col>
            </Row>
          </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
                  
              {/* <div className="d-flex">
              <Form.Check  type="checkbox" 
                  id="checkbox1"
                  name="policy_acceptance"
                    
                        onChange={handleCheckboxChange}
                  />
                  <Form.Label className="mx-2 text-start">I confirm that I have read the Regulation and Privacy Policy and I declare that I accept them.</Form.Label>
              </div> */}
              <div className="d-flex">
                  <Form.Check 
                  type="checkbox"
                    id="checkbox2" 
                    name="data_process_acceptance"
                        onChange={handleCheckboxChange}
                    />
                      <Form.Label className="mx-2 text-start">
                        <small>
                        I consent to the processing of my data for the purposes of the current and future admission in accordance with the provisions of Regulation of Zimbabwe. More about the principles of personal data processing in the PRIVACY POLICY
                          </small></Form.Label>  
              </div>
          </Col>
        </Row>
      </Form>
          <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Button variant="primary" onClick={handleRegistration} className={`main_bg w-100 mt-3 d-flex justify-content-center align-items-center ${isFormValid()?"content_bg-2":""}`} type="submit" disabled={!isFormValid()}>
                {isLoading && signUpClicked && (

<Spinner className='spinner-border-sm me-2'/>
)}
          <span>Sign Up</span>
        
                </Button>
              </Col>
            </Row>
            
<Link to="/login" className=' d-flex justify-content-end align-items-center my-3'> Already have an account yet? <span className='px-3 py-2 header'>Sign in</span></Link>
          </Form>
          
{/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="error-bg box-shadow border-radius-round">
          <h4 className="text-danger">Error</h4>
          <div className="my-2">
            {errorResponse && (

           <ul className="ps-0">
            {errorResponse. errorsList.map((error:string,index:number)=>{
              return <li className="d-flex px-1 text-danger my-1" key={index}><span className="text-danger">{index+1}</span>. {error}</li>
            }) }
           </ul>
            )}
          </div>
          <Button className="d-flex main_bg justify-content-end" variant="primary" onClick={handleClose}>
            close
          </Button>
          </Modal.Body>
      </Modal> */}
  </div>
   )
}
export default RegisterInfo

                                                                                                                                                                           