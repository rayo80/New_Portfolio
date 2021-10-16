import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';


const FooterStyles = styled.div`
    padding-top: 8rem;
    background-color:var(--deep-dark);
    .container{
        display:flex;
        gap:1rem;
    }
    .footer__colum1,
    .footer__colum2{
        flex:1;
        margin-bottom:4rem;
    }

    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
    }
`;


const Footer = () => {
    return ( 
        <FooterStyles>
            <div className="container">
                <div className="footer__colum1">
                    <FooterCol heading="Contacto" links={[
                        {
                            title: '+992500025',
                            path: 'tel:+88012312',
                        },
                        {
                            title: 'webweb@gmail.com',
                            path: 'mailto:sergio.villa.m@gmail.com',
                        },
                        {
                            title: 'Lima,Lima,Peru',
                            path: 'http://google.com/maps',
                        },
                    ]}/>
                </div>
                <div className="footer__colum2">
                    <FooterCol heading="Redes Sociales" links={[
                        {
                            title: 'Facebook',
                            path: 'http://facebook.com',
                        },
                        {
                            title: 'Twitter',
                            path: 'http://twitter.com',
                        },
                        {
                            title: 'Instagram',
                            path: 'http://instagram.com',
                        },
                    ]}/>
                </div>
            </div>
        </FooterStyles>
     );
}
 
export default Footer;