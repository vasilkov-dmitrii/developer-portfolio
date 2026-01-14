import React from "react";


export const Separator: React.FC<{text: string}> = ({text}) => {
    return <div className="separator" data-render={true}>
        <h2>{text}</h2>
    </div>
}