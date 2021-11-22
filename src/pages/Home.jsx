import React from 'react';
import OwnSection from '../components/OwnSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner'

import Box from '../components/Box'

const Home = () => {
    return ( 
        <div>
            <OwnSection/>
            <Box/>
            <ProjectsSection/>
            <AboutSection/>
            <ServiceSection/>
            <ContactBanner/>
        </div>
     );
}
 
export default Home;