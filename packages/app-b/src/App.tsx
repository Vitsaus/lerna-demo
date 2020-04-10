import React from 'react';
import {Button} from '@opr-finance/component-button';
import {Box} from "@opr-finance/component-box";

function App() {
  return (
        <Box>
            <Box>Simple box</Box>
            <Box>
                <Button
                    onClick={() => {
                        alert('clicked!');
                    }}
                >
                    Button!
                </Button>
            </Box>
        </Box>
  );
}

export default App;
