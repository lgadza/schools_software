
import React from 'react';
import './HorizontalTimeline.css'; 
import calaUpload from "../assets/CALAUpload.png"
import textExtration from "../assets/textExtraction2.png"
import contentCategory from "../assets/contentCategory.png"
import calaInterface from "../assets/calaSearchInterface.png"
import personalInsights from "../assets/personalInsights.jpg"
import * as Icon from "react-bootstrap-icons"
interface StepProps {
  title: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  iconClass: string;
}
const Step:React.FC<StepProps> = ({ title, image, icon, description, iconClass }) => (
  <div className="steps-one">
    <h5 className='textMediumSize text-white'>{title}</h5>
    <div className="step-wrap">
      <div className="steps-stops">
        <div className="verticle-line back-orange"></div>
      </div>
    </div>
    <div className="pane-warp back-blue">
      <div className="steps-pane">
        <img src={image} alt={title} />
        <div className={`Icon ${iconClass}`}>
          {icon}
        </div>
      </div>
    </div>
    <div className="inverted-pane-warp back-blue">
      <div className="ps-2 pt-2 inverted-steps-pane text-start">
        <small className='textSmallSize'>{description}</small>
      </div>
    </div>
  </div>
);

const HorizontalTimeline: React.FC = () => {
  const timelineSteps = [
    {
      title: 'Upload Files',
      image: calaUpload,
      icon: <Icon.FilePdf size={30} color="red" />,
      description: 'Upload multiple PDF files or any kind of text file directly from your device',
      iconClass: 'fileExe',
    },
    {
      title: 'Extraction',
      image: textExtration,
      icon: <Icon.FiletypeExe size={30} color='white' />,
      description: 'Extract text and data from uploaded files through advanced parsing.',
      iconClass: 'fileExe',
    },
    {
      title: 'Categorization',
      image: contentCategory,
      icon: <Icon.Bookmarks size={30} color="rgb(2, 130, 136)" />,
      description: 'Categorize and organize extracted content by subject and type for efficient access.',
      iconClass: 'bookmark',
    },
    {
      title: 'Search',
      image: calaInterface,
      icon: <Icon.ChatDots className='color-header' size={30} color="red" />,
      description: 'Query the AI using natural language to find specific information from categorized content.',
      iconClass: 'chat',
    },
    {
      title: 'Insights',
      image: personalInsights,
      icon: <Icon.LightbulbFill className='bulb' size={30} color="rgb(253, 200, 56)" />,
      description: 'Get tailored recommendations and insights based on your queries and preferences.',
      iconClass: 'light-bulb',
    },
  ];

  return (
    <section id="horizontal-process">
      <div className="row">
        <div className="section-heading">
          <h6 className="text-center orange my-3 color-header">How it works</h6>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="steps-timeline text-center">
            {timelineSteps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
