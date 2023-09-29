import { Col, Container, Row } from "react-bootstrap"
import "./AboutUs.css"
import HomeNavbar from "./HomeNavbar"
import Footer from "../../components/Footer"
import PageProgress from "../../components/PageProgress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye, faCircleInfo, faHandshake, faLightbulb, faQuestion } from "@fortawesome/free-solid-svg-icons"
import * as Icon from "react-bootstrap-icons"
import { PushButton } from "../../components/Buttons"
import zim_img from "../../assets/zim-img.png"

const AboutUs=():JSX.Element=>{
    const sections = [
        {label:"Makronexus"},
        { label: "Makronexus" },
        { label: "Makronexus" },
        { label: "Makronexus" },
      ];
    return(
        <div className="about-us page-container">
             <div className="progress-container">
                <PageProgress steps={sections} />
             </div>
            <div className="content-container cala-main-feature">
        <Container fluid className="px-0">
          <HomeNavbar />
          <Container className="px-5 pt-5  calaAI">
          <div className="d-flex banner flex-column justify-content-center align-items-center">
                {/* We're on a mission to provide schools with an all-in-one, affordable, and future-ready platform that makes education seamless, exciting, and accessible to everyone, ensuring quality learning for all. */}
                <h1>
                We’re on a mission to expand the potential of education.
                </h1>
             
            </div>
            <Row>
          
          <Col md={4} className="mb-3">
          <div className="card content_bg">
            <h4 className="mb-3">
            Who We Are
            </h4>
            <p className="text-start">
            <small>
            At Makronexus, we are more than just a team; we are a collective of passionate professionals united by our unwavering dedication to technology and education. Our dynamic group brings together a diverse tapestry of experience in software development, artificial intelligence, and education. It's at this intersection of knowledge and innovation that we craft truly exceptional solutions.
            </small>
            </p>
            <div>
            <FontAwesomeIcon icon={faCircleInfo} className="icon about-us-icon"/>
            </div>
          </div>
          </Col>
          <Col md={4} className="mb-3">
          <div className="card content_bg">
            <h4 className="mb-3">
            Our Mission
            </h4>
            <p className="text-start">
            <small>We're on a mission to provide schools with an all-in-one, affordable, and future-ready platform that makes education seamless, exciting, and accessible to everyone, ensuring quality learning for all.
            </small> 
            </p>
            <div>
            <FontAwesomeIcon icon={faBullseye} className="icon about-us-icon"/>
            </div>
          </div>
          </Col>
          <Col md={4} className="mb-3">
          <div className="card content_bg">
            <h4 className="mb-3">
            What We Do
            </h4>
            <p className="text-start">
            <small>
            Makronexus specializes in developing innovative school management software that seamlessly connects secondary schools, primary schools, and educational institutions of all sizes across Zimbabwe. Our software is designed to simplify administrative tasks, enhance communication, foster an enriched learning environment, empowering students and educators to engage in research and educational discovery and improve the overall learning experience.
            </small>
            </p>
            <div>
            <FontAwesomeIcon icon={faQuestion} className="icon about-us-icon"/>
            </div>
          </div>
          </Col>
            </Row>
            <div className="mt-5 content_bg text-center">     
      <ul className="tree d-flex justify-content-center">
        <li>
          <h4>Our Core Values</h4>
          <ul>
            <li>
            <div className="core-values">
           <div className="text-center">
           <FontAwesomeIcon icon={faLightbulb} className="icon about-us-icon"/>
           </div>
                 <p>Innovation</p>
                 <div className="text-center">
                    <small>
                    We thrive on innovation, constantly seeking new ways to improve education through technology.
                    </small>
                 </div>
            </div>
            </li>
            <li>
            <div className="core-values">
            <div className="text-center">
                <Icon.PatchCheckFill className="icon about-us-icon"/>
                </div>
                 <p>Quality</p>
                 <div className="text-center">
                    <small>
                    We are committed to delivering high-quality, reliable solutions that make a meaningful impact.
                    </small>
                 </div>
            </div>
            </li>
            <li>
            <div className="core-values">
            <div className="text-center">
                 <Icon.UniversalAccess className="icon about-us-icon"/>
            </div>
                 <p>Accessibility</p>
                 <div className="text-center">
                    <small>
                    We believe that education should be accessible to everyone, and we design our software with inclusivity in mind.
                    </small>
                 </div>
            </div>
            </li>
            <li>
            <div className="core-values">
            <div className="text-center">
                <FontAwesomeIcon icon={faHandshake} className="icon about-us-icon"/>
            </div>
                 <p>Collaboration</p>
                 <div className="text-center">
                    <small>
                    Collaboration is at the heart of what we do. We work closely with educators, students, and administrators to create solutions that truly meet their needs.
                    </small>
                 </div>
            </div>
            </li>
          </ul>
        </li>
      </ul>
            </div>
            <div>
            <PushButton url='/register' message='Join us'/>
            </div>
            <div className="mt-5">
                <Row>
                    <Col md={6}>
                    <div className="text-start">
                    <h4 className="text-start my-3">
                    Let’s build Zimbabwe’s most preferred school operating system together
                    </h4>
            <PushButton url='/register' message='Join Us on Our Journey'/>
                    </div>
                    </Col>
                    <Col md={6}>
                    <img src={zim_img} className="zim-img" alt="zim_map"/>
                    </Col>
                </Row>
            </div>
          </Container>
          <Footer />
        </Container>
      </div>
        </div>
    )
}

export default AboutUs