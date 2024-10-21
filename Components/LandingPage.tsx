import React from 'react'; 
import HeroImage from './HeroImage';
import Statue from '../public/Images/King_POwer_Statue.png';  
import SkyBet from '../public/Images/sky-bet-championship-logo.png'; 
import Directions from '../public/Images/Directions.png'; 
import Trophy from '../public/Images/Trophy Gallery.png';
import Programs from "../public/Images/Program.png";
import YoungHeroes from '../public/Images/YoungHeroes.png';
import Training from '../public/Images/WomensTraining.png';
import FirstTeam from '../public/Images/Mens_first_team.png';
import Welcome from '../public/Images/Welcome.png';
import KingPower from '../public/Images/KingPowerStadium.jpg';
import AD from '../public/Images/AD.png'
import ButtonPlay from '../public/Images/play.svg'
import TrophyLift from '../public/Images/UpTrophy.png'
import Champs from '../public/Images/PremierLegueChampions.jpg'
import Selfie from '../public/Images/Selfie.jpg'
import Store from '../public/Images/Store.png'
import Team from '../public/Images/Team.png'
import Filter from '../public/Images/filter.svg'
import Stadium from '../public/Images/stadium.svg'
import Calender from '../public/Images/Calender.svg'
import Location from '../public/Images/carbon_location.svg'
import Press from '../public/Images/Press_Conference.svg'
import More from '../public/Images/More.svg'
import LcfcLogo from '../public/Images/logo-leicester-city-fc.svg'
import McfcLogo from '../public/Images/logo-manchester-city.svg'
import LufcLogo from '../public/Images/leeds-united-fc-logo.svg'
import FA from '../public/Images/FA-Cup.svg'
import PL from '../public/Images/premier_league.svg'
import Dp from '../public/Images/doped.svg'
import FB from '../public/Images/fbs.svg'
import ADD from '../public/Images/Adidas_logo.svg'
import MD from '../public/Images/MarcDarcy_Logo.svg'
import M from '../public/Images/Monster_logo.svg'
import KP from '../public/Images/kingpower_logo.svg'
import C from '../public/Images/Chang_logo.svg'
import BS from '../public/Images/BiaSaigon_logo.svg'
import PSP from '../public/Images/Psp_logo.svg'
import Image from 'next/image';
import { transcode } from 'buffer';

function Body() {  
  return (  
    <div className='bg-white font-reem-kufi md:pb-20 text-black'>
      
      {/* hero Section */}

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

      {/* end hero */}


  {/* News Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 md:px-20">  
  {[
    { src: Trophy, alt: "Trophy", text: "Achievement Unlocked: Trophy" },
    { src: YoungHeroes, alt: "Young Heroes", text: "Empowering the Next Generation" },
    { src: Directions, alt: "Directions", text: "Your Path to Success" },
    { src: FirstTeam, alt: "First Team", text: "First Team Lineup" },
    { src: Training, alt: "Training", text: "Training for Excellence" },
    { src: Programs, alt: "Programs", text: "Explore Our Programs" },
    { src: Welcome, alt: "Welcome", text: "A Warm Welcome to Our Team" },
    { src: KingPower, alt: "King Power", text: "Royal Strength and Leadership" },
  ].map((image, index) => (
    <div key={index} className="flex flex-col items-left">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={300}
        className="mb-1"
      />
      <p className="text-center md:text-left lg:text-left text-black text-xl">{image.text}</p>
    </div> 
  ))}
</div>

{/* end News Section */}

{/* News Button */}

      <div className="flex items-center justify-center relative">
            <div className="flex-grow h-1 bg-darkBlue ml-20" />
            <div className="border-4 border-darkBlue p-2 text-center lg:text-3xl text-black lg:pr-28">
                More News        
            </div>
            <div className="flex-grow h-1 bg-darkBlue mr-20" />
        </div> 

{/* End News Button */}

{/* start AD */}

        <div className='bg-darkBlue h-20 md:h-72 text-center mt-8 flex justify-center'>
          <img src={AD.src} alt="AD" className="h-full  md:h-full py-2 md:py-10" />
        </div>

{/* End AD */}

{/* Start Feature Section */}

        <div className='flex flex-col md:flex-row mx-4 md:mx-20 my-4 md:my-8 shadow-custom'>  
            <div className='pr-10 p-10 bg-lightGray w-full md:w-2/6  '>  
                <h1 className='text-darkBlue text-2xl font-semibold tracking-wider'>Features</h1>  
                <h2 className='text-black font-deutschlander text-6xl md:w-full tracking-wide'>SEASON 23/24</h2>  
                <h3 className='text-black font-deutschlander text-6xl tracking-wide'>SKY BET</h3>  
                <h4 className='text-black font-deutschlander text-6xl tracking-wide'>CHAMPIONSHIP</h4>  
                <h5 className='text-black font-deutschlander text-6xl tracking-wide'>CHAMPIONS</h5>  
                <img src={ButtonPlay.src} alt="play" className="h-10 md:h-36 py-5" />  
            </div>  
            <div className='relative w1/2 md:w-4/6'>  
                <img src={TrophyLift.src} alt="trophy lift" className="h-full md:h-full object-cover" />  
                <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent'></div>  
                <div className='absolute bottom-0 left-0 right-0 text-white text-center p-2'>  
                    <p className='text-lg md:text-4xl text-left ml-10 mb-10'>We're Back in the Premier League, Celebrating the Triumph of Football Excellence!</p>  
                </div>  
            </div>  
        </div>

{/* End Feature Section */}


{/* Feature Section Videos */}

<div className='flex flex-wrap mx-4 md:mx-20 text-black text-xl font-semibold'>  
{/* First Card */}
<div className='relative w-full sm:w-1/3 md:w-1/5 h-auto py-2 md:pr-2 md:py-0'> 
  <Image src={Selfie} alt="Selfie" className="h-32 w-full object-cover" /> 
  {/* Overlay visible only on mobile */}
  <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none md:hidden'></div> 
  <div className='absolute bottom-0 left-0 right-0 text-white  md: text-center md:text-left p-2 md:text-black'>  
    <div className='flex items-center justify-center md:justify-start'>
      <img src={ButtonPlay.src} alt="play" className="h-10 md:h-12" /> 
      <h1 className='text-lg ml-2'>Watch: A Nice</h1>
    </div>
    <h1 className="mt-1 md: ">Goal on our way to the Premier League.</h1> 
  </div>
</div> 

{/* Second Card */}
<div className='relative w-full sm:w-1/3 md:w-1/5 h-auto py-2 md:px-2 md:py-0'> 
  <Image src={Champs} alt="Champs" className="h-32 w-full object-cover" /> 
  {/* Overlay visible only on mobile */}
  <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none md:hidden'></div> 
  <div className='absolute bottom-0 left-0 right-0 text-white md:mb-7 text-center md:text-left p-2 md:text-black'>  
    <div className='flex items-center justify-center md:justify-start'>
      <img src={ButtonPlay.src} alt="play" className="h-10 md:h-12" /> 
      <h1 className='text-lg ml-2'>Watch: Every</h1>
    </div>
    <h1 className="mt-1md:mb-7 ">Way to Finish The Season.</h1> 
  </div>
</div> 

{/* Third Card */}
<div className='relative w-full sm:w-1/3 md:w-1/5 h-auto py-2 md:px-2 md:py-0'> 
  <Image src={Store} alt="Store" className="h-32 w-full object-cover" /> 
  {/* Overlay visible only on mobile */}
  <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none md:hidden'></div> 
  <div className='absolute bottom-0 left-0 right-0 text-white md:mb-7 text-center md:text-left p-2 md:text-black'>  
    <div className='flex items-center justify-center md:justify-start'>
      <img src={ButtonPlay.src} alt="play" className="h-10 md:h-12" /> 
      <h1 className='text-lg ml-2'>Watch: Take a</h1>
    </div>
    <h1 className="mt-1">Walk into our fan store.</h1> 
  </div>
</div> 

  
  {/* Fourth Card */}
  <div className='relative w-full sm:w-1/3 md:w-2/5 h-auto pt-2 md:pt-0'>  
    <Image src={Team} alt="Team" className='h-64 w-full object-cover' /> {/* Default height on PC */}  
    <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none'></div>  
    <div className='absolute bottom-0 left-0 right-0 text-white text-center p-2'>  
        <p className='text-lg md:text-2xl text-left ml-4 mb-2 font-light'>We're Back in the Premier League, Celebrating the Triumph of Football Excellence!</p>  
    </div>  
</div>  
</div>

{/* End Features Section */}

{/* More Videos Button */}

<div className="flex items-center justify-center relative pt-10">
            <div className="flex-grow h-1 bg-darkBlue ml-20" />
            <div className="border-4 border-darkBlue p-2 text-center lg:text-3xl text-black lg:pr-28">
                More Videos        
            </div>
            <div className="flex-grow h-1 bg-darkBlue mr-20" />
        </div> 

{/* End More Videos Button */}

{/* MATCHES */}

<div className='mx-5 md:mx-20'>
  <h1 className='text-2xl md:text-4xl mt-10 md:mt-20 font-bold'>Next Events</h1>

  <div className='flex flex-col md:flex-row items-center'>
    <img src={Filter.src} alt="filter" className="h-10 md:h-14 py-5" />
    <h1 className='text-xl font-bold py-4 pl-3'>Filter teams (1)</h1>
  </div>

  <div className='flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0'>
    {/* Card 1 - Stadium */}
    <div className='flex flex-col w-full md:w-1/3'>
      <div className='bg-darkBlue flex items-center justify-center h-48 md:h-60 lg:h-72'>
        <img src={Stadium.src} alt="stadium" className="h-24 md:h-40 lg:h-48" />
      </div>
      <div className='shadow-custom p-5 md:p-6 flex-grow h-auto'>
    <h1 className='text-xs text-gray-500 lg:text-sm mb-2'>Football • First Team • Male</h1>
    <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>Training</h2>
    <h3 className='font-extrabold text-sm lg:text-base pt-1 mb-3'>Behind closed doors</h3>
    
    <div className='flex mb-4'>
      <div className='flex-col space-y-3 lg:space-y-4 pt-1'>
        <img src={Calender.src} alt="calendar" className="h-3 lg:h-4" />
        <img src={Location.src} alt="location" className="h-4 lg:h-5" />
        <img src={Press.src} alt="press" className="h-4" />
      </div>
      <div className='pt-1 pl-4 space-y-1'>
        <p className='text-sm lg:text-base font-extrabold'>Wednesday, 7 June, 11 am</p>
        <p className='text-sm lg:text-base font-extrabold'>King Power Stadium</p>
        <p className='text-sm lg:text-base font-extrabold'>Press Conference: no</p>
      </div>
    </div>

    <div className='flex pt-6 lg:pt-10 text-gray-500'>
      <img src={More.src} alt="more" className="h-3 lg:h-4 pt-1" />
      <h1 className='text-xs lg:text-sm pl-1'>More</h1>
    </div>
  </div>
    </div>

    {/* Card 2 - Premier League */}
    <div className='flex flex-col w-full md:w-1/3'>
  <div className='bg-darkBlue flex items-center justify-around h-48 md:h-60 lg:h-72'>
    <div className='text-center'>
      <img src={LcfcLogo.src} alt="LCFC" className="h-14 md:h-16 lg:h-20 mx-auto" />
      <p className='text-xs-custom text-white lg:text-xs-custom'>Leicester City FC</p>
    </div>
    <img src={PL.src} alt="PL" className="h-14 md:h-16 lg:h-20" />
    <div className='text-center'>
      <img src={McfcLogo.src} alt="MCFC" className="h-14 md:h-16 lg:h-20 mx-auto" />
      <p className='text-xs-custom text-white lg:text-xs-custom'>Manchester City FC</p>
    </div>
  </div>

  <div className='shadow-custom p-5 md:p-6 flex-grow h-auto'>
    <h1 className='text-xs text-gray-500 lg:text-sm mb-2'>Football • First Team • Male</h1> {/* Increased bottom margin */}
    <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>Premier League</h2> {/* Increased bottom margin */}
    <h3 className='font-extrabold text-sm lg:text-base pt-1 mb-3'>Match Day 1</h3> {/* Increased bottom margin */}
    
    <div className='flex mb-4'> {/* Added margin bottom to the flex container */}
      <div className='flex-col space-y-3 lg:space-y-4 pt-1'>
        <img src={Calender.src} alt="calendar" className="h-3 lg:h-4" />
        <img src={Location.src} alt="location" className="h-4 lg:h-5" />
      </div>
      <div className='pt-1 pl-4 space-y-1'>
        <p className='text-sm lg:text-base font-extrabold'>Saturday, 7 August, 1 pm</p>
        <p className='text-sm lg:text-base font-extrabold'>King Power Stadium</p>
      </div>
    </div>

    <div className='flex pt-6 lg:pt-10 text-gray-500'>
      <img src={More.src} alt="more" className="h-3 lg:h-4 pt-1" />
      <h1 className='text-xs lg:text-sm pl-1'>More</h1>
    </div>
  </div>
</div>



    {/* Card 3 - FA Cup */}
    <div className='flex flex-col w-full md:w-1/3'>
      <div className='bg-darkBlue flex items-center justify-around h-48 md:h-60 lg:h-72'>
        <div className='text-center'>
          <img src={LcfcLogo.src} alt="LCFC" className="h-14 md:h-16 lg:h-20 mx-auto" />
          <p className='text-xs-custom text-white'>Leicester City FC</p>
        </div>
        <img src={FA.src} alt="FA Cup" className="h-14 md:h-16 lg:h-20" />
        <div className='text-center'>
          <img src={LufcLogo.src} alt="LUFC" className="h-14 md:h-16 lg:h-20 mx-auto" />
          <p className='text-xs-custom text-white'>Leeds United FC</p>
        </div>
      </div>
      <div className='shadow-custom p-5 md:p-6 flex-grow h-auto'>
    <h1 className='text-xs text-gray-500 lg:text-sm mb-2'>Football • First Team • Male</h1> {/* Increased bottom margin */}
    <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>FA Cup</h2> {/* Increased bottom margin */}
    <h3 className='font-extrabold text-sm lg:text-base pt-1 mb-3'>Final</h3> {/* Increased bottom margin */}
    
    <div className='flex mb-4'> {/* Added margin bottom to the flex container */}
      <div className='flex-col space-y-3 lg:space-y-4 pt-1'>
        <img src={Calender.src} alt="calendar" className="h-3 lg:h-4" />
        <img src={Location.src} alt="location" className="h-4 lg:h-5" />
      </div>
      <div className='pt-1 pl-4 space-y-1'>
        <p className='text-sm lg:text-base font-extrabold'>Sunday, 15 August, 8 pm</p>
        <p className='text-sm lg:text-base font-extrabold'>Wembly Stadium</p>
      </div>
    </div>

    <div className='flex pt-6 lg:pt-10 text-gray-500'>
      <img src={More.src} alt="more" className="h-3 lg:h-4 pt-1" />
      <h1 className='text-xs lg:text-sm pl-1'>More</h1>
    </div>
  </div>

    </div>
  </div>
</div>

{/* End Matches */}

{/* ADVERT */}

        <div className='bg-darkBlue h-20 md:h-72 text-center mt-10 md:mt-20 flex justify-center'>
          <img src={Dp.src} alt="AD" className="h-full  md:h-full py-2 md:py-10" />
        </div>

{/* end Advert */}

{/* Start Patners Button */}
        <div className="flex items-center justify-center relative pt-10 md:pt-20">
            <div className="flex-grow h-1 bg-darkBlue ml-20" />
            <div className="border-4 border-darkBlue p-2 text-center lg:text-3xl text-black lg:pr-28">
                Our Patners       
            </div>
            <div className="flex-grow h-1 bg-darkBlue mr-20" />
        </div> 

{/* End Patners Button */}

{/* Start Patners */}

        <div className="flex items-center justify-center space-x-8 md:space-x-44 pt-5">
  <img src={FB.src} alt="play" className="h-10 w-auto lg:h-32 lg:w-auto" />
  <div className="h-10 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Responsive divider */}
  
  <img src={KP.src} alt="play" className="h-10 w-auto lg:h-40 lg:w-auto" />
  <div className="h-10 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Responsive divider */}
  
  <img src={ADD.src} alt="play" className="h-10 w-auto lg:h-32 lg:w-auto" />
</div>

<div className="flex items-center justify-center space-x-5 md:space-x-10 pt-5 flex-wrap"> {/* Added flex-wrap */}
  <img src={C.src} alt="play" className="h-12 w-auto lg:h-36 lg:w-auto" />
  <div className="h-12 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Visible divider */}
  
  <img src={M.src} alt="play" className="h-12 w-auto lg:h-36 lg:w-auto" />
  <div className="h-12 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Visible divider */}
  
  <img src={PSP.src} alt="play" className="h-12 w-auto lg:h-36 lg:w-auto" />
  <div className="hidden md:block h-12 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Visible divider */}
  
  <img src={BS.src} alt="play" className="h-12 w-auto lg:h-36 lg:w-auto" />
  <div className="hidden md:block h-12 w-0.5 lg:w-1 bg-blue-900 lg:h-28"></div> {/* Visible divider */}
  
  <img src={MD.src} alt="play" className="h-12 w-auto lg:h-36 lg:w-auto" /> {/* Consistent height */}
</div>

{/* End Patners */}

    </div> 
  );  
}  

export default Body;