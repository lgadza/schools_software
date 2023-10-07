import { Card, Col, Form, Row,Button} from "react-bootstrap"
import { gradesAndForms } from "../../../../assets/data/gradesAndForms"
import Select from "react-select";
import * as Icon from "react-bootstrap-icons"

const Application=():JSX.Element=>{
 
    return(
        <div>
    <h5 className="d-flex my-3">Application</h5>

{/* <MultipleSelect/> */}
<Form >
      <Row>
        <Col>
        <Form.Label className="d-flex">Level <span className="text-danger">*</span></Form.Label>
          <Form.Select
           required 
        //    value={guardian.level}
            // onChange={handleChange}
            >
                <option>select level</option>
                {   
                    gradesAndForms.map((level:{value:string,label:string})=>{
                        return(
                            <option value={level.value}>{level.label}</option>
                            )})
                }
            </Form.Select>
        </Col>
        <Col>
        <Form.Label className="d-flex">
              Select School <span className="text-danger">*</span>
            </Form.Label>
            <Select
              required
              options={gradesAndForms.map((level) => ({
                value: level.value,
                label: level.label,
              }))}
              placeholder="Select school"
              isMulti={true}
            />
            <div className="steps-bar mt-4">
              <h6>No application available</h6>
            </div>
            <Card className="main_bg my-3">
                <Card.Title className="text-start">
                    Nkulumani High
                </Card.Title>
                <Card.Body>
                    <Card.Text className="text-start">
                        Location: Bulawayo, Nkulumani 6
                    </Card.Text>
                    <Card.Subtitle className="text-start text-muted">
                        Applied: Form 1
                    </Card.Subtitle>
                </Card.Body>

            </Card>
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3 main_bg content_bg-2"><Icon.Send/> <span>Apply</span></Button>
    </div>
    </div>
    )
}
export default Application