import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"

const Settings=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4 text-dark">Settings</h5>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Account status:</span></Col>
    <Col> <span className="d-flex align-items-center text-danger"><FontAwesomeIcon className="me-2" icon={faCircle} style={{fontSize:"0.5rem"}}/>
    <span>Not Active</span>
    </span></Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">Enrollment number</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex text-dark">School email</span></Col>
    <Col>
    <span className="d-flex text-dark">_</span>
    </Col>
</Row>
        </div>
    )
}
export default Settings