import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from '../Home/HomeNavbar';
import PageProgress from '../../components/PageProgress';
import Footer from '../../components/Footer';
import BlogPost from './components/BlogPost';


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
  const content2 = [
    "In an exhilarating move to nurture young talent and foster innovation, Makronexus is thrilled to announce its inaugural Science and Innovation Competition in Zimbabwe, slated for mid-March 2024. This event marks a significant leap in our ongoing efforts to inspire and empower the next generation of problem solvers and innovators.",
    `
    We extend an open invitation to all primary and secondary school students across Zimbabwe to showcase their creativity and ingenuity. This competition is a platform for young innovators to express their ideas and contribute to solving real-world problems.`,
    `
    🔍 Your Challenge: Participants are tasked with presenting CALA (Creativity, Analysis, Logic, and Application) projects that address and offer solutions to real-life challenges. We also welcome projects that were developed last year, offering a chance to refine and showcase ongoing innovations.`,
    `
    🏆 Prizes: To acknowledge and reward the hard work and creativity of our participants, we have arranged for generous cash rewards for the winners. This is not just a competition; it's an opportunity to get recognized for your innovative ideas and efforts.`,
    `
    We encourage all potential participants to start preparing their innovative solutions. The details regarding the competition, including the registration process, deadlines, and specific guidelines, will be shared soon. Keep an eye out for further updates!`,
    `A Step Towards a Brighter Future
    This competition is more than just a contest; it's a commitment from Makronexus to invest in the future of our youth. We believe that nurturing young talent is crucial for the advancement of our nation and the world.`,
    `
    Proudly sponsored by Makronexus, this event aligns with our mission to empower the next generation of problem solvers. Our aim is not just to provide a platform for competition but to kindle a passion for science and innovation among young Zimbabweans.`,
    `Let's Innovate for a Brighter Tomorrow
    We are on the lookout for brilliant ideas that can make a difference. Let’s come together to create a brighter future with your innovative solutions. 💡🚀`
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
          <BlogPost
        title="🌟 Zimbabwe's Young Innovators, Get Ready! 🌟"
        imageUrl="https://media.licdn.com/dms/image/D4D22AQF26mALqwFGaw/feedshare-shrink_800/0/1704229238983?e=1707350400&v=beta&t=uJJIYG2Hw6lrHnlJBX4CtcvuSKObfa1RXX-ji-yCJN8"
        content={content2}
      />
          <BlogPost
        title="The Genesis of Makronexus"
        imageUrl="https://media.licdn.com/dms/image/D4D22AQHFychcZ-z_ww/feedshare-shrink_1280/0/1702710962550?e=1705536000&v=beta&t=MM57RcFe0BDDZE4yL0heavuHR0cYw6kgUoI4dAr0HZo"
        content={content}
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
