import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from '../Components/Banner';
import AOS from 'aos'; // Import AOS library if not already imported
import Popup from './Popup';
function MainLayout() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(prevState => !prevState); // Toggle the state
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []); // Run only once after the component mounts

  return (
    <div>
      <Header handleOrderPopup={handleOrderPopup} />
      <Banner handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default MainLayout;
