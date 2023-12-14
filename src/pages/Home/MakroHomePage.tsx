
  import { Container, Row } from "react-bootstrap";
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
import CardsComponent from "../../components/Cards";
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
    // Data for the cards

    return (
      <div className="page-container">
        <div className="progress-container">
          <PageProgress steps={sections} />
        </div>
        <div className="content-container">
          <Container fluid className="px-0 mb-5">
              <HomeNavbar />
            <div className="carousel-container"> 
              <Carousel />
            </div>
            <Container className="px-5">
                <h6 className="my-5 d-flex text-start color-header"> Empower and elevate success for all.</h6>
             
              <Row className="mb-5 card-list-content">
              {betterCardList.map((card,index)=>{
                return(
                  <CardsComponent title={card.title} copy={card.description} cardNumber={index.toString()}  />
                )
              })}
            </Row>
              <div className="simplify-feature-container my-5 main-bg">
              <div className="h3">
                <h6 className="text-start d-flex color-header my-5">Streamline your institute's management<br/> with simplicity. </h6>
                </div> 
                <SimplifyProcess/>
              </div>
              <div className="simplify-feature-container my-5 main-bg">
              <div className="h3">
                <h6 className="text-start d-flex color-header mt-5">You are one question away from the correct answer. </h6>
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
  