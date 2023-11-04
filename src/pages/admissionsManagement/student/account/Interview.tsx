
import { Col, Row } from "react-bootstrap"

const Interview=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4 text-dark">Interview/Exam</h5>

<Row className="mb-4">
    <Col><span className="d-flex text-dark">Is the candidate eligible for the interview/exam</span></Col>
    <Col>
    <span className="d-flex justify-content-end text-danger">No</span>
    </Col>
</Row>
        </div>
    )
}
export default Interview