import React, {ReactNode} from "react";

export type BoxProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    return (
        <div onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            if (props.onClick) props.onClick(event);
        }}>
            {props.children}
        </div>
    )
};
