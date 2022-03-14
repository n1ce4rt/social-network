

import {auth_reducer, authMeAC, initialAuthStateType} from "./auth_reducer";

test('status must be change', () => {

    const startState: initialAuthStateType = {
        email: null,
        id: null,
        login: null,
        isAuth: null,
    }
    const action = authMeAC({
        email: 'nice.lol.1994@gmail.com',
        id: 123,
        login: 'Arthur',
        isAuth: true
    });

    const endState = auth_reducer(startState, action)

    expect(endState).toEqual({
        email: 'nice.lol.1994@gmail.com',
        id: 123,
        login: 'Arthur',
        isAuth: true
    });
});