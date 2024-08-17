import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

const ProjectsBtn = () => {
  return (
    <Link href="/work">
      <div 
        className="relative w-[185px] h-[185px] flex 
        justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
      >
        <Image 
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow  w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight 
          className="absolute text-4xl group-hover:translate-x-2
          transition-all duration-300"
        />
      </div>
    </Link>
  );
};

export default ProjectsBtn;
