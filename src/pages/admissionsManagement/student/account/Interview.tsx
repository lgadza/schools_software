
import { Col, Row } from "react-bootstrap"

const Interview=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4">Interview/Exam</h5>

<Row className="mb-4">
    <Col><span className="d-flex">Is the candidate eligible for the interview/exam</span></Col>
    <Col>
    <span className="d-flex justify-content-end">No</span>
    </Col>
</Row>
        </div>
    )
}
export default Interview