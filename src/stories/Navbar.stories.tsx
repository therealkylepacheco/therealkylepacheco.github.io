import React from 'react';
import { Story } from '@storybook/react';
import { Navbar, NavbarProps } from '../components/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template: Story<NavbarProps>  = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'About',
      route: '/about',
    },
    {
      title: 'Projects',
      route: '/projects',
      subRoutes: [
        {
          title: 'Test 1',
          route: '/test1',
        },
        {
          title: 'Test 2',
          route: '/test2',
        },
        {
          title: 'Test 3',
          route: '/test3',
        },
      ]
    },
  ]
};
