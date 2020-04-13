import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Box } from './Box';
import { Button } from '@opr-finance/component-button';
storiesOf('Box', module)
    .add('default', function () { return React.createElement(Box, null, "Hello world!"); })
    .add('with button', function () { return React.createElement(Box, null,
    React.createElement(Button, { onClick: function () { alert('button click!'); } }, "Button!")); });
//# sourceMappingURL=Box.story.js.map