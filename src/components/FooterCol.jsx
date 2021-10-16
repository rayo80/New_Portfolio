import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
    .heading{
        font-size :2.4rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom: 1rem;
    }
    a{
        font-size: 1.8rem;
    }

`

const FooterCol = (props) => {
    return (  
        <ColStyles>
            <h1 className="heading">{props.heading}</h1>
            <ul>
                {props.links.map((itemlink, index) => (
                    <li key={index}>
                        {itemlink.type === 'Link' ? (
                        <Link to={itemlink.path}>{itemlink.title}</Link>
                        ) : (
                        <a href={itemlink.path} target="_blank" rel="noreferrer">
                            {itemlink.title}
                        </a>
                        )}
                    </li>
                ))}
            </ul>
        </ColStyles>
    );
}
 
export default FooterCol;