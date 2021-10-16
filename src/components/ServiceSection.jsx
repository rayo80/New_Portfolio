import React from 'react';
import SectionTitle from './SectionTitle';
import ServSectionItem from './ServSectionItem';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';

const ServicesItemsStyles = styled.div`
    padding: 10rem 0;
    .services__allItems {
        display: flex;
        gap: 10rem;
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

const ServiceSection = () => {
    return (  
        <ServicesItemsStyles>
            <div className="container">
                <SectionTitle heading="Conocimientos" subheading="Esto es lo que puedo hacer"/>
                <div className="services__allItems">
                    <ServSectionItem
                        icon={<MdDesktopMac />}
                        title="web design"
                        descr="I do ui/ux design for the website that helps website to get a unique look."
                    />
                    <ServSectionItem
                        icon={<MdCode />}
                        title="web dev"
                        descr="I also develop the websites. I create high performance website with blazing fast speed."
                    />
                    <ServSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="app Dev"
                        descr="I develop mobile application. I create mobile app with eye catching ui. "
                    />                  
                </div>
                <div className="services__allItems">
                    <ServSectionItem
                        icon={<MdDesktopMac />}
                        title="web design"
                        descr="I do ui/ux design for the website that helps website to get a unique look."
                    />
                    <ServSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="app Dev"
                        descr="I develop mobile application. I create mobile app with eye catching ui. "
                    />                  
                </div>
            </div>
        </ServicesItemsStyles>
    );
}
 
export default ServiceSection;