import Typography from '@material-ui/core/Typography';
import { Story } from '@storybook/react';
import React from 'react';
import { Footer, FooterProps } from '../components/Footer';
import { PageSection, PageSectionProps } from '../components/PageSection';

export default {
  title: 'Page Components',
  component: PageSection,
};

const SectionTemplate: Story<PageSectionProps> = (args) => <PageSection {...args}>
  <Typography>
    Here's some content
  </Typography>
</PageSection>;
export const Section = SectionTemplate.bind({});
Section.args = {};
