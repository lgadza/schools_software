import React from 'react';
import './NewsHero.css'; // Import your CSS styles for the carousel

interface NewsHeroProps {
    showRegisterButton?: boolean;
    mainTitle?: string;
    subTitle?: string;
    buttonText?: string;
}

const NewsHero: React.FC<NewsHeroProps> = ({
    showRegisterButton = false,
    mainTitle = '',
    subTitle = '',
    buttonText = 'Register Now'
}) => {

    return (
        <div  className="carousel mt-5 fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <div className="carousel-inner">
                <div className="item slides active">
                    <div className="slide-1 news-hero" >
                        <div className="overlay"></div>
                    </div>
                    <div className="partnership-hero">
                        <hgroup>
                            <h1>{mainTitle}</h1>
                            <h6 className='my-4'>{subTitle}</h6>
                        </hgroup>
                        {showRegisterButton && (
                            <button type="submit" className="content_bg textSmallSize content_bg-2" >{buttonText}</button>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default NewsHero;
