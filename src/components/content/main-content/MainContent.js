import React, { useState } from 'react';

import './MainContent.scss';
import SlideShow from '../slide-show/SlideShow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
      rating: 7.5
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      rating: 7.9
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
      rating: 6.5
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
      rating: 8.5
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      rating: 8.0
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
      rating: 7.0
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
