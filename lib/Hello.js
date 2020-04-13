import React from "react";
import { HelloWorld } from "@opr-finance/feature-a";
import { Button } from "@opr-finance/component-button";
export var Hello = function () {
    return (React.createElement("div", null,
        React.createElement(Button, { onClick: function () {
                alert('hello!');
            } },
            React.createElement(HelloWorld, null))));
};
//# sourceMappingURL=Hello.js.map