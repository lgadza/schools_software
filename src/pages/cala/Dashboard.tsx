// src/components/CALAOverView.tsx
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';

interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description:string;
    tags:[];
    reviews:[];
    rating:number
  }
  
const CALAOverView: React.FC = () => {
  const resources:Resource[] = [
    { id: 1, title: 'Resource 1', thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',description:"", tags:[],reviews:[],rating:3},
    { id: 2, title: 'Resource 2', thumbnail: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',description:"", tags:[],reviews:[],rating:3},
    
  ];

  const recentActivity = [
    { id: 1, action: 'Uploaded a resource', timestamp: '2023-07-12 10:30 AM' },
    { id: 2, action: 'Rated a resource', timestamp: '2023-07-11 02:45 PM' },
  ];
 const [favoriteResources, setFavoriteResources] = useState<number[]>([1,2]);
   const onFavoriteToggle = (id: number, isFavorite: boolean) => {
    if (isFavorite) {
    
      setFavoriteResources((prevFavorites) => [...prevFavorites, id]);
    } else {
      setFavoriteResources((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
    }
  };
  console.log(favoriteResources,"FAVORITE RESOURCES")

  const onShare = (id: number) => {
    alert(`Share resource with ID ${id}`);
  };

  return (
    <div className="dashboard container t-5">
        {/* <ResourceSearch/> */}
      <div className="m-4">
        <h4 className='d-flex pb-2'>Settings</h4>
          <div className="row">
              {resources.map((resource) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={resource.id}>
                  <ResourceCard id={resource.id} title={resource.title} thumbnail=
                {resource.thumbnail} isFavorite={true} onShare={onShare} onFavoriteToggle={onFavoriteToggle}/>
                </div>
              ))}
                <div className="recent-activity-sticky">
            <span>Recent Activity</span>
            <ul className="content_bg">
              {recentActivity.map((activity) => (
                <li  key={activity.id}>
                  <small className='text-small nowrap  text-muted'>{activity.action}- {activity.timestamp} </small> 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CALAOverView;
