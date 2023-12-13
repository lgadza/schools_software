import { Col, Container } from "react-bootstrap";
import PageProgress from "../../../components/PageProgress";
import HomeNavbar from "../HomeNavbar";
import Footer from "../../../components/Footer";
import { Row } from "react-bootstrap";
import { admissionBenefitsArray,characteristicsArray,admissionParagraphs } from "../../../assets/data/admissionBenefitsArray";
import ExploreMoreFeatures from "../../../components/ExploreMoreFeatures";
import FAQComp from "../FAQComp";
import { admissionFAQ } from "../../../assets/data/faqItemsData";
import admission_img_1 from "../../../assets/candidatesAdmission.png"
import admission_img_2 from "../../../assets/candidatesAdmission2.png"
import "./Features.css"
import SunRaise from "../../../components/SunRaise";
import { CompanyName } from "../../../assets/data/company";


const AdmissionManagement: React.FC = () => {
    const sections = [
        {label:"Makronexus"},
        { label: "Makronexus" },
        { label: "Makronexus" },
        { label: "Makronexus" },
    ];

    const AdmissionManagementContent:React.FC=()=>{
    
      
        return(
            <div className="d-flex admission-content flex-column align-items-start">
                
                <div className="definition d-flex flex-column align-items-start">
                <h4 className="my-4 text-start">What is an Admission Management Software?</h4>
                <small className="d-flex text-start textSmallSize">
                Admission management software helps streamline the admissions process. The admission management software enables educational institutions to conduct student admission and enrollment procedures online. Students and parents do not need to stand in long queues for hours to take admission to the institution. Parents and students can use the admission management system to file an online inquiry of school admissions. {CompanyName} makes the process of admission easy for schools, institutions, and parents.
                </small>
                <h5 className="my-3 text-start">Admission Management Software for Schools</h5>
                <div className="admission-img-container d-flex justify-content-center w-100 py-5">
                    <div className="over-sticker px-2 text-start">
                        <small className="textSmallSize">
                    Fast Admission Processes</small></div>
                <img src={admission_img_1} alt="admission"  style={{width:"500px",borderRadius:"10px",objectFit:"cover"}} />
                </div>
                {admissionParagraphs.map((para)=>{
                    return(
                        <small key={para.id} className="text-start py-2 textSmallSize">{para.content}</small>
                    )
                })}
                </div>
                <div className="characteristics d-flex flex-column align-items-start">
                <h5 className="my-3 text-start">Characteristics of Admission Management Software</h5>
                <div className="admission-img-container img-2 d-flex justify-content-center w-100 py-5">
                    <div className="over-sticker-2 px-2 d-flex flex-column">
                        <small className="textSmallSize">
                            Better Record 
                        </small>
                        <small className="textSmallSize">
                        Management
                        </small>
                    </div>
                    <div className="over-sticker-3 py-2 px-2">
                        <small className="textSmallSize">
                            One-stop Solution
                        </small>
                    </div>
                <img src={admission_img_2} alt="admission"  style={{width:"500px",borderRadius:"10px",objectFit:"cover"}} />
                </div>
                <small className="text-start mt-3 textSmallSize">
                {CompanyName} offers a host of features to educational institutions. The major characteristics of the admission management system are:
                </small>
                {
                    characteristicsArray.map((character)=>{
                        return(
                            <div key={character.id} className="text-start">
                            <h6 className="my-3">{character.heading} </h6>
                            <small className="text-start textSmallSize">{character.content} </small>
                            </div>
                        )
                    })
                }
                </div>
                <div className="benefits d-flex flex-column align-items-start">
                <h5 className="my-3 ">Benefits of Admission Software</h5>
                <small className="text-start textSmallSize">
                With a host of features, {CompanyName} provides various advantages to everyone connected to the education system. Some key benefits of the admission management system are:
                </small>
                {
                    admissionBenefitsArray.map((benefit)=>{
                        return(
                            <div className="text-start" key={benefit.id}>
                                <h6 className="my-3 textMediumSize">{benefit.heading} </h6>
                <small className="text-start textSmallSize">
               {benefit.content}
                </small>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="progress-container">
              <PageProgress steps={sections} />
            </div>
            <div className="content-container">
              <Container fluid className="px-0 mb-5">
                  <HomeNavbar />
                <Container className="px-5" >
                <SunRaise/>
                    <Row className="mb-5">
                        <Col xl={8}>
                  <AdmissionManagementContent/>
                        </Col>
                        <Col md={4} className="d-none d-xl-block px-5 mt-2">
                            <ExploreMoreFeatures/>
                        </Col>
                    </Row>
                  <FAQComp FAQItems={admissionFAQ} />
                </Container>
                <Footer />
              </Container>
            </div>
          </div>
        );
    };
    
export default AdmissionManagement 