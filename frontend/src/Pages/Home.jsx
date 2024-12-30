import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import CreateTask from '../components/CreateTask.jsx';

function Home() {
 
  return (
    <>
      <Navbar />
      <CreateTask/>
    </>
  );
}

export default Home;
