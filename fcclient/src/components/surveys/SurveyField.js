import React from "react";
import TextField from '@material-ui/core/TextField';

export default ({ input, label, meta }) => {
    return (
        <div>
            <TextField {...input} style={{ marginBottom: '5px' }} id="outlined-basic" label={label} variant="outlined" />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {meta.touched && meta.error}
            </div>
        </div>
    );
};