import Image from 'next/image';

import Link from 'next/link';

import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center
  px-16 xl:px-0 xl:h-[90px]">
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row
            justify-between items-center gap-y-6 py-8'>
              
              <Link href={''}>            
                <div className='flex mt-10 '>
              
              <Image src={'/cv.png'} 
              width={60} 
              height={48} 
              alt=''
              priority={true}
              />
                <h1 className='p-5 text-sm xl:text-2xl mt-8 xl:mt-0 '>Baixar Corriculo</h1>
                </div>
             
              
              </Link>
              <Socials />
            </div>
          </div>
    </header>;
};

export default Header;
  