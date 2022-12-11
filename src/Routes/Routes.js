import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AllProjects from '../Pages/AllProjects/AllProjects';
import Home from '../Pages/Home/Home';
import ProjectBikroyBD from '../Pages/ProjectDetails/ProjectBikroyBD';
import ProjectFreePro from '../Pages/ProjectDetails/ProjectFreePro';
import ProjectTTravel from '../Pages/ProjectDetails/ProjectTTravel';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allProjects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/prejectBikroyBDInfo',
                element: <ProjectBikroyBD></ProjectBikroyBD>
            },
            {
                path: '/prejectTTravelInfo',
                element: <ProjectTTravel></ProjectTTravel>
            },
            {
                path: '/prejectFreeProInfo',
                element: <ProjectFreePro></ProjectFreePro>
            },
        ]
    }
])

export default router;