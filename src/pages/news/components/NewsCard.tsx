import React from 'react';
import * as Icon from "react-bootstrap-icons";
import { Card, Col, Row } from 'react-bootstrap';
import "./NewsCard.css";

interface BlogCardProps {
  thumbnailSrc: string;
  authorImgSrc: string;
  title: string;
  authorName: string;
  content: string[];
  date: string;
  likes: number;
  month: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnailSrc,
  title,
  authorName,
  content,
  date,
  likes,
  month
}) => {
  return (
    <Card className='news_card'>
      <Row>
        <Col md={6}>
          <div className="thumbnail">
            <img src={thumbnailSrc} className='left' alt="Blog Thumbnail" />
          </div>
          <div className='post-date'>
            <h5>{date}</h5>
            <h6>{month}</h6>
          </div>
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className='text-start textMediumSize'>{title}</Card.Title>
            <div className="text-start">
              <span className='textMediumSize text-muted text-start'>by {authorName}</span>
            </div>
            <div className="separator"></div>
            <div className='text-start mt-3'>
              {content.map((paragraph, index) => (
                <p key={index} className='textSmallSize py-0'>{paragraph}</p>
              ))}
            </div>
            <ul className='text-start'>
              <li className='textSmallSize'><Icon.Heart /> {likes}</li>
              <li className='header'><Icon.Share /></li>
            </ul>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogCard;
