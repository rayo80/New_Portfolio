import {React,useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import {MdMenu,MdClose} from 'react-icons/md';


const NavStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }
        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);   
        }

        .active{
            color: var(--light);
        }
    }
    .mobile-menu-icon{
        position:absolute;
        right: 3rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display:none;
    }
    .closeIcon {
        display: none;
    }
    @media only screen and (max-width:768px){
        padding: 0;
        .hide{
            /* animacion de transicion */
            transform : translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon{
            display:block;
        }
        .nav-resp{
            --top:1rem;
            position:absolute;
            right: 1rem;
            left:1rem;
            top: var(--top);
            transition:0.4s ease transform;
            padding:2rem;
            background: var(--dark-bg);
            border-radius:8px;
            .closeIcon{
                display: block;
                width:4rem;
                margin:0 0 0 auto;
            }
            li{
                display: block;
                text-align: center;
                margin-bottom:1rem;
            }
        } 
    }
`;

const NavMenu = () => {
    const[showNav,setShowNav] = useState(false);
    const mostrar =() => {
        setShowNav(!showNav);
        console.log(showNav);
        console.log('hola');
    }
    return (
        <NavStyles>
            <div className="mobile-menu-icon" onClick={mostrar} role='button'>
                <MdMenu/>
            </div>
            <ul className={!showNav ? 'nav-resp hide' : 'nav-resp'}>
                <div className="closeIcon" onClick={mostrar} onKeyDown={mostrar} role='button' >
                    <MdClose/>
                </div>
                <li>
                    <NavLink onClick={mostrar} to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={mostrar} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={mostrar} to="/projects"  activeClassName="active">
                        Proyectos
                    </NavLink>
                </li>
            </ul>
        </NavStyles>    
    );
}
 
export default NavMenu;
