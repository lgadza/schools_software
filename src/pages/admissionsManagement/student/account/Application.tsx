import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { gradesAndForms } from "../../../../assets/data/gradesAndForms";
import Select from "react-select"
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
interface ApplicationProps{
    title:string,
    location:string,
    applied:string,
    status:string
}
// Reusable Card component
const ApplicationCard:React.FC<ApplicationProps> = ({ title, location, applied, status }) => (
  <Card className=" my-3 p-3">
    <Card.Title className="text-start text-dark textMediumSize">{title}</Card.Title>
    <Card.Body>
      <Card.Text className="text-start text-dark textSmallSize">Location: {location}</Card.Text>
      <Card.Subtitle className="text-start text-muted textSmallSize">Applied: {applied}</Card.Subtitle>
    </Card.Body>
    <Card.Footer className="textSmallSize text-end text-success">
      Status: <span className={`textSmallSize p-2 ms-2 ${status==="accepted"?"header":status==="rejected"?"text-danger":"text-muted"}`}>{status}</span>
    </Card.Footer>
  </Card>
);

const Application = (): JSX.Element => {
    const [selectedLevel, setSelectedLevel] = useState(""); 
    const [selectedSchool, setSelectedSchool] = useState<Array<{ value: string; label: string }>>([]); 
    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLevel(event.target.value);
      };
    
      // Handle changes in the "Select School" select input
      const handleSchoolChange = (selectedOptions: any) => {
        setSelectedSchool(selectedOptions);
      };
      const isApplicationValid=():boolean=>{
        return(
            false
        )
      }
    
  return (
    <div>
      <h5 className="d-flex my-3 text-dark">Application</h5>
      <Form>
        <Row>
          <Col>
            <Form.Label className="d-flex text-dark textMediumSize">
              Level <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select required value={selectedLevel} onChange={handleLevelChange} className="
            textSmallSize">
              <option className="textSmallSize">Select level</option>
              {gradesAndForms.map((level) => (
                <option value={level.value} key={level.value}>
                  {level.label}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label className="d-flex text-dark textMediumSize">
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
              value={selectedSchool}
              onChange={handleSchoolChange}
            />
          </Col>
        </Row>

      </Form>
      <div className="d-flex mt-4 justify-content-end">
        <Button variant="primary" disabled={!isApplicationValid()} className="px-3 main_bg content_bg-2">
          <Icon.Send  className="textSmallSize"/> <span className="textSmallSize">Apply</span>
        </Button>
      </div>
        <div className="steps-bar mt-4">
              <h6 className="text-start text-dark textMediumSize">My Applications</h6>
            </div>
            <Row>
              {[1, 2, 3].map((index) => (
                <Col md={6} key={index}>               
                  <ApplicationCard
                    title="Nkulumani High"
                    location="Bulawayo, Nkulumani 6"
                    applied="Form 1"
                    status={index === 1 ? "pending" : index === 2 ? "accepted" : "rejected"}
                  />
                </Col>
              ))}
            </Row>
    </div>
  );
};

export default Application;
