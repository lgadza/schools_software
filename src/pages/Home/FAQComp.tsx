import React, { useState } from 'react';
import "./FAQCom.css"
import { FAQItem } from '../../assets/data/faqItemsData';
import { Col, Row } from 'react-bootstrap';
interface FAQCompoProps{
  FAQItems:FAQItem[]
}
const FAQComp: React.FC<FAQCompoProps> = ({FAQItems}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container FAQ">
<Row>
  <Col md={6}>
  <h4 className='d-flex py-2 color-header text-start'>Frequently Asked Questions</h4>
      <div className="FAQ">
        {FAQItems.map((item:FAQItem) => (
          <div className="FAQ-item" key={item.id}>
            <button
              id={`FAQ-button-${item.id}`}
              className='d-flex align-items-center py-2'
              aria-expanded={expandedId === item.id ? 'true' : 'false'}
              onClick={() => toggleFAQ(item.id)}
            >
              <span className="FAQ-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {expandedId === item.id && (
              <div className="FAQ-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
  </Col>
</Row>
    </div>
  );
};

export default FAQComp;
