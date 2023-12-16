import React from 'react';
import * as Icon from "react-bootstrap-icons"
import { Card, Col, Row } from 'react-bootstrap';
import "./NewsCard.css"

interface BlogCardProps {
  thumbnailSrc: string;
  authorImgSrc: string;
  title: string;
  authorName: string;
  content: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnailSrc,
  title,
  authorName,
  content,
  date,
  views,
  likes,
}) => {
  return (
    <Card className='news_card'>
      <Row>
        <Col md={6} >
        <div className="thumbnail">
          <img src={thumbnailSrc} className='left' alt="Blog Thumbnail" />
        </div>
        <div>
        <h5>{views}</h5>
        <h6>{date}</h6>
        </div>
        </Col>
        <Col md={6} >
          <Card.Body>
            <Card.Title className='text-start'>{title}</Card.Title>
            <div className="text-start">
              <span className='textMediumSize text-muted text-start'>by {authorName}</span>
            </div>
            <div className="separator"></div>
            <Card.Text>{content}</Card.Text>
            <ul className='text-start'>
              <li><Icon.Heart/> {likes}</li>
              <li><Icon.Share/></li>
            </ul>
            <div className="fab">
              <Icon.ArrowDown/>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogCard;
