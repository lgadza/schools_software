
import { Col, Row } from "react-bootstrap"

const ProgramInformation=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-3 text-dark">Program Information</h5>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Institution:</span></Col>
    <Col><span className="d-flex text-dark textSmallSize">
        _
    </span>
    </Col>
</Row>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Level:</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Program:</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Intake:</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
<Row className="mb-3 bottom-border">
    <Col><span className="d-flex text-dark textSmallSize">Academic year:</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
        </div>
    )
}
export default ProgramInformation