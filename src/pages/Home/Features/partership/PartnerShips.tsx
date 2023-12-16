
import { Container, Row,Col } from "react-bootstrap";
import PageProgress from "../../../../components/PageProgress";
import HomeNavbar from "../../HomeNavbar";
import Footer from "../../../../components/Footer";

import WhoCanPartner from "./components/WhoCanPartner";
import HowWeHelp from "./components/HowWeHelp";
import CarouselComponent from "./components/CarouselComponent";



const PartnerShips: React.FC = () => {
  const sections = [
    {label:"Makronexus"},
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
            <CarouselComponent/>
            <Row>
              <Col>
              <WhoCanPartner/>
              </Col>
            </Row>
            <Row>
              <Col>
              <HowWeHelp/>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default PartnerShips;
