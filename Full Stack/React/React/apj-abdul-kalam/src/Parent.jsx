import React from "react";

const Parent = ({name}) => {
        return (
            <div>Inside parent</div>
            <Child name="React"/>
            <p>my name is {name}</p>
        )
}

export default Parent