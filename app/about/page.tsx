import React from 'react';
import About from '../components/About/about';
import MasterLayout from '../components/masterlayout/master';

const Aboutpage: React.FC = () => {
  return (
    <MasterLayout>
      <About />
    </MasterLayout>
  );
};

export default Aboutpage;
