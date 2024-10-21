import React from 'react';
import Navbar from '@/Components/Navbar'
import HeroImage from '@/Components/HeroImage';
import SkyBet from '../public/Images/sky-bet-championship-logo.png'; 
// app/accessibility/page.js
const AccessibilityPage = () => {
    return <div>
      <Navbar />
      <div>
      <HeroImage 
        statueSrc={Statue.src}
        skyBetSrc={SkyBet.src}
        altStatue="Statue" 
        altSkyBet="Sky Bet Logo" 
        titleText="Sky Bet CHAMPIONS"
        bgColor="bg-white" 
        textColor="text-darkBlue"
      />
    </div>
    </div>;
  };
  
  export default AccessibilityPage;
  