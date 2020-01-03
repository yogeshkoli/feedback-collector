import React from "react";

export default ({ input }) => {
    return (
        <div>
            <label>Title</label>
            <input {...input} />
        </div>
    );
};