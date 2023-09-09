
import { Col, Row } from "react-bootstrap"

const ProgramInformation=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4">Program Information</h5>
<Row className="mb-4">
    <Col><span className="d-flex">Institution:</span></Col>
    <Col><span className="d-flex">
        Founders High School
    </span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Level:</span></Col>
    <Col>
    <span className="d-flex">Form 5</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Program:</span></Col>
    <Col>
    <span className="d-flex">Sciences</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Intake:</span></Col>
    <Col>
    <span className="d-flex">February 2024</span>
    </Col>
</Row>
<Row className="mb-4 bottom-border">
    <Col><span className="d-flex">Academic year:</span></Col>
    <Col>
    <span className="d-flex">2024</span>
    </Col>
</Row>
        </div>
    )
}
export default ProgramInformation