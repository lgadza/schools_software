import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { GuardianInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getGuardianType } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Dispatch } from "redux"


const Guardian=():JSX.Element=>{
    const dispatch:Dispatch<any> = useDispatch()
    const guardian_types=useSelector((state:RootState)=>state.getGuardianTypes.guardian_types)
    const [selectedRelationship, setSelectedRelationship]=useState('');
    const relationshipOptions = [
      { label: 'Mother', value: "mother" },
      { label: 'Father', value: "father" },
      { label: 'Grandfather', value: "grand-father" },
      { label: 'Grandmother', value: "grand-mother" },
      { label: 'Sister', value: "sister" },
      { label: 'Brother', value: "brother" },
      { label: 'Uncle', value: "uncle" },
      { label: 'Aunt', value: "aunt" },
      { label: 'Cousin', value: "cousin" },
      { label: 'Spouse', value: "spouse" },
      { label: 'Guardian', value: "guardian" },
  ];
  
    // const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
const initialGuardian:GuardianInterface={
    first_name:"",
    last_name:"",
    phone_number:"",
    email:"",
    country_code:"",
    relationship:""

  
}
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
setGuardian((data)=>({
    ...data,
    [name]:value
}))
}
    const [guardian,setGuardian]=useState<GuardianInterface>(initialGuardian)
    useEffect(()=>{
        dispatch(getGuardianType())
    },[])
    return(
<div>
  {guardian_types && (
    <>
  
<h5 className="d-flex mb-4">Guardian/Parent</h5>
<span className="d-flex text-muted mb-2">
            Fill all fields with <span className="text-danger mx-2">*</span>  to update
          </span>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Guardian first_name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First_name"
           name="first_name"
           value={guardian.first_name}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Guardian last_name <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Last_name" 
          required
          name="last_name"
          value={guardian.last_name}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Code<span className="text-danger">*</span></Form.Label>
          <Form.Control  as="select" required
          name="country_code"
          value={guardian.country_code}
          onChange={handleChange}
          >
          <option value="236">263</option>
          <option value="27">27</option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" 
          placeholder="Phone number" 
          required
          name="phone_number"
          value={guardian.phone_number}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Relationship<span className="text-danger">*</span></Form.Label>
          <Form.Control  as="select" required
          name="relationship"
          value={guardian.relationship}
          onChange={handleChange}
          >
          <option>Select</option>
          {guardian_types && (
            relationshipOptions.map((type:{value:string,label:string},index:number)=>{
              return(
                <option className="py-2" key={index} value={type.value}>{type.label}</option>
              )
            })
          )}
          {/* {guardian_types && (
            guardian_types.guardian_types.map((type:any,index:number)=>{
              return(
                <option className="py-2" key={index} value={type.relationship}>{type.relationship}</option>
              )
            })
          )} */}
          </Form.Control>
        </Col>
        <Col>
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3 main_bg content_bg-2">Update</Button>
    </div>
    </>
  )}
</div>
    )
}
export default Guardian