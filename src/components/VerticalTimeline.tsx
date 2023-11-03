
import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './VerticalTimeline.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { timelineItemsProps } from '../assets/data/calaFeature';
const VerticalTimeline = ({timelineItems}:{timelineItems:timelineItemsProps[]}):JSX.Element => {
  useEffect(() => {
    const sr = ScrollReveal();

    const fadeInOptions = {
      origin: window.innerWidth < 768 ? 'right' : 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    };

    sr.reveal('.js--fadeInLeft', fadeInOptions);
    sr.reveal('.js--fadeInRight', fadeInOptions);
  }, []);


  return (
    <section className="timeline">
      <div className="container px-0">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-img"></div>
            <div className={`timeline-content ${index % 2 === 0 ? 'js--fadeInLeft' : 'js--fadeInRight'}`}>
              <div className='timeline-img-container cala-content'>
              {item.imgUrl && (
                <img className='time-img' src={item.imgUrl} alt='img'/>
              )}
              </div>
              <div className='text-start px-2 mt-3'>
                <FontAwesomeIcon icon={item.icon} style={{ fontSize: "2rem", color: item.color }} />
              </div>
              <h5 className='text-start d-flex my-2 px-2 color-header'>{item.title}</h5>
              <div className='text-start px-2'>
                <small>{item.description}</small>
              </div>
              <a href="#" className='header d-flex px-2 my-4'>Learn more!</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
