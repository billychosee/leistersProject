import React from 'react';

interface HeroImageProps {
  statueSrc: string;     // Source for the main image
  skyBetSrc: string;     // Source for the secondary logo image
  altStatue: string;     // Alt text for the main image
  altSkyBet: string;     // Alt text for the secondary logo image
  titleText: string;     // Title text to be displayed
}

const HeroImage: React.FC<HeroImageProps> = ({
  statueSrc,
  skyBetSrc,
  altStatue,
  altSkyBet,
  titleText
}) => {
  return (
    <div className="relative">
      {/* Main Image */}
      <img src={statueSrc} alt={altStatue} className="w-full h-auto" />
      
      {/* Overlay with Sky Bet logo and text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 md:p-4 text-darkBlue bg-white flex items-center">
        <img src={skyBetSrc} alt={altSkyBet} className="h-8 px-2 md:h-full" />
        <h1 className="text-4xl font-deutschlander mr-2 md:text-8xl">{titleText}</h1>
      </div>
    </div>
  );
};

export default HeroImage;
