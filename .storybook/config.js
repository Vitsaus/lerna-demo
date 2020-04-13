/*
import {addDecorator, configure} from '@storybook/react';
import '@storybook/addon-console';
import {jsxDecorator} from "storybook-addon-jsx";
import * as React from "react";
import { ThemeProvider } from 'styled-components';
//import {theme} from "../src/theme";

addDecorator((storyFn) => {
    console.log('got storybook theme', theme);
    return (
        <ThemeProvider theme={theme}>
            {storyFn()}
        </ThemeProvider>
    )
});

addDecorator(jsxDecorator);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
*/

import * as React from "react";
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from "storybook-addon-jsx";

const req = require.context('../packages', true, /.story.tsx?$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(jsxDecorator); 
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
