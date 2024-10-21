import Foot from '../public/Images/footer.svg';
import FootM from '../public/Images/footer_mobile.svg';
import TRANS from '../public/Images/Transalate.svg';
import THREADS from '../public/Images/Threads.svg';
import TIK from '../public/Images/Tiktok.svg';
import IG from '../public/Images/Instagram.svg';
import FBOOK from '../public/Images/Facebook.svg';
import X from '../public/Images/twitter.svg';
import IN from '../public/Images/LinkedIn.svg';
import YT from '../public/Images/Youtube.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
<div className="relative font-deutschlander">
  {/* Background image */}
  <div className="relative">
    <Image src={Foot} alt="Background Image" className="h-full w-full" />
  </div>

  {/* Gradient overlay (on top of everything) */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4FA1]/30 to-[#0F4FA1]/0 pointer-events-none z-50"></div>

  {/* Footer content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 z-40">
    {/* Icons */}
    <div className="flex flex-wrap gap-4 mb-4 justify-center"> {/* Adjusted gap for mobile */}
      <a href="https://translate.google.com" target="_blank" rel="noopener noreferrer">
        <Image src={TRANS} alt="Translate" className="h-6 w-auto lg:h-20" width={40} height={40} /> {/* Adjusted icon size for mobile */}
      </a>
      <div className="h-8 w-0.5 lg:w-1 bg-white lg:h-20"></div> {/* Adjusted height for mobile */}
      <a href="https://www.tiktok.com/@lcfc?lang=en" target="_blank" rel="noopener noreferrer">
        <Image src={TIK} alt="Tik Tok" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://www.threads.net/@lcfc" target="_blank" rel="noopener noreferrer">
        <Image src={THREADS} alt="Threads" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://www.instagram.com/lcfc/?hl=en" target="_blank" rel="noopener noreferrer">
        <Image src={IG} alt="Instagram" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://www.facebook.com/lcfc" target="_blank" rel="noopener noreferrer">
        <Image src={FBOOK} alt="Facebook" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://x.com/lcfc" target="_blank" rel="noopener noreferrer">
        <Image src={X} alt="X" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://www.linkedin.com/company/leicester-city-football-club/" target="_blank" rel="noopener noreferrer">
        <Image src={IN} alt="LinkedIn" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
      <a href="https://www.youtube.com/user/LCFCOfficial" target="_blank" rel="noopener noreferrer">
        <Image src={YT} alt="YouTube" className="h-6 w-auto lg:h-20" width={40} height={40} />
      </a>
    </div>

    {/* Links */}
    <div className="flex flex-col items-center space-y-2">
      <div className="flex flex-wrap justify-center gap-2 mb-2"> {/* Adjusted gap for mobile */}
        {['ACCESSIBILITY', 'TAX STRATEGY', 'CONTACT', 'CARRIERS', 'COMPANY DETAILS', 'TERMS OF USE'].map((item) => (
          <Link key={item} href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} className="text-sm lg:text-6xl mt-2"> {/* Adjusted margin top for mobile */}
            {item}
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <Link href="/privacy-policy" className="text-sm lg:text-6xl">
          PRIVACY POLICY
        </Link>
      </div>
    </div>
  </div>

  {/* Copyright Text */}
  <div className="p-4 lg:p-6 text-center text-xs lg:text-xl text-darkBlue font-reem-kufi bg-white flex items-center justify-center z-40">
    <p>© All Copyright 2024</p>
    <p className="pl-1 font-chillax font-semibold">by billy chosee</p>
  </div>
</div>

  );
};

export default Footer;
