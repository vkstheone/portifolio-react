import Link from "next/link";

// icons

import { 
  RiGithubFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from 'react-icons/ri'

const Socials = () => {
  return (
      <div className="flex items-center gap-x-5 text-3xl">
        <Link href={'https://github.com/vkstheone'} className="hover:text-accent transition-all duration-300" >
          <RiGithubFill />
        </Link>
        <Link href={'https://www.linkedin.com/in/viniciuskener/'} className="hover:text-accent transition-all duration-300" >
          <RiLinkedinBoxFill />
        </Link>
        <Link href={'https://www.instagram.com/kener.code/'} className="hover:text-accent transition-all duration-300" >
          <RiInstagramFill />
        </Link>
        
        <Link href={'https://www.youtube.com/@vinicius-kener/'} className="hover:text-accent transition-all duration-300" >
          <RiYoutubeFill />
        </Link>
        
      </div>)
};

export default Socials;
