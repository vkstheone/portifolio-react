"use client"

import Circles from '/components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

 
const Contact = () => {
  
  
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [assunto, setassunto] = useState("")
  const [message, setmessage] = useState("")
  //const [User,setUser] = useState("")

  const handleChange = (e, setter) => {
  };
  
  
  function sendEmail(e) {
    e.preventDefault();
    
    if(name == '' || email == '' || assunto == '' || message == ''){
      alert("Prencha todos os Campos")
      return;
    }

    
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_6mp5u1m", "template_rsdaec2", templateParams, "6cUlfheRqokYbjWCB")
    .then((response) =>{
      alert("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
      setname("")
      setemail("")
      setassunto("")
      setmessage("")
    }, (err) => {
      console.log("Erro:", err)
    })
  }




  return (<div className='h-full bg-primary/30 '>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 variants={fadeIn('up',0.2)} 
          initial="hidden"
          animate="show"
          exit="hidden" 
          className='h2 text-center mb-12 '
          >  Entre em  <span className='text-accent '>Contato.</span>
        </motion.h2>



              <form 
              onSubmit={sendEmail}
              variants={fadeIn('up',0.4)} 
              initial="hidden" 
              animate="show" exit="hidden" 
              className='flex-1 flex flex-col gap-6 w-full mx-auto '
              >
              <div className="flex gap-x-6 w-full">
                  <input 
                  type="text" 
                  placeholder='Nome' 
                  className='input' 
                  onChange={(e) => setname(e.target.value)} 
                  value={name}
                  />
                  
                  
                  <input type="email" 
                  placeholder='Email' 
                  className='input  text-transform-none' 
                  onChange={(e) => setemail(e.target.value)} 
                  value={email}/>
              
              
              
              </div>
                
            <div className=''>
                  <input type="text" 
                  placeholder='Assunto' 
                  className='input' 
                  onChange={(e) => setassunto(e.target.value)} 
                  value={assunto}/>
                  {/* <input type="text" placeholder='Message' className='input h-[200px] mt-8'/> */}
                  
                  <textarea  
                  placeholder='Digite Sua Mensagem ...' 
                  className='textarea mt-8 xl:h-40 h-20'
                  onChange={(e) => setmessage(e.target.value)} 
                  value={message} >
                  </textarea>
            </div>
                
                
                <input type="Submit"
                placeholder="Let's talkssss" 
                className='btn rounded-full border 
                cursor-pointer border-white/50 
                max-w-[170px] px-8 transition-all 
                duration-300 flex items-center 
                justify-center overflow-hidden 
                hover:border-accent group' 
                />
                
                <BsArrowRight className='mt-[-58px] ml-[130px]'/>
                <Circles />
              </form >
            



      </div>
    </div>
  </div>);
};

export default Contact;
