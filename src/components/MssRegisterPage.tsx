import { Container,Col, Row } from "react-bootstrap"
import RegisterInfo from "../pages/admissionsManagement/student/RegisterInfo"
// import md_logo_small from "../assets/md_logo_small.png"
// import * as Icon from "react-bootstrap-icons";
// import { CompanyName } from "../assets/data/company";
const MssRegisterPage=():JSX.Element=>{
   return(
    <Container className="application_page  d-flex align-items-center justify-content-center">
        <Row className="d-flex align-items-center justify-content-center">
        {/* <Col md={4} className="d-flex d-none d-md-block flex-column justify-content-between reg-welcome">
            <div className="wrapper  d-flex flex-column justify-content-between pb-5">
            <div className="p-3 d-flex justify-content-center">
            <img
                    src={md_logo_small}
                    alt={CompanyName}
                    className="img_component d-flex"
                    style={{width:"80px",objectFit:"contain"}}
                />
            </div>
            <div className="sign-up-message">    
            <h3 className="color-header">Welcome to MSS.</h3>
            <h6>Are you ready to apply to the school of your choice?</h6>
            </div>
            <div className="sign-up-icons">
            <Icon.Facebook  size={20}/>
            <Icon.Instagram className="mx-3" size={20}/>
            <Icon.Linkedin size={20}/>
            </div>
            </div>
         </Col> */}
            <Col md={6}>
            <RegisterInfo/>
            </Col>
        </Row>
    </Container>
   )
}

export default MssRegisterPage