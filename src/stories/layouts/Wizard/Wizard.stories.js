import '../../../scss/styles.scss';

import React from 'react';
import { Wizard } from './Wizard';

/**
 * Example Component: Wizard
 */
export default {
    title: 'Example/Wizard',
    component: Wizard,
};

const Template = (args) => {
    return (
        <Wizard {...args}>
            <div className="step-1">
                <h3>Step 1</h3>
                Lorem ipsum dolor sit amet, an has summo
                riure epicuri, has illud rationibus et. Prima ridens sit te,
                nam idque explicari expetendis in. An mei adolescens mnesarchum,
                ei periculis adipiscing per, probo populo nec ad.
            </div>
            <div className="step-2">
                <h3>Step 2</h3>
                Lorem ipsum dolor sit amet, an has summo
                riure epicuri, has illud rationibus et. Prima ridens sit te,
                nam idque explicari expetendis in. An mei adolescens mnesarchum,
                ei periculis adipiscing per, probo populo nec ad.
            </div>
            <div className="step-3">
                <h3>Step 3</h3>
                Lorem ipsum dolor sit amet, an has summo
                riure epicuri, has illud rationibus et. Prima ridens sit te,
                nam idque explicari expetendis in. An mei adolescens mnesarchum,
                ei periculis adipiscing per, probo populo nec ad.
            </div>
            <div className="step-4">
                <h3>Step 4</h3>
                Lorem ipsum dolor sit amet, an has summo
                riure epicuri, has illud rationibus et. Prima ridens sit te,
                nam idque explicari expetendis in. An mei adolescens mnesarchum,
                ei periculis adipiscing per, probo populo nec ad.
            </div>
        </Wizard>
    );
};

// Wizard
export const Default = Template.bind({});
Default.args = {
    labels: [
        'Label 1',
        'Label 2',
        'Label 3',
        'Label 4',
    ],
};
