import Image from 'next/image';

import Link from 'next/link';

import Socials from '../components/Socials';
import { HiArrowDown, HiArrowRight, HoArrowRight } from 'react-icons/hi2'


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center
  px-16 xl:px-0 xl:h-[90px]">
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row
            justify-between items-center gap-y-6 py-8'>
              
              <Link href={'../public/Vinicius Souza (1).pdf'}>            
                <div className='flex mt-10 justify-between items-center'>
                <HiArrowDown className="absolute text-4xl "/>
             
                <h1 className='p-10 text-sm xl:text-2xl mt-8 xl:mt-0 '>Baixar Corriculo</h1>
                </div>
             
              
              </Link>
              <Socials />
            </div>
          </div>
    </header>;
};

export default Header;
  