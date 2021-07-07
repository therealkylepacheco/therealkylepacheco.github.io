import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Prime } from './projects/Prime';
import { Chess } from './projects/Chess';

export type PageType = {
    comp?: React.FunctionComponent;
    title: string;
    route: string;
    subRoutes?: PageType[];
};

const Pages: PageType[] = [
    {
        comp: Home,
        title: 'Home',
        route: '/'
    },
    {
        comp: About,
        title: 'About',
        route: '/about',
    },
    {
        title: 'Projects',
        route: '/projects',
        subRoutes: [
            {
                comp: Prime,
                title: 'Prime',
                route: '/prime',
            },
            {
                comp: Chess,
                title: 'Chess',
                route: '/chess',
            }
        ],
    },
];

export default Pages;