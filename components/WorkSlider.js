// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'HBO-Clone',
          path: '/hbo.png',
          link: 'https://vkstheone.github.io/hbo-clone/',
        },
        {
          title: 'Coofe-shop',
          path: '/coffe-shop.png',
          link: 'https://vkstheone.github.io/coffe-website/',
        },
        {
          title: 'Site de Filmes',
          path: '/movies-app.png',
          link: 'https://movies-olayw2xu0-vinicius-projects-87b5c566.vercel.app/',
        },
        {
          title: 'Loja de Camisas de futebol',
          path: '/shop.png',
          link: 'https://vkstheone.github.io/desafio-web/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Static Landing Pages',
          path: '/hbo.png',
          link: 'https://vkstheone.github.io/hbo-clone/',
        },
        {
          title: 'MERN stack project',
          path: '/coffe-shop.png',
          link: 'https://vkstheone.github.io/hbo-clone/',
        },
        {
          title: 'Awwarded',
          path: '/movies-app.png',
          link: 'https://vkstheone.github.io/hbo-clone/',
        },
        {
          title: 'Payment Gateway',
          path: '/shop.png',
          link: 'https://vkstheone.github.io/hbo-clone/',
        },
      ],
    },
    
    
  ],
};

// icons
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image';
import Link from 'next/link';


import {Pagination} from 'swiper'
import {BsArrowRight} from 'react-icons/bs'


const WorkSlider = () => {
  return(
    <Swiper
    spaceBetween={10}
    modules={[Pagination]}
    pagination={{ clickable:true }}
    className='h-[280px] sm:h-[480px] relative'
    >
       {
      workSlides.slides.map((slide,index)=>{
        return( 
        <SwiperSlide key={index}>
         
          
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image,index)=>{
              return(
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index}>
                  <div className='w-[250px] xl:w-[350px] flex items-center justify-center relative overflow-hidden group xl:h-[200px] h-[130px]'>
                    
                    <Link href={image.link}><Image src={image.path} width={500} height={300} alt={image.link}/>  
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                              opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                              group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem] '>
                            <div className='delay-100'>{image.title}</div>
                            <div className='translate-y-[500%] group:hover:translate-y-0 transition-all duration-300 delay-150'>Titulo part 2</div>
                           < div className='text-xl'><BsArrowRight/></div>
                        </div>
                           
                   </div>
                   </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
        )
      })
      }

    </Swiper>)
  
};

export default WorkSlider;

