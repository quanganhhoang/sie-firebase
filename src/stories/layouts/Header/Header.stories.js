import React from 'react';
import '../../../scss/styles.scss';
import { Branding } from '../../components/Branding/Branding';
import { Header } from './Header';

/**
 * Example Component: Sidebar
 */
export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => {
  return (
    <Header {...args} />
  );
};

// Default Header
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  leftContent: <Branding text="SIE" />,
  rightContent:
        <a href="#">
            Some Link
        </a>,
};
