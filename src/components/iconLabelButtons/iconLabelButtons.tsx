import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type propsType = {
    onClick: ()=> void
    setText: (e: string) => void
}

export default function ColorButtons({onClick, setText}: propsType) {

    const onClickHandler =() => {
        onClick()
        setText('')
    }
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="error" onClick={()=> onClickHandler()}>
                Send
            </Button>
        </Stack>
    );
}