import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from '../Home/HomeNavbar';
import Footer from '../../components/Footer';
import PageProgress from '../../components/PageProgress';
import NewsCard from '../../components/NewsCard';
import "./News.css"
import NewsHero from './components/NewsHero';

const News: React.FC = () => {

    
  const sections = [
    {label:"Makronexus"},
    { label: "Makronexus" },
    { label: "Makronexus" },
    { label: "Makronexus" },
  ];

  
  const slidesData = [
    {
      imageUrl: 'https://media.licdn.com/dms/image/D4D22AQHFychcZ-z_ww/feedshare-shrink_1280/0/1702710962550?e=1705536000&v=beta&t=MM57RcFe0BDDZE4yL0heavuHR0cYw6kgUoI4dAr0HZo',
      title: 'The Genesis of Makronexus.',
      description: "Inspired by the Minister of Primary and Secondary Education's emphasis on accessible, inclusive, and quality education, we recognized a pressing need. With over 6.6 million school-age children, yet only 4.6 million attending school, the gap was glaring",
      date: 'Dec 15, 2023',
      readMoreUrl: '/news/The-Genesis-of-Makronexus'
    },
    {
      imageUrl: 'https://media.licdn.com/dms/image/D4D22AQF26mALqwFGaw/feedshare-shrink_800/0/1704229238983?e=1707350400&v=beta&t=uJJIYG2Hw6lrHnlJBX4CtcvuSKObfa1RXX-ji-yCJN8',
      title: "🌟 Zimbabwe's Young Innovators, Get Ready! 🌟",
      description: "🚀 Calling All Young Zimbabwean Innovators! Join Makronexus' First-Ever Science and Innovation Competition in March 2024. Unleash Your Creativity, Solve Real Challenges, and Win Big!",
      date: 'Jan 05, 2024',
      readMoreUrl: '/news/Science-and-Innovation-Competition'
    },
    
  ];
  
  return (
    <div className="page-container">
      <div className="progress-container">
        <PageProgress steps={sections} />
      </div>
      <div className="content-container cala-main-feature">
        <Container fluid className="px-0">
          <HomeNavbar />
            <NewsHero mainTitle='Makronexus Insights & Updates' subTitle='Your Hub for the Latest in Education Technology, News, and Expert Insights'/>
          <Container className="px-5 calaAI">
            
            <Row className="my-5">
              {slidesData.map((card,index)=>(

                  <Col md={4} className='mt-5' key={index}>
                  <NewsCard
                    imageUrl={card.imageUrl}
                    title={card.title}
                    date={card.date}
                    description={card.description}
                    readMoreUrl={card.readMoreUrl}
                  />
                  </Col>
                ))}
            </Row>
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default News;
