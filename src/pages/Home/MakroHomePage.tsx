
  import { Col, Container, Row } from "react-bootstrap";
  import HomeNavbar from "./HomeNavbar";
  import Carousel from "./Carousel";
  import FAQComp from "./FAQComp";
  import Footer from "../../components/Footer";
  import PageProgress from "../../components/PageProgress";
  import { FAQItems } from "../../assets/data/faqItemsData";
//  import { imgProps } from "../../assets/data/makrohome";
 import { betterCardList } from "../../assets/data/makrohome";
  import "./MakroHomePage.css"
import SimplifyProcess from "./Simplifyprocess";
import HomeAIInfo from "./HomeAIInfo";
  // const BetterOutCard: React.FC<imgProps> = ({imgProps}) => {
  //   return (
  //     <div className="role_card" key={imgProps.id} id={imgProps.title}>
  //       <div className="info_section">
  //         <div className="role_header">
  //           <img className="locandina" src={imgProps.imageUrl} alt={imgProps.title} />
  //           <h1>{imgProps.title}</h1>
  //         </div>
  //         <div className="role_desc">
  //           <p className="text">{imgProps.description}</p>
  //         </div>
  //       </div>
  //       <div className={`blur_back ${imgProps.id}_back`} />
  //     </div>
  //   );
  // };
  const MakroHomePage: React.FC = () => {
    const sections = [
      { label: "Makronexus" },
      { label: "Makronexus" },
      { label: "Makronexus" },
      { label: "Makronexus" },
    ];

    return (
      <div className="page-container">
        <div className="progress-container">
          <PageProgress steps={sections} />
        </div>
        <div className="content-container">
          <Container fluid className="px-0 mb-5">
              <HomeNavbar />
            <Container className="px-5">
            <div className="carousel-container"> 
              <Carousel />
            </div>
                <h4 className="p-4 d-flex text-start color-header"> Empower and elevate success for all.</h4>
              <div className="better-for-card">
              <Row className="mb-5">
              {betterCardList.map((card)=>{
                return(
                  <Col md={6} className="role_card" key={card.id}>
                  <div id={card.title} className="info_section mx-3">
                    <div className="role_header">
                      <h5 className="px-2 pt-4 text-start">{card.title}</h5>
                    </div>
                    <div className="role_desc text-start px-2">
                      <small className="text text-start">{card.description}</small>
                    </div>
                  </div>
                  <div className={`blur_back ${card.title}_back`} />
                </Col>
                )
              })}
            </Row>
              </div>
              <div className="simplify-feature-container my-5 main-bg">
              <div className="h3">
                <h4 className="text-start d-flex color-header p-3">Streamline your institute's management<br/> with intelligent simplicity. </h4>
                </div> 
                <SimplifyProcess/>
              </div>
              <div className="simplify-feature-container my-5 main-bg">
              <div className="h3">
                <h4 className="text-start d-flex color-header p-3">You are one question away from the correct answer. </h4>
                </div> 
                <HomeAIInfo/>
              </div>
              <FAQComp FAQItems={FAQItems} />
            </Container>
            <Footer />
          </Container>
        </div>
      </div>
    );
  };

  export default MakroHomePage;
  