import React from 'react';
import Spline from '@splinetool/react-spline';
import '../Styles/mainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className='main-presentation'>
      <Spline scene="https://prod.spline.design/oyUPCKgmrWzmmzLq/scene.splinecode" className='animated-bg'/>
       <h1>Dylan Alzate Betancur</h1>
       <h4>Software developer</h4>
    </div>
  );
};

export default MainContent;