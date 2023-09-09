
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceRatingsAndReviews from '../../components/ResourceRatingsAndReviews';

export interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    tags: string[];
    rating: number;
    reviews: string[];
  }
  
   const resource: Resource[] = [
    {
      id: 1,
      title: 'Resource 1',
      thumbnail: 'https://example.com/resource1.jpg',
      description: 'This is Resource 1 description. Lorem ipsum dolor sit amet...',
      tags: ['Science', 'Physics', 'Experiments'],
      rating: 4.5,
      reviews: ['Great resource!', 'Very informative'],
    },
    {
      id: 2,
      title: 'Resource 2',
      thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
      description: 'This is Resource 2 description. Lorem ipsum dolor sit amet...',
      tags: ['Math', 'Algebra', 'Equations'],
      rating: 3.8,
      reviews: ['Helped me a lot in my class'],
    },
    // Add more resources...
  ];
  
interface ResourceDetailsProps {
  resource: Resource;
}
// MYBE PASS PROPS FROM THE PARENT
const ResourceDetails: React.FC<ResourceDetailsProps> = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={resource[1].thumbnail} alt={resource[1].title} className="img-fluid border-radius-round" />
        </div>
        <div className="col-md-8 d-flex flex-column  align-items-start">
          <h5>{resource[1].title}</h5>
          <p>{resource[1].description}</p>
          <div className='d-flex'>
          <h6>Tags:</h6>
          <ul className='d-flex'>
            {resource[1].tags.map((tag) => (
              <li className='mx-1' key={tag}>#{tag}</li>
            ))}
          </ul>
          </div>
          <ul>
                <ResourceRatingsAndReviews resourceId={1} initialRating={4} initialReviews={["its a good color"]}/>
          </ul>
        
          {/* <h6>Rating: {resource[1].rating}</h6>
          <h6>Reviews:</h6>
          <ul>
            {resource[1].reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul> */}
            <Link to="" >
          <button className="btn btn-primary"> Go Back </button>
            </Link>
        </div>
      </div>
   
    </div>
  );
};

export default ResourceDetails;
