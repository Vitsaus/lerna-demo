import React from "react";
export var Button = function (props) {
    return (React.createElement("button", { onClick: function (event) {
            if (props.onClick) {
                props.onClick(event);
            }
        } },
        "text: ",
        props.children));
};
//# sourceMappingURL=Button.js.map