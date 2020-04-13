import React from 'react';
import { Button } from '@opr-finance/component-button';
import { Box } from "@opr-finance/component-box";
import { Hello } from "@opr-finance/feature-b";
import { HelloWorld } from "@opr-finance/feature-a";

function App() {
  return (
        <Box>
            <Box>
                <Hello />
            </Box>
            <Box>
                <HelloWorld />
            </Box>
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
