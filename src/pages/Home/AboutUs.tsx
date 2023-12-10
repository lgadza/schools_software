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
          <div className="d-flex banner flex-column justify-content-center align-items-center">
                {/* We're on a mission to provide schools with an all-in-one, affordable, and future-ready platform that makes education seamless, exciting, and accessible to everyone, ensuring quality learning for all. */}
                <Container>
                <h1>
                We’re on a mission to expand the potential of education.
                </h1>
                </Container>
             
            </div>
          <Container className="px-5 pt-5  calaAI">
            <Row>
          
          <Col md={4} className="mb-3">
          <div className="card">
            <h4 className="mb-3 textMediumSize">
            Who We Are
            </h4>
            <p className="text-start textSmallSize">
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
          <div className="card">
            <h4 className="mb-3 textMediumSize">
            Our Mission
            </h4>
            <p className="text-start textSmallSize">
            <small>We're on a mission to provide schools with an all-in-one, affordable, and future-ready platform that makes education seamless, exciting, and accessible to everyone, ensuring quality learning for all.
            </small> 
            </p>
            <div>
            <FontAwesomeIcon icon={faBullseye} className="icon about-us-icon"/>
            </div>
          </div>
          </Col>
          <Col md={4} className="mb-3">
          <div className="card">
            <h4 className="mb-3 textMediumSize">
            What We Do
            </h4>
            <p className="text-start textSmallSize">
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
            <div className="mt-5 card text-center">     
      <ul className="tree d-flex justify-content-center">
        <li>
          <h4 className="textMediumSize">Our Core Values</h4>
          <ul>
            <li>
            <div className="core-values">
           <div className="text-center">
           <FontAwesomeIcon icon={faLightbulb} className="icon about-us-icon"/>
           </div>
                 <p className="textMediumSize">Innovation</p>
                 <div className="text-start">
                    <small className="textSmallSize">
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
                 <p className="textMediumSize">Quality</p>
                 <div className="text-start">
                    <small className="textSmallSize">
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
                 <p className="textMediumSize">Accessibility</p>
                 <div className="text-start">
                    <small className="textSmallSize">
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
                 <p className="textMediumSize">Collaboration</p>
                 <div className="text-start">
                    <small className="textSmallSize">
                    Collaboration is at the heart of what we do. We work closely with educators, students, and administrators to create solutions that truly meet their needs.
                    </small>
                 </div>
            </div>
            </li>
          </ul>
        </li>
      </ul>
            </div>
            <div className="mt-5">
            <PushButton url='/register' message='Join us'/>
            </div>
            <div className="mt-5">
                <Row >
                    <Col md={6} className="d-flex align-items-center">
                    <div className="text-start">
                    <h4 className="text-start textMediumSize my-3">
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