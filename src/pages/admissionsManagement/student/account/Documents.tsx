import { useEffect, useState} from "react"
import { Alert, Col, Form, Row } from "react-bootstrap"
// import {  GuardianInterface } from "../../../../Types"
// import { useSelector } from "react-redux"
// import { getUserData } from "../../../../redux/actions"
// import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import UploadFileModal from "../../../../components/UploadFileModal"


const Documents=():JSX.Element=>{
    // const dispatch:any=useDispatch()
    // const data=useSelector((state:any)=>state.userData.data)
// const initialGuardian:GuardianInterface={
//     first_name:"",
//     last_name:"",
//     phone_number:"",
//     email:"",
//     country_code:"",
//     relationship:""
// }
const [file, setFile] = useState<File | null>(null);
console.log(file,"FILE")
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
// const handleChange=(e:any)=>{
// const {name,value}=e.target;
// setGuardian((data)=>({
//     ...data,
//     [name]:value
// }))
// console.log(guardian);
// }
    // const [guardian,setGuardian]=useState<GuardianInterface>(initialGuardian)
    useEffect(()=>{
        // dispatch(getUserData())
    },[])
    const handleFileUpload = (uploadedFile: File) => {
      setFile(uploadedFile);
    };
    return(
<div>
<Alert  variant="danger">
    <div className="d-flex">
    <FontAwesomeIcon className="me-2" icon={faTriangleExclamation}/>
    Information
    </div>
    <ul className="d-flex">
        <li>Documents should be uploaded only in PDF format!</li>
    </ul>
  </Alert>
<h5 className="d-flex">Required documents</h5>
<span className="d-flex text-muted mb-2">
            Fill all fields with <span className="text-danger mx-2">*</span>  to update
          </span>
<span className="d-flex mb-4 text-muted">Please upload documents that have a status missing.</span>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Passport size photo <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        {/* <span className="pe-2 d-flex align-items-center text-success"> 
        <FontAwesomeIcon icon={faCheckCircle} className="me-1" style={{ fontSize: "0.8rem" }} />
        Accepted</span>
          <Form.Control
          type="file"
           name="photo"
        //    value={guardian.photo}
            required 
            onChange={handleChange}
            /> */}
            <UploadFileModal onFileUpload={handleFileUpload}/>
            </div>
        </Col>    
      </Row>
    </Form>    
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Academic transcript<span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        {/* <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>
          <Form.Control type="file"       
          name="academic_transcript"
          value={guardian.phone_number}
          onChange={handleChange}
          /> */}
            <UploadFileModal onFileUpload={handleFileUpload}/>
          </div>
        </Col>    
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>   
      <Col>
        <Form.Label className="d-flex">Letter of recommendation/Transfer letter <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        {/* <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>
          <Form.Control   
          type="file"
          name="transfer_letter"
        //   value={guardian.transfer_letter}
          onChange={handleChange}
          /> */}
            <UploadFileModal onFileUpload={handleFileUpload}/>
          </div>
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>     
      <Col>
        <Form.Label className="d-flex">Other Supporting Documents <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        {/* <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>
          <Form.Control        
          type="file"
          name="other_supporting_docs"
        //   value={guardian.other_supporting_docs}
          onChange={handleChange}
          /> */}
            <UploadFileModal onFileUpload={handleFileUpload}/>
          </div>
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3 ">Update</Button>
    </div>
</div>
    )
}
export default Documents