import React,{useState,useEffect} from 'react'
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';

import projects from '../assets/data/projects';

import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';


const ProjectsStyles =styled.div`
    padding: 10rem 0;
    .projects__allitems{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .projects_searchbar{
        position: relative;
        margin:auto;
        width: 300px;
        margin-top: 5rem;
    }
    .projects_searchbar input{
        width: 100%;
        font-size:2rem;
        padding: .8rem;
        color: var(--black);
        border-radius:6px;
        border: none;
    }
    .projects_searchbar .searchIcon{
        position: absolute;
        width:2rem;
        right:1rem;
        path{
            color: var(--black);
        }
    }
    @media only screen and (max-width: 768px) {
        .projects_searchbar,
        .projects_searchbar form,
        .projects_searchbar input{
            width: 100%;
        }
    }   
`;

const Projects = () => {
    const [searchText, setSearchText] = useState('');
    const[projectData,setProjectData]=useState(projects);


    /*la sgte funcion asignara projects(filtrado) a projectData*/
    const buscar = () => {
        if(searchText==='') setProjectData(projects);
        setProjectData(projects.filter((item)=>
        item.name.toLowerCase().match(searchText.toLowerCase())));
    }

    /*le da el valor a searchText*/
    const handleChange =(e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    useEffect(buscar,[searchText]);

    return ( 
        <ProjectsStyles>
            <div className="container">
                <SectionTitle heading="Proyectos" subheading="algunos trabajos recientes"/>
                <div className="projects_searchbar">
                    <form>
                        <input type="text"
                        value={searchText}
                        onChange={handleChange}
                        placeholder="nombre del proyecto"
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__allitems">
                    {projectData.map((item)=>(
                        <ProjectItem title={item.name} img={item.img} desc={item.desc} key={item.key}/>
                    ))}
                    
                </div>
            </div>
        </ProjectsStyles>
     );
}
 
export default Projects;