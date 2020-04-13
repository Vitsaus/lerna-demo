import React, { FunctionComponent } from "react";
import { BaseGrid, BaseGridProps } from "./Grid.styled";

export type GridProps = BaseGridProps;

export const GridContainer: FunctionComponent<GridProps> = (props) => {
    return (
        <BaseGrid display={"flex"} maxWidth={"976px"} width={"100%"} height={"100%"} {...props}>
            {props.children}
        </BaseGrid>
    );
};

export const FlexColumn: FunctionComponent<GridProps> = (props) => {
    return (
        <BaseGrid display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} {...props}>
            {props.children}
        </BaseGrid>
    );
};

export const FlexRow: FunctionComponent<GridProps> = (props) => {
    return (
        <BaseGrid
            display={"flex"}
            flexDirection={{
                default: "row",
                tablet: "column",
                mobile: "column",
            }}
            width={"100%"}
            height={"100%"}
            {...props}
        >
            {props.children}
        </BaseGrid>
    );
};

export const Grid: FunctionComponent<GridProps> = (props) => {
    return (
        <BaseGrid display={"flex"} width={props.width ?? "100%"} height={"100%"} {...props}>
            {props.children}
        </BaseGrid>
    );
};

export const GridContent: FunctionComponent<GridProps> = (props) => {
    return (
        <BaseGrid display={"flex"} height={"100%"} width={props.width ?? "100%"} padding={"8px"} {...props}>
            {props.children}
        </BaseGrid>
    );
};
