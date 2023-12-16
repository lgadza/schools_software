import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from '../Home/HomeNavbar';
import PageProgress from '../../components/PageProgress';
import Footer from '../../components/Footer';
import BlogCard from './components/BlogCard';


const NewsDetailRead: React.FC = () => {
  const sections = [
    {label:"Makronexus"},
    { label: "Makronexus" },
    { label: "Makronexus" },
    { label: "Makronexus" },
  ];
  const content = [
    "Excited to share the story behind Makronexus, our educational software platform.",
    "Inspired by the Minister of Primary and Secondary Education's emphasis on accessible, inclusive, and quality education, we recognized a pressing need. With over 6.6 million school-age children, yet only 4.6 million attending school, the gap was glaring.",
    "The pandemic further exacerbated learning losses, highlighting the urgent need for innovative solutions. Witnessing these challenges firsthand fueled our commitment to make a difference.",
    "Makronexus emerged as a response to these realities and as a supportive tool in achieving Zimbabwe's Vision 2030. Our platform is not just software; it's a movement, a mission to ensure no child, regardless of their background, is left behind in education.",
    "By aligning with the government's initiatives and embracing emerging technologies, we're contributing to national efforts for educational modernization and industrialization.",
    "Let's work together to support this vision and create a brighter future for Zimbabwe's learners!",
    "\"NYIKA INOVAKWA NEVENE VAYO\"",
  ];
  return (
    <div className="page-container">
      <div className="progress-container">
        <PageProgress steps={sections} />
      </div>
      <div className="content-container cala-main-feature">
        <Container fluid className="px-0">
          <HomeNavbar />
          <Container className="px-5 calaAI">
            <Row className="my-5">
          <Col className='mt-5'>
          <BlogCard
                thumbnailSrc="https://media.licdn.com/dms/image/D4D22AQHFychcZ-z_ww/feedshare-shrink_1280/0/1702710962550?e=1705536000&v=beta&t=MM57RcFe0BDDZE4yL0heavuHR0cYw6kgUoI4dAr0HZo"
                title="The Genesis of Makronexus"
                authorName="Louis Gadza"
                month="JANUARY "
                likes={0}
                content={content}
                date={"12"}
              />
          </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default NewsDetailRead;
