
import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import { CompanyName } from '../../assets/data/company';
import { Link } from 'react-router-dom';
// import { PushButton } from '../../components/Buttons';
const Carousel: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<number>(1);
  const bannerSwitcher = () => {
    setCurrentBanner((prevBanner) => (prevBanner % 4) + 1);
  };

  useEffect(() => {
    const bannerTimer = setInterval(bannerSwitcher, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  const handleBannerClick = (bannerNumber: number) => {
    setCurrentBanner(bannerNumber);
  };

  return (
    <section id="section-1" className='carousel'>
       <video autoPlay muted loop className='video-background'>
        <source src="https://makronexus.s3.eu-central-1.amazonaws.com/vids/makronexus_introduction.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="content-slider">
        <input type="radio" id="banner1" className="sec-1-input" name="banner" checked={currentBanner === 1} />
        <input type="radio" id="banner2" className="sec-1-input" name="banner" checked={currentBanner === 2} />
        <input type="radio" id="banner3" className="sec-1-input" name="banner" checked={currentBanner === 3} />
        <input type="radio" id="banner4" className="sec-1-input" name="banner" checked={currentBanner === 4} />
        <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper">
            <h2>{CompanyName} Schools</h2>
            <h1>Integrated school</h1>
            <h1>management platform</h1>
            <div className="line"></div>
            {/* <PushButton url='' message='Learn more!'/> */}
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper">
            <h2>C.A.L.A</h2>
            <h1>AI-powered CALA</h1>
            <h1>project assistance</h1>
            <div className="line"></div>
            <Link to='/features/makronexa' >Learn more!</Link>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Master school records</h2>
            <h1>Effortlessly</h1>
            <h1>manage student data</h1>
            <div className="line"></div>
            {/* <Link to='' message='Learn more!'/> */}
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Save time</h2>
            <h1>Simplify </h1>
            <h1> administrative tasks </h1>
            <div className="line"></div>
            <Link to='/features/admission_management'>Learn more!</Link>
          </div>
        </div>
        </div>
        <nav>
          <div className="controls">
            <label htmlFor="banner1" onClick={() => handleBannerClick(1)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav textMediumSize'>
               Intro
              </span>
            </label>
            <label htmlFor="banner2" onClick={() => handleBannerClick(2)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav textMediumSize'> CALA</span>
            </label>
            <label htmlFor="banner3" onClick={() => handleBannerClick(3)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav textMediumSize'> Efficiency</span>
            </label>
            <label htmlFor="banner4" onClick={() => handleBannerClick(4)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav textMediumSize'>Simplicity</span>
            </label>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Carousel;

