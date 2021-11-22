import React from 'react';
import PText from './PText';
import Processor from '../components/Processorsvg';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const OwnStyle= styled.div`
    
    .container{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
    }
    .OwnSectLeft,
    .OwnSectRight{
        flex :1;
    }

    .own-img{
        max-width: 900px;
        width: 90%;
        height: 650px;
        margin: 0 10% auto;
        display: flex;
        align-content:center;
    }


    .OwnSectLeft{
        div{
            margin-top: 2rem;
            margin-left: 0;
            text-align: left;
        }
    }
    .own-info{
        margin-top:4rem;
        div{
            text-align: left;
        }
    }
    .own__heading{
        font-size:2rem;
        margin-bottom: 4rem;
        position: relative;
        .own__saludo{
            font-family: "Montserrat SemiBold";
            color: var(--light);
            font-size:7rem;
        }
    }

    @media only screen and (max-width: 768px){
        .container {
            height:90vh;
            flex-direction: column;
            align-content: flex-end;
        }

        .OwnSectRight {
            width: 100%;
        }
        .OwnSectLeft{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        
        .own__heading {
            text-align: center;
            display: inline-block;
            font-size: 1.4rem;
            margin-bottom: 2rem;
            .own__saludo {
                font-size: 4.5rem;
            }
        }
        .own-info {
            margin: 0 auto;
            padding:0 10%;
            div{
                text-align: center;
            }
        }
        .own-img {
            margin-top: 2rem;
            height: 300px;
            margin: 5% auto;
        }
    }
`;

//animacion para este componente
const OwnSectMotion ={
    hidden:{
        opacity:0,
        y:"20vh",
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:20,
        }
    }
}

const OwnSection = () => {
    return ( 
        <OwnStyle>
            <motion.div
            variants={OwnSectMotion}
            initial="hidden"
            animate="show"   
            >
                <div className="container">
                    <div className="OwnSectLeft">
                        <h1 className="own__heading">
                            <span className="own__saludo">Bienvenido</span>
                        </h1>
                        <div className="own-info">
                            <PText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Iusto soluta optio repudiandae earum beatae laborum.
                            </PText>
                        </div>
                     </div>
                    <div className="OwnSectRight">
                        <div className="own-img">
                            <Processor/>
                        </div>
                    </div>
                </div>
            </motion.div>    
        </OwnStyle>
     );
}
 
export default OwnSection;