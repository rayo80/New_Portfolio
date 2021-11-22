import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import PText from '../components/PText'
import AboutImg from '../assets/images/about-sec-img.png'
import styled from 'styled-components';

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const  AboutSectionStyle = styled.div`
    padding: 10rem 0;
    margin-top:0.5rem;
    .container{
        display:flex;
        align-items: center;
        justify-content: flex-start;
    }
    .aboutSectionLeft,
    .aboutSectionRight{
        flex :1;
    }
    .aboutSectionButtons{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        margin-top:2rem;
        gap:2rem;
    }
    .aboutSectionLeft{
        div{
            margin-top: 2rem;
            margin-left: 0;
            text-align: left;
        }
    }
    @media only screen and (max-width: 768px) {
        padding: 3rem;
        margin-top:10rem;
        .container {
            flex-direction: column;
            text-align: center;
        }
        .aboutSectionLeft,
        .aboutSectionRight {
            width: 100%;
        }
        .aboutSectionRight {
            margin-top: 3rem;
        }
        
        .aboutSectionLeft{
            div{
                text-align:center;
                margin: 0 auto;
                margin-top: 2rem;
            }
        }
        .aboutSectionButtons {
            flex-direction: column;
            gap: 0rem;
            div,
            a{
                width: 100%;
                text-align: center;
            }
        }
  }

`;

//caracteristicas de la animacion*/
const OwnSectMotion ={
    hidden:{
        x:"-100vh",
        opacity:0,
    },
    show:{
        opacity:1,
        x:"0",
        transition:{
            duration:1.5,
            ease:'easeInOut'}
    }
    
}


const Aboutme = () => {
    /*animacion codigo*/
    const controls = useAnimation();
    const [Ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("show");
        }
    }, [controls, inView]);
    

    return (
        <AboutSectionStyle  ref={Ref}> 
            <motion.div
            variants={OwnSectMotion}
            initial="hidden"
            animate={controls}  
            >
                    <div className="container">
                        <div className="aboutSectionLeft">
                            <SectionTitle subheading='Soy un subheading' heading='SOBRE MI'/>
                            <PText >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Fugiat aperiam iste provident blanditiis cum, amet eius.
                                Nesciunt nam eligendi quam consequuntur distinctio.
                                Veniam saepe doloremque ab blanditiis possimus nam inventore.
                            </PText>
                            <div className="aboutSectionButtons">
                                <Button btnLink="/projects" btnText="Trabajos"/>
                                <Button btnLink="/about" btnText="Read More" outline/>
                            </div>
                        </div>
                        <div className="aboutSectionRight">
                                <img src={AboutImg} alt="" />
                        </div>
                    </div>          
            </motion.div>
        </AboutSectionStyle>
        
    );
}
 
export default Aboutme;
