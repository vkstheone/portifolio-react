import me from "./me.jpg"
import react,{useState} from "react";

import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

 // icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  
  FaSass,

} from "react-icons/fa";
import Image from "next/image";

const About = () => {
  // const [index,setIndex] = useState(0)
  // console.log(index)
  return(
    <div>
      <div className='p-20 flex flex-col items-center justify-center whitespace-nowrap mt-7 xl:mt-0 text-xs xl:text-lg xl-mx-20  '>
            <h1 className="mx-[100px] text-sm xl:text-2xl mt-8 xl:mt-0 xl:mx-[50px]">Sobre mim</h1>
            <p>Futuro Desenvolvedor Front-end</p>
      </div>
      
      <div>
        <div className="absolute  top-[180px] xl:top-[180px] xl:my-[-50px] xl:px-[180px] ">
              <h6 className="hidden text-center mb-3 xl:block">Sobre mim</h6>
              <motion.p variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" 
              className="px-5 xl:w-[350px]  xl:text-xs text-[10px]">
              Sou um desenvolvedor recém-formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e por resolver 
              problemas de forma criativa. Durante minha graduação, adquiri uma sólida base em desenvolvimento de software,
              Tenho uma forte curiosidade por aprender novas tecnologias e metodologias ágeis, sempre buscando me atualizar 
              e aprimorar minhas habilidades. Trabalhei em diversos projetos acadêmicos que me permitiram aplicar na prática
               os conhecimentos adquiridos, e estou pronto para enfrentar desafios reais no mercado de trabalho.
              Busco minha primeira oportunidade como desenvolvedor, onde eu possa contribuir com minha dedicação, proatividade 
              e vontade de aprender. Estou entusiasmado para colaborar em uma equipe dinâmica e continuar evoluindo 
              profissionalmente, sempre focado em entregar soluções eficientes e inovadoras.
              </motion.p>
                
                <div className=" xl:text-2xl px-6 xl:flex xl:flex-col xl:gap-x-6 xl:gap-y-4 xl:mt-2">
                          <h6 className=" xl:mt-5 px-6 mt-8">Skills</h6>
                  <div className="flex items-center gap-x-3">
                    <FaHtml5/>
                    <p className="xl:text-sm">Html 5</p>
                  </div>
                  <div className=" xl:flex xl:items-center xl:gap-x-3">
                    <FaCss3/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">Css</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaJs/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">JavaScript</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaSass/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">Sass</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaReact/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">React Js</p>
                  </div>
                  
              </div>
        </div>


      </div>
      <div>
        
        <div style={{borderRadius:"50%"}} className="hidden xl:block border-solid border-2 border-white xl:absolute absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 ">
        <Image style={{height:"100%", width:"100%", objectFit:'contain',borderRadius:"50%"}} src={me} width={300} height={200} alt=""/>
        </div>

        

        <div className="absolute hidden xl:top-[174px] mt-5 sm:block top-[340px] right-5 xl:right-[170px]">
          <h4>Detalhes</h4>
          <div className="p-y-4 flex  gap-1 mt-4">
            <p className="text-white text-xs xl:text-lg">Nome:</p>
            <p className="text-xs xl:text-lg ">Vinicius Souza</p>
          </div>
          <div className="p-y-4 flex  gap-5 mt-3">
            <p className="text-white text-xs xl:text-lg">Idade:</p>
            <p className="text-xs xl:text-lg">23 Anos</p>
          </div>
          <div className="p-y-4 flex  gap-1 mt-3">
            <p className="text-white text-xs xl:text-lg">Endereço:</p>
            <p className="text-xs xl:text-lg">Itabira , Minas Gerais</p>
          </div>
          <div className="p-y-4 flex  gap-1 mt-3">
            <p className="text-white text-xs xl:text-lg">Email :</p>
            <p className="text-xs xl:text-lg">vks7pp@gmail.com</p>
          </div>
        </div>

        <div className=" hidden xl:block absolute xl:top-[60%] right-[180px]">
          <h6 className="text-center	">
            Formação
          </h6>
          <p className="text-center	mt-2">
            Analise e Desenvolvimento de Sistemas
          </p>
        </div>

      </div>
    </div>
  )
  
};

export default About;
