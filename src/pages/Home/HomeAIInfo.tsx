
import React, { useEffect, useState } from 'react';
import { HomeIAFeatures } from '../../assets/data/makrohome';
import { PushButton } from '../../components/Buttons';
import img1 from "../../assets/settings.png";
import img2 from "../../assets/makronexa.png";
import img3 from "../../assets/uploadFile.png";
import "./MakroHomePage.css"; 

interface AdmissionCardData {
  id: number;
  imgUrl: string;
}
interface AdmissionCardProps extends AdmissionCardData {
  className: string;
}

const admissionData: AdmissionCardData[] = [
  {
    id: 1,
    imgUrl: img1, 
  },
  {
    id: 2,
    imgUrl: img2, 
  },
  {
    id: 3,
    imgUrl: img3, 
  },
];

const HomeAIInfo: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [previousCard, setPreviousCard] = useState(0);
  const [currentFeature, setCurrentFeature] = useState<number>(1);

  const handleCardClick = (index: number) => {
    setCurrentCard(index);
  };

  const handleNextCard = () => {
    const nextCard = currentCard % 3 + 1;
    setCurrentCard(nextCard);
    setPreviousCard(currentCard);
    setCurrentFeature((prevFeature) => (prevFeature % 3) + 1);
  };

  useEffect(() => {
    const featureTimer = setInterval(handleNextCard, 5000);
    return () => clearInterval(featureTimer);
  }, [currentCard]);

  const AdmissionCard: React.FC<AdmissionCardProps> = ({ id, imgUrl }) => {
    return (
      <li
        className={`admission-card ${
          id === currentCard ? "card--current" : id === previousCard ? "card--out" : ""
        }`}
        onClick={() => handleCardClick(id)}
      >
        <img src={imgUrl} alt={`img${id}`} style={{ width: "100%", height: "300px" }} />
      </li>
    );
  };

  return (
    <div className="p-3 simplify-feature admission-card-bg">
       <input type="radio" id="feature1" className="sec-1-input" name="feature" checked={currentFeature === 1} />
      <input type="radio" id="feature2" className="sec-1-input" name="feature" checked={currentFeature === 2} />
      <input type="radio" id="feature3" className="sec-1-input" name="feature" checked={currentFeature === 3} />
      <div className="row my-4 me-2">
        <div className="col col-12 col-sm-12 col-md-6 ">
          <h3 className="text-start header mb-3">Mankronexa </h3>
          <h4 className="text-start">
            Mankronexa is generative AI that organizes all your knowledge
          </h4>
          <ul>
            {HomeIAFeatures.map((feature) => (
              <li
                style={{
                  color: currentCard === feature.id ? '' : 'gray',
                }}
                className="text-start py-4"
                key={feature.id}
              >
                <div className="d-flex flex-column">
                  <span className="my-3 simplify-feature-text">{feature.heading} </span>
                  {currentCard === feature.id && (
                    <small className="simplify-feature-text">{feature.content} </small>
                  )}
                </div>
                <span
                  style={{
                    backgroundColor: currentCard === feature.id ? 'white' : 'gray',
                  }}
                  className="simplify-progressbar"
                >
                  <span className="simplify-progressbar-fill"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-12 d-none d-md-block col-sm-6 col-md-6  better-for-card">
          <div className="slider admission-card-bg">
            <ul className="cards">
              {admissionData.map((data) => (
                <AdmissionCard
                  key={data.id}
                  id={data.id}
                  imgUrl={data.imgUrl}
                  className={
                    data.id === currentCard ? "card--current" : data.id === previousCard ? "card--out" : ""
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-start">
        <PushButton message="Learn more!" url="/features/makronexa" />

      </div>
    </div>
  );
};

export default HomeAIInfo;
