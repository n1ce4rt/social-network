import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {ChangeEvent} from "react";

type setTextType = ChangeEvent<HTMLTextAreaElement| HTMLInputElement>
type propsType = {
    setText:  (e: string) => void
    text: string
}

export default function BasicTextFields({setText, text}: propsType) {

    const onChangeHandler =(e: setTextType) => {
        setText(e.currentTarget.value)
    }
    return (
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch'},}} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Шо там?" variant="outlined" onChange={(e: setTextType) => onChangeHandler(e)} value={text} color={'error'} />

        </Box>
);
}