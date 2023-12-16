import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from '../Home/HomeNavbar';
import Footer from '../../components/Footer';
import PageProgress from '../../components/PageProgress';
import NewsCard from '../../components/NewsCard';
import "./News.css"
import NewsHero from './components/NewsHero';
import BlogCard from './components/NewsCard';

const News: React.FC = () => {
  const sections = [
    {label:"Makronexus"},
    { label: "Makronexus" },
    { label: "Makronexus" },
    { label: "Makronexus" },
  ];
  const slidesData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum...',
      date: 'Oct 27, 2019',
      readMoreUrl: '#'
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
                  />
                  </Col>
                ))}
            </Row>
            <BlogCard
                thumbnailSrc="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
                authorImgSrc="https://randomuser.me/api/portraits/men/95.jpg"
                title="Why you Need More Magnesium in Your Daily Diet"
                authorName="Igor MARTY"
                content="Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in the British Journal of Cancer, gives you another reason to add more magnesium to your diet..."
                date="JANUARY 12"
                views={12}
                likes={0}
                comments={0}
                shares={0}
              />
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default News;
