import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from '../Home/HomeNavbar';
import Footer from '../../components/Footer';
import PageProgress from '../../components/PageProgress';
import NewsCard from '../../components/NewsCard';
import "./News.css"
import NewsHero from './components/NewsHero';
import BlogCard from './components/BlogCard';

const News: React.FC = () => {

    const [activeCard, setActiveCard] = useState(false);
    const handleClose = () => {
      setActiveCard(false); // Assuming `setActiveCard` is the state setter function
    };
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
  
  const slidesData = [
    {
      imageUrl: 'https://media.licdn.com/dms/image/D4D22AQHFychcZ-z_ww/feedshare-shrink_1280/0/1702710962550?e=1705536000&v=beta&t=MM57RcFe0BDDZE4yL0heavuHR0cYw6kgUoI4dAr0HZo',
      title: 'The Genesis of Makronexus.',
      description: "Inspired by the Minister of Primary and Secondary Education's emphasis on accessible, inclusive, and quality education, we recognized a pressing need. With over 6.6 million school-age children, yet only 4.6 million attending school, the gap was glaring",
      date: 'Dec 15, 2023',
      readMoreUrl: '#Makronexus'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=503',
      title: 'Exploring the world of technology.',
      description: 'Discover the latest trends in tech, from AI advancements to the new era of IoT...',
      date: 'Nov 12, 2019',
      readMoreUrl: '#'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      title: 'Innovations in Healthcare.',
      description: 'A closer look at how innovation is transforming healthcare and improving lives...',
      date: 'Dec 05, 2019',
      readMoreUrl: '#'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
      title: 'Sustainable Living and Green Energy.',
      description: 'Learn about sustainable living practices and the rise of green energy solutions...',
      date: 'Jan 16, 2020',
      readMoreUrl: '#'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1586083702768-190ae093d34d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=305&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=505',
      title: 'The Future of Artificial Intelligence.',
      description: 'Exploring the future possibilities and ethical considerations of AI development...',
      date: 'Feb 23, 2020',
      readMoreUrl: '#'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1484656551321-a1161420a2a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=306&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=506',
      title: 'Advancements in Space Exploration.',
      description: 'An overview of recent breakthroughs and missions in space exploration...',
      date: 'Mar 11, 2020',
      readMoreUrl: '#'
    }
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
            <NewsHero mainTitle='Makronexus Insights & Updates' subTitle='Your Hub for the Latest in Education Technology, News, and Expert Insights'/>
            <Row className="my-5">
              {slidesData.map((card,index)=>(

                  <Col className='mt-5' key={index}>
                  <NewsCard
                    imageUrl={card.imageUrl}
                    title={card.title}
                    date={card.date}
                    description={card.description}
                    readMoreUrl={card.readMoreUrl}
                    onToggleModal={() => setActiveCard(true)}
                  />
                  </Col>
                ))}
            </Row>
            <BlogCard
                thumbnailSrc="https://media.licdn.com/dms/image/D4D22AQHFychcZ-z_ww/feedshare-shrink_1280/0/1702710962550?e=1705536000&v=beta&t=MM57RcFe0BDDZE4yL0heavuHR0cYw6kgUoI4dAr0HZo"
                title="The Genesis of Makronexus"
                authorName="Louis Gadza"
                month="JANUARY "
                likes={0}
                content={content}
                date={"12"}
                show={activeCard}
                // handleClose={toggleModal}
                handleClose={handleClose}
              />
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default News;
