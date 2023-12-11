import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"

const Settings=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4 text-dark">Settings</h5>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Account status:</span></Col>
    <Col> <span className="d-flex align-items-center text-danger"><FontAwesomeIcon className="me-2" icon={faCircle} style={{fontSize:"0.3rem"}}/>
    <span className="textSmallSize">Not Active</span>
    </span></Col>
</Row>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">Enrollment number</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
<Row className="mb-3">
    <Col><span className="d-flex text-dark textSmallSize">School email</span></Col>
    <Col>
    <span className="d-flex text-dark textSmallSize">_</span>
    </Col>
</Row>
        </div>
    )
}
export default Settings