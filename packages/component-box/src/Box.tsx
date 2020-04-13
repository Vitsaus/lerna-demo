import React, {ReactNode} from "react";

export type BoxProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
};
