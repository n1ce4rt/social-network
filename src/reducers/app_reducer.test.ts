import {app_reducer, setStatusAC} from "./app_reducer";
import {initialAppStateType} from "./app_reducer";

test('status must be change', () => {

    const startState: initialAppStateType = {
        status: 'nice'
    }
    const action = setStatusAC('some');

    const endState = app_reducer(startState, action)

    expect(endState).toEqual({
        status: 'some'
    });

});