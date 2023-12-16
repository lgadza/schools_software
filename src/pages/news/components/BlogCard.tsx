import React from 'react';
import * as Icon from "react-bootstrap-icons";
import { Card, Col, Row, Modal} from 'react-bootstrap';
import "./NewsCard.css";

interface BlogCardProps {
  thumbnailSrc: string;
  authorName: string;
  title: string;
  content: string[];
  date: string;
  likes: number;
  month: string;
  show: boolean; // New prop to control the visibility of the modal
  handleClose: () => void; // New prop for handling closing the modal
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnailSrc,
  title,
  authorName,
  content,
  date,
  likes,
  month,
  show,
  handleClose
}) => {
  return (
    <Modal show={show}   onHide={handleClose} className='newsModal' size='xl' centered>
      <div className='d-flex justify-content-end p-3'><Icon.XLg className='content_bg-2' color='red' size={20}/></div>
        {/* <Modal.Header  closeButton className='new-closeBtn'></Modal.Header> */}
      <Modal.Body style={{backgroundColor:'transparent'}}>
        <Card className='news_card'>
          <Row>
            <Col md={6}>
              <div className="thumbnail">
                <img src={thumbnailSrc} className='left' alt="Blog Thumbnail" />
              </div>
              <div className='post-date d-none d-md-block'>
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
      </Modal.Body>
    </Modal>
  );
};

export default BlogCard;
