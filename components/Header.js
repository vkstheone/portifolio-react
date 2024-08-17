
import Link from 'next/link';

import Socials from '../components/Socials';
import { HiArrowDown, HiArrowRight, HoArrowRight } from 'react-icons/hi2'


const Header = () => {
  return (
        <header className="absolute z-30 w-full flex mt-3  items-center sm:px-16 xl:px-0 ">
              <div className='container mx-auto'>
                <div className='flex flex-col gap-2 sm:flex-row justify-between items-center '>
              
                      <Link href={'/vini.pdf'} download>    
                      <button  className='items-centerrelative inline-flex items-center justify-center p-0.5 mt-2 mb-2 me-2 overflow-hidden 
                      text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
                       group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none
                        focus:ring-blue-300 dark:focus:ring-blue-800'>
                        
                        <span class=" flex  items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                        <HiArrowDown className="text-2xl "/>
                         Baixar corriculo
                        </span>
                      </button >
                      </Link>
              
                  <Socials />
                </div>
              </div>
          </header>
    );
};

export default Header;
  