import { storiesOf } from '@storybook/react';
import React from 'react';

import { Loader } from './Box';
import { Button } from '@opr-finance/component-button';

storiesOf('Box', module)
  .add('default', () => <Loader>Hello world!</Loader>)
  .add('with button', () => <Loader><Button onClick={() => { alert('button click!'); }}>Button!</Button></Loader>)
