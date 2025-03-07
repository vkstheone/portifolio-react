import WorkSlider from '../../components/WorkSlider'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'


const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8 mb-[200px] xl:mb-0 '>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-center mb-4 xl:mb-0 '>
          
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-20 text-lg
           mt-60 xl:text-[3rem]'>Meus Projetos <span className='text-accent '>.</span>
          </motion.h2>
          
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-xs lg:ml-64 xl:ml-0 xl:text-lg'>"Desenvolvi diversos projetos utilizando
            React, CSS, JavaScript, HTML e Sass, focando em interfaces de usuário responsivas e dinâmicas. Minha experiência 
            inclui a criação de componentes reutilizáveis, otimização de desempenho e integração com APIs. Cada projeto reflete
            um compromisso com design moderno e boas práticas de desenvolvimento front-end."
            Esse resumo destaca as principais tecnologias e as habilidades que você aplicou nos projetos. 
          </motion.p>
        </div>
       
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <WorkSlider/>
        </motion.div>
      </div>

    </div>

  </div>;
};

export default Work;
