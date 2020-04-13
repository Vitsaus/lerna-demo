import styled from "styled-components";
import { space, layout, flexbox, position, SpaceProps, LayoutProps, FlexboxProps, PositionProps } from "styled-system";
import { FunctionComponent } from "react";

export type BaseGridProps = SpaceProps & LayoutProps & FlexboxProps & PositionProps;

export const BaseGrid: FunctionComponent<BaseGridProps> = styled.div<BaseGridProps>`
    flex-direction: row;
    @media (max-width: 786px) {
        flex-direction: column;
        width: 100%;
    }
    @media (min-width: 786px) and (max-width: 1080px) {
        flex-direction: column;
        width: 100%;
    }
    ${space}
    ${layout}
    ${flexbox}
    ${position}    
`;
