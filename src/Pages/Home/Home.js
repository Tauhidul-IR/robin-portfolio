import React from 'react';
import Banner from './Banner';
import ContactInfo from './ContactInfo';
import Projects from './Projects/Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;