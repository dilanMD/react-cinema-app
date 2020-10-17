import React from 'react';

import './MainContent.scss';
import SlideShow from '../slide-show/SlideShow';

const MainContent = () => {
  const images = [
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg'
    }
  ];
  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
