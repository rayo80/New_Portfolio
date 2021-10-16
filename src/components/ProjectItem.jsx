import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

import ProjectImg from '../assets/images/imgProjects/projectImg.png';

const ProjectItemStyles= styled.div`
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius:12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .projectItem__info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem__title {
        font-size: 2.2rem;
    }
    .projectItem__descr {
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .projectItem__img {
            height: 350px;
        }
    }
`;


const ProjectItem = ({
    img= ProjectImg,
    title='U Tracker',
    desc='An application to track your all data from one place. I developed the website and the mobile app',
}) => {
    return ( 
        <ProjectItemStyles>
            <Link to="/projects" className="projectItem__img">
                <img src={img} alt=""/>
            </Link>
            <div className="projectItem__info">
                <Link to='#'>
                    <h1 className="projectItem__title">{title}</h1>
                </Link>
                <p className="projectItem__descr">
                    {desc}
                </p>
            </div>
        </ProjectItemStyles>
     );
}
 
export default ProjectItem;