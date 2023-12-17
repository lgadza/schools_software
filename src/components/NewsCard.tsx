import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  readMoreUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, date, description, readMoreUrl }) => {
    const navigate=useNavigate()
  return (
    <div className="news-card" onClick={()=>navigate(`${readMoreUrl}`)}>
      <a href="#" className="news-card__card-link"></a>
      <img src={imageUrl} alt="" className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h5 className="news-card__title text-start">{title}</h5>
        <div className="news-card__post-date text-start">{date}</div>
        <div className="news-card__details-wrapper">
          <p className="news-card__description text-start textMediumSize">{description}</p>
          <a href={readMoreUrl} className="news-card__read-more">
            Read more <ArrowRight className='read__more__arrow' size="1.5rem"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
