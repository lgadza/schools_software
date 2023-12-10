import { Container,Col, Row } from "react-bootstrap"
import RegisterInfo from "../pages/admissionsManagement/student/RegisterInfo"
import * as Icon from "react-bootstrap-icons";
import md_logo_small from "../assets/md_logo_small4.png"
import { CompanyName } from "../assets/data/company";
import backgroundImage from "../assets/background-image.png"; // Replace with your actual background image path

const MssRegisterPage=():JSX.Element=>{
   return(
    <Container fluid
    className="application_page d-flex align-items-center justify-content-center"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        width: '100vw', 
        height: '100vh',
        position: 'relative', 
      }}>
         <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
        zIndex: 1, // Ensure it's above the background image but below the content
      }}></div>
        <Row className="d-flex align-items-center justify-content-center" style={{zIndex:2}}>
        <Col md={4} className="d-flex d-none d-md-block flex-column justify-content-between reg-welcome">
            <div className="wrapper  d-flex flex-column justify-content-between pb-5">
            <div className="p-3 d-flex flex-column justify-content-center">
            <div className="sign-up-message">    
            <h3 className="color-header text-start">Welcome to</h3>
            </div>
            <img
                    src={md_logo_small}
                    alt={CompanyName}
                    className="img_component d-flex"
                    style={{width:"250px",objectFit:"contain"}}
                />
            </div>
           
            <div className="sign-up-icons text-start ps-3">
  <a href="https://www.facebook.com/makronexus/" target="_blank" rel="noopener noreferrer">
    <Icon.Facebook color="rgb(10, 131, 238)" size={20} />
  </a>
  <a href="https://www.linkedin.com/company/makronexus" className="mx-3" target="_blank" rel="noopener noreferrer">
    <Icon.Linkedin color="rgb(9, 99, 191)" size={20} />
  </a>
</div>
</div>
         </Col>
            <Col md={6} >
            <RegisterInfo/>
            </Col>
        </Row>
    </Container>
   )
}

export default MssRegisterPage