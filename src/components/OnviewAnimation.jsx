import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from 'styled-components';

const  SectionStyle = styled.div`
    margin-top:0.5rem;
`;


//animacion para este componente
const OwnSectMotion ={
    hidden:{
        scale:0.1,
        opacity:1,
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            duration:100,
            ease:'easeInOut'}
    }
    
}



const OnviewAnimation = (props) => {

    const controls = useAnimation();
    const [Ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("show");
        }
      }, [controls, inView]);

    return (
            <motion.div
            ref={Ref}
            variants={OwnSectMotion}
            initial="hidden"
            animate={controls}  
            >
                <SectionStyle >
                    {props.children}
                </SectionStyle>    
            </motion.div>
        
    );
}
 
export default OnviewAnimation;