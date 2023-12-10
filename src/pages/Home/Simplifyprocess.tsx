
import React, { useEffect, useState } from 'react';
import { admissionFeatures } from '../../assets/data/makrohome';
import { PushButton } from '../../components/Buttons';
import img1 from "../../assets/imgs/candidateAccount.png";
import img2 from "../../assets/candidatesAdmission.png";
import img3 from "../../assets/candidatesAdmission2.png";
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

const SimplifyProcess: React.FC = () => {
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
        <img src={imgUrl} alt={`img${id}`} style={{ width: "100%", height: "100%" }} />
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
          <h5 className="text-start header mb-3">Admission Management</h5>
          <h6 className="text-start textMediumSize">
            Elevate the admissions process to deliver an enriching experience for all
          </h6>
          <ul>
            {admissionFeatures.map((feature) => (
              <li
                style={{
                  color: currentCard === feature.id ? '' : 'gray',
                }}
                className="text-start py-4"
                key={feature.id}
              >
                <div className="d-flex flex-column">
                  <span className="my-3 simplify-feature-text textMediumSize">{feature.heading} </span>
                  {currentCard === feature.id && (
                    <small className="simplify-feature-text textSmallSize">{feature.content} </small>
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
      <div>
        <PushButton message="Learn more!" url='/features/admission_management' />
      </div>
    </div>
  );
};

export default SimplifyProcess;
