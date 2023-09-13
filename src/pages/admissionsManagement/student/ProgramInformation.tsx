
import { Col, Row } from "react-bootstrap"

const ProgramInformation=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4">Program Information</h5>
<Row className="mb-4">
    <Col><span className="d-flex">Institution:</span></Col>
    <Col><span className="d-flex">
        _
    </span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Level:</span></Col>
    <Col>
    <span className="d-flex">_</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Program:</span></Col>
    <Col>
    <span className="d-flex">_</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Intake:</span></Col>
    <Col>
    <span className="d-flex">_</span>
    </Col>
</Row>
<Row className="mb-4 bottom-border">
    <Col><span className="d-flex">Academic year:</span></Col>
    <Col>
    <span className="d-flex">_</span>
    </Col>
</Row>
        </div>
    )
}
export default ProgramInformation