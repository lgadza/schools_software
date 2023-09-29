
import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface OverlayStyles {
  opacity: number;
  '--overlay-x': string;
  '--overlay-y': string;
  '--overlay-card': number; // Track the currently hovered card
}

const Pricing: React.FC = () => {
  const [overlayStyles, setOverlayStyles] = useState<OverlayStyles>({
    opacity: 0,
    '--overlay-x': '0px',
    '--overlay-y': '0px',
    '--overlay-card': -1, // Initialize with no card hovered
  });

  const [overlayCards, setOverlayCards] = useState<JSX.Element[]>([]);
  const cardsContainerInnerRef = useRef<HTMLDivElement | null>(null);

  const cards = [
    {
      heading: 'Freemium Plan',
      price: '$0.00',
      bullets: [
        '20 queries',
        '900 kilobytes of text for uploading - no credit card required',
        'Export queries and answers',
      ],
      ctaText: 'Get Started',
      ctaLink: '#basic',
    },
    {
      heading: 'Individual Plan:',
      price: '$9.99',
      bullets: [
        '20 datasets',
        'Email support',
        '30 documents per dataset',
        '7 megabytes of text for uploading per month',
        "1,000 dataset queries per month",
        "Export queries and answers"
      ],
      ctaText: 'Get Started',
      ctaLink: '#pro',
    },
    {
      heading: 'Institution Plan',
      price: '',
      bullets: [
        'Unlimited datasets',
        'Unlimited documents per dataset',
        '200 megabytes of text for uploading per month',
        'Priority support',
        'Fee Management',
        'Admin Dashboard',
        'Admission Management',
      ],
      ctaText: 'Contact Us',
      ctaLink: '#ultimate',
    },
  ];

  const applyOverlayMask = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const x = e.pageX - (cardsContainerInnerRef.current?.offsetLeft || 0);
    const y = e.pageY - (cardsContainerInnerRef.current?.offsetTop || 0);

    setOverlayStyles({
      ...overlayStyles,
      opacity: 1,
      '--overlay-x': `${x}px`,
      '--overlay-y': `${y}px`,
      '--overlay-card': index, // Track the currently hovered card
    });
  };

  const handleMouseLeave = () => {
    setOverlayStyles({
      ...overlayStyles,
      '--overlay-card': -1,
    });
  };

  const createOverlayCta = (ctaText: string) => {
    return <div className="cta" aria-hidden="true">{ctaText}</div>;
  };
const navigate=useNavigate()
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const newOverlayCards = entries.map((entry, index) => {
        const width = entry.borderBoxSize[0]?.inlineSize || 'auto';
        const height = entry.borderBoxSize[0]?.blockSize || 'auto';

        return (
          <div
            className="card"
            key={index}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            onMouseMove={(e) => applyOverlayMask(e, index)}
            onMouseLeave={handleMouseLeave} // Reset when leaving
          >
            {createOverlayCta(cards[index].ctaText)}
          </div>
        );
      });
      setOverlayCards(newOverlayCards);
    });

    cards.forEach((_, index) => {
      const cardEl = document.querySelectorAll('.card')[index];
      if (cardEl) {
        observer.observe(cardEl);
      }
    });
  }, []); 

  return (
    <main className="main pricing flow">
      <h4 className="main__heading color-header">Pricing</h4>
      <h5 className="">All plans are cancellable anytime</h5>
      <div className="main__cards cards">
        <div className="cards__inner" ref={cardsContainerInnerRef}>
          {cards.map((card, index) => (
            <div className="cards__card card" key={index}>
              <h2 className="card__heading">{card.heading}</h2>
              <p className="card__price">{card.price}</p>
              <ul role="list" className="card__bullets flow">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className='d-flex'>
                    <FontAwesomeIcon className='me-1' icon={faCheckCircle} style={{color:"rgb(40, 167, 69,0.8)"}}/>
                    <small className='text-start'>{bullet}</small>
                  </li>
                ))}
              </ul>
              <a href={card.ctaLink} onClick={()=>{
                fetch(`${import.meta.env.VITE_BE_PROD_URL}/create_checkout_section`,{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify({
                    items:[
                      { id:1,quantity:1}
                    ]
                  })
                }).then(res=>{
                  if(res.ok) return res.json()
                  return res.json().then(json=>Promise.reject(json))
                }).then(({url})=>{
                  navigate(url)
                }).catch(error=>{
                  console.error(error.error)
                })
              }} className="card__cta cta">{card.ctaText}</a>
            </div>
          ))}
        </div>
        <div className="overlay cards__inner" style={overlayStyles}>
          {overlayCards}
        </div>
      </div>
    </main>
  );
};

export default Pricing;
