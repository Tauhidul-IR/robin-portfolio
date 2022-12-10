import React from 'react';
import Banner from './Banner';
import ContactInfo from './ContactInfo';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;