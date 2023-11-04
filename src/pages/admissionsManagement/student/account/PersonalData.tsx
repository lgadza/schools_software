import { useEffect, useState } from "react"
import { Alert, Col, Form, Row } from "react-bootstrap"
import { UserRegistration, PersonalDataInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { editUserData, getUserData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { RootState } from "../../../../redux/store"
import { Dispatch } from "redux"
import Loader from "../../../../components/Loader"

interface SuccessMessageProps {
  variant: "success" | "danger";
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  variant,
  message,
}) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return showMessage ? <Alert variant={variant}>{message}</Alert> : null;
};

const PersonalData=():JSX.Element=>{
    const dispatch:Dispatch<any>=useDispatch()
    const user=useSelector((state:RootState)=>state.userData.data)
    const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
    const editIsError = useSelector(
      (state: RootState) => state.editUserAddress.isError
    );
const initialPersonalData:PersonalDataInterface=user?{
  first_name:user.first_name,
  last_name:user.last_name,
  second_name:user.second_name,
  date_of_birth:user.date_of_birth,
  gender:user.gender,
  phone_number:user.phone_number,
  email:user.email,
  country_code:user.country_code,
  citizenship:user.citizenship,
}:{
    first_name:"",
    last_name:"",
    second_name:"",
    date_of_birth:"",
    gender:"",
    phone_number:"",
    email:"",
    country_code:"",
    citizenship:"",
  

    
}
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [personalData, setPersonalData] = useState<PersonalDataInterface>(user?user:initialPersonalData);

const [editMode, setEditMode] = useState<boolean>(false);
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const handleChange=(e:any)=>{
const {name,value}=e.target;
setPersonalData((data)=>({
    ...data,
    [name]:value
}))
}

useEffect(() => {
  // dispatch(getUserData(accessToken));
  // if (user) {
  //   setPersonalData(user);
  // }
}, [user]);
const handleEditClick = () => {
  setEditMode((prev) => !prev);
};

const handleSave=async()=>{
  await dispatch(editUserData(accessToken.accessToken,personalData as UserRegistration,user?.id))
  setEditMode(false)
  dispatch(getUserData(accessToken.accessToken))
  setShowSuccessMessage(true);
}

    return(
<div>
{editIsError && (
        <SuccessMessage variant="danger" message="Personal info save failed :(" />
      )}
      {!editIsError && showSuccessMessage &&(
        <SuccessMessage variant="success" message="Personal info saved successfully!" />
      )}
     
{user ? (
        <>
<h5 className="d-flex mb-4">Personal data</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex text-dark">First name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First name"
           name="first_name"
           value={!editMode?user.first_name:personalData.first_name}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex text-dark">Last name <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Last name" 
          required
          name="last_name"
          value={!editMode?user.last_name:personalData.last_name}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex text-dark">Second name </Form.Label>
          <Form.Control 
          placeholder="Second name" 
          name="second_name"
          value={!editMode?user.second_name:personalData.second_name}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex text-dark">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Date of birth" 
           required
           name="date_of_birth"
          value={!editMode?user.date_of_birth:personalData.date_of_birth}
          onChange={handleChange}
           />
        </Col>
      </Row>
    </Form>
   
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex text-dark">Code<span className="text-danger">*</span></Form.Label>
          <Form.Control  as="select" required
          name="country_code"
          value={!editMode?user.country_code:personalData.country_code}
          onChange={handleChange}
          >
          <option value="236">263</option>
          <option value="27">27</option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label className="d-flex text-dark">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="number" 
          placeholder="Phone number" 
          required
          step={1}
          name="phone_number"
          value={!editMode?user.phone_number:personalData.phone_number}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
       
        <Form.Label className="d-flex text-dark">Gender<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="gender"
    value={!editMode?user.gender:personalData.gender}
    onChange={handleChange}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Control>
  
        </Col>
        <Col>
        <Form.Label className="d-flex text-dark">Citizenship<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" 
          placeholder="citizenship" 
          required
          name="citizenship"
          value={!editMode?user.citizenship:personalData.citizenship}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
         <Button variant="primary" className="px-3 content_bg-2 main_bg" onClick={handleEditClick}>
          {editMode ? "Cancel" : "Edit"}
        </Button>
        {editMode && (
          <Button variant="success" className="ms-2 px-3" type="submit" form="personalDataForm" onClick={handleSave}>
            Save
          </Button>
        )}
    </div>
    </>
    ) : (
      <div className="d-flex justify-content-center">

        <Loader/>
      </div>
      )}
</div>
    )
}
export default PersonalData