import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
import ServSectionItem from './ServSectionItem';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';


import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ServicesItemsStyles = styled.div`
    padding: 10rem 0rem;
    .services__allItems {
        display: flex;
        flex-wrap:wrap;
        gap: 8rem;
        justify-content: space-around;
        margin-top: 5rem;


    }

    @media only screen and (max-width: 768px) {
    .services__allItems {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;

        div{
          margin: 0 auto;
          width: 95%;
        }
    }
  }
`;

//animacion para este componente
const cont_animation ={
    hidden:{
        scale:0,
        opacity:1,
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            delayChildren: 0.2,
            staggerChildren: 0.5
        }
    } 
}



//

const ServiceSection = () => {

    const controls = useAnimation();
    const [Ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("show");
        }
      }, [controls, inView]);

    return (  
        <ServicesItemsStyles>
            <div className="container">
                <SectionTitle heading="habilidades" subheading="Esto es lo que puedo hacer"/>
                {/* <div className="services__allItems"> */}
                <motion.div
                    className="services__allItems"
                    variants={cont_animation}
                    ref={Ref}
                    initial="hidden"
                    animate={controls}
                >
                    <ServSectionItem
                        icon={<MdDesktopMac />}
                        title="Redes y telecomunicaciones"
                        descr="Nunca esta demás conocer aspectos fundamentales de las tecnologías  bases del mundo actual"
                    />
                    <ServSectionItem
                        icon={<MdCode />}
                        title="Desarrollo Web"
                        descr="Capacidad de desarrollar y mantener webs  con diferentes stacks de tecnologías en frontend o backend"
                    />
                    <ServSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="Computer vision"
                        descr="Uno de mis campos favoritos de IA , quizá no tenga mucho expertiz pero no le tengo miedo a ninguna CNN" 
                    />               
                {/* </div> */}

                    <ServSectionItem
                        icon={<MdDesktopMac />}
                        title="Cloud computing"
                        descr="Consciente de la importancia de las nubes: acceso a recursos de computo,red y almacenamiento online sin necesidad de infraestructura! "
                    />
                    <ServSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="IOT"
                        descr="Mi background tecnológico siempre me mantendrá atento a los casos de uso del IOT ,los frameworks y el hardware"
                    />                  
                </motion.div>
            </div>
        </ServicesItemsStyles>
    );
}
 
export default ServiceSection;