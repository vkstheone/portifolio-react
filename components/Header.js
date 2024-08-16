
import Link from 'next/link';

import Socials from '../components/Socials';
import { HiArrowDown, HiArrowRight, HoArrowRight } from 'react-icons/hi2'


const Header = () => {
  return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 ">
              <div className='container mx-auto'>
                <div className='flex  lg:flex-row justify-between items-center '>
              
                      <Link href={'/cv.pdf'} download>    
                      <div className='flex  items-center'>
                        <HiArrowDown className="absolute text-4xl "/>
             
                        <h1 className='p-10 text-sm xl:text-2xl xl:mt-0 '>Baixar Corriculo</h1>
                      </div>
                      </Link>
              
                  <Socials />
                </div>
              </div>
          </header>
    );
};

export default Header;
  