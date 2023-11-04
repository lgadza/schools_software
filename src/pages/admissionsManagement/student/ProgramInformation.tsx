
import { Col, Row } from "react-bootstrap"

const ProgramInformation=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4 text-dark">Program Information</h5>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Institution:</span></Col>
    <Col><span className="d-flex text-dark">
        _
    </span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Level:</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Program:</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Intake:</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
<Row className="mb-4 bottom-border">
    <Col><span className="d-flex text-dark">Academic year:</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
        </div>
    )
}
export default ProgramInformation