import React from "react";

export function CardComp({ size, children }) {
    return (
        <div sx={{ minWidth: size }}>
            {children}
        </div>
    );
}