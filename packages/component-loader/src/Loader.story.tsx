import { storiesOf } from '@storybook/react';
import React from 'react';

import { Loader } from './Loader';

storiesOf('Loader', module)
  .add('default', () => <Loader isLoading={true} />)
