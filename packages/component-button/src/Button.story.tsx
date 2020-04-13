import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

storiesOf('Box', module)
    .add('default', () => <Button>Hello</Button>);
