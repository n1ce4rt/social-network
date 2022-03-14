import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../state/store-redux";
import {statusType} from "../../../reducers/app_reducer";
import {getUsersTC} from "../../../reducers/users_reducer";


type propsType = {
    status: statusType
    page: number
}

export default function PaginationOutlined({status, page}: propsType) {
    const dispatch = useDispatch()

    const totalPages = useSelector<rootReducerType, number>((state)=> state.usersReducer.totalUserCount)
    return (
        <Stack spacing={2}>
            <Pagination page={page} count={totalPages} variant="outlined" onChange={(event, page)=>  dispatch(getUsersTC(page))} disabled={status === 'loading'}/>
        </Stack>
    );
}