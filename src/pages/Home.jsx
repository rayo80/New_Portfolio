import React from 'react';
import OwnSection from '../components/OwnSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner'
//import OnviewAnimation from '../components/OnviewAnimation'


const Home = () => {
    return ( 
        <div>
            <OwnSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <ContactBanner/>
        </div>
     );
}
 
export default Home;