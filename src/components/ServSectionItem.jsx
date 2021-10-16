import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  width: 30%;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
    p{
        margin-top: 2rem;
    }
  }
`;

const ServSectionItems = ({  
  icon = <MdDesktopMac />,
  title = 'Web Design',
  descr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) => {
    return ( 
        <ItemStyles className="servicesItem">
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{descr}</PText>
        </ItemStyles>
     );
}
 
export default ServSectionItems;