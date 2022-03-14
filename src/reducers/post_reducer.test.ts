
import {createNewPostAC, deletePostAC, initialPostStateType, post_reducer} from "./post_reducer";
import {v1} from "uuid";

test('add new post', () => {
    const id1 = v1()
    const startState: initialPostStateType = {
        posts: [
            {message: 'Привет.', id: '1', like: 0},
            {message: 'Я тут!', id: '1', like: 0},
            {message: '1', id: '1', like: 0},
            {message: '2', id: '1', like: 0},
            {message: '3', id: '1', like: 0},
        ]
    }
    const action = createNewPostAC('some',id1);

    const endState = post_reducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {message: 'some',id: id1 , like: 0},
            {message: 'Привет.', id: '1', like: 0},
            {message: 'Я тут!', id: '1', like: 0},
            {message: '1', id: '1', like: 0},
            {message: '2', id: '1', like: 0},
            {message: '3', id: '1', like: 0},
        ]
    });
    expect(endState.posts.length).toBe(6)
    expect(endState.posts[0].message).toBe('some')
});
test('delete post', () => {

    const startState: initialPostStateType = {
        posts: [
            {message: 'Привет.', id: '1', like: 0},
            {message: 'Я тут!', id: '2', like: 0},
            {message: 'Мои первые посты', id: '3', like: 0},
            {message: 'Лайки', id: '4', like: 0},
            {message: 'Да', id: '5', like: 0},
        ]
    }
    const action = deletePostAC('5');

    const endState = post_reducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {message: 'Привет.', id: '1', like: 0},
            {message: 'Я тут!', id: '2', like: 0},
            {message: 'Мои первые посты', id: '3', like: 0},
            {message: 'Лайки', id: '4', like: 0},
        ]
    });
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].message).toBe('Лайки')
});