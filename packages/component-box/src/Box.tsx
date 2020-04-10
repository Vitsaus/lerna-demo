import React, {ReactNode} from "react";

type BoxProps = {
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
};
