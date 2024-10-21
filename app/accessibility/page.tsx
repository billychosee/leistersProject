import React from 'react';
import Navbar from '@/Components/Navbar'
import HeroImage from '@/Components/HeroImage';

// app/accessibility/page.js
const AccessibilityPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroImage 
          statueSrc="/Images/Mens_first_team.png"  // Directly referencing the image
          skyBetSrc="/Images/logo-leicester-city-fc.svg"
          altStatue="Statue" 
          altSkyBet="Sky Bet Logo" 
          titleText="Accesibility"
        />
      </div>
    </div>
  );
};

export default AccessibilityPage;
