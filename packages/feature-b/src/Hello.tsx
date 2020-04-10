import React from "react";
import {HelloWorld} from "@opr-finance/feature-a";
import {Button} from "@opr-finance/component-button";

export const Hello = () => {
    return (
        <div>
            <Button onClick={() => {
                alert('hello!');
            }} >
                <HelloWorld />
            </Button>
        </div>
    )
}
