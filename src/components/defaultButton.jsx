import React from "react";

function button(props){
    const {className,onClick,type,content}=props
    return (
        <button className={className} type={type} onClick={onClick}>
            {content}
        </button>
    );
}

export default button