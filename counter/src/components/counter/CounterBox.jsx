import React from "react";

export function CounterBox(count) {
    return(
        <div className="counterComp">
            <h1>{ count.num }</h1>
        </div>
    );
}