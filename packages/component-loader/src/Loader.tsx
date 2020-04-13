import React from "react";

export type LoaderProps = {
    isLoading: boolean;
}

export const Loader = (props: LoaderProps) => {
    if (!props.isLoading) {
        return null;
    }
    return (
        <div>
            Loading...
        </div>
    )
};
