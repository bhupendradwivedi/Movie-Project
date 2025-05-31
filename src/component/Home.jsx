import React from 'react';
import Sidenav from './Sidenav';
import Header from './Header';



const Home = () => {
  return (
    <>
    
      <Sidenav />
      <div className=" h-full w-[100%] bg-[rgb(6,18,31)]">
      

        <Header/>
    
      </div>
    </>
  );
};

export default Home;
