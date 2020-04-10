import React, {ReactNode} from "react";

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            if (props.onClick) {
                props.onClick(event);
            }
        }}>
            text: {props.children}
        </button>
    )
};
