import { storiesOf } from '@storybook/react';
import React from 'react';

import { Box } from './Box';
import { Button } from '@opr-finance/component-button';

storiesOf('Box', module)
  .add('default', () => <Box>Hello world!</Box>)
  .add('with button', () => <Box><Button onClick={() => { alert('button click!'); }}>Button!</Button></Box>)
