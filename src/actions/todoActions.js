import axios from 'axios';
import taskReducer from '../Semana6';

export const ACTION_TYPES = {
    addTodo: "ADD_TODO",
    addTodoSuccess: "ADD_TODO_SUCCESS",
    addTodoFail: "ADD_TODO_FAIL",
    deleteTodo: "DELETE_TODO",
    deleteTodoSuccess: "DELETE_TODO_SUCCESS",
    deleteTodoFail: "DELETE_TODO_FAIL",
    getTodos: "GET_TODOS",
    getTodoSuccess: "GET_TODO_SUCCESS",
    getTodoFail: "GET_TODO_FAIL"
};

// Action Creator

export const addTodo = () => {
    return {
        type: ACTION_TYPES.addTodo,
    }
};

export const addTodoSuccess = (todo) => {
    return {
        type: ACTION_TYPES.addTodoSuccess,
        payload: todo,
    }
};

export const addTodoFail = (err) => {
    return {
        type: ACTION_TYPES.addTodoFail, 
        payload: err,
    }
};

export const deleteTodo = () => {
    return {
        type: ACTION_TYPES.deleteTodo,
    }
};

export const deleteTodoSuccess = (id) => {
    return {
        type: ACTION_TYPES.deleteTodoSuccess,
        payload: id,
    }
};

export const deleteTodoFail = (err) => {
    return {
        type: ACTION_TYPES.deleteTodoFail,
        payload: err,
    }
};

export const getTodos = () => {
    return {
        type: ACTION_TYPES.getTodos,
    }
};

export const getTodoSuccess = (todo) => {
    return {
        type: ACTION_TYPES.getTodoSuccess,
        payload: todo,
    }
};

export const getTodoFail = (err) => {
    return {
        type: ACTION_TYPES.getTodoFail,
        payload: err,
    }
};

// THUNK getAllTodos

export const getAllTodos = () => {
    return function (dispatch) {
        dispatch(getTodos());
        return axios("https://todos-go.herokuapp.com/api/todos")
            .then((res) => dispatch(getTodoSuccess(res.data)))
            .catch((err) => dispatch(getTodoFail(err)));
    };
};

// THUNK addTodo

export const addTodoThunk = (todo) => {
    return (dispatch) => {
        dispatch(addTodo());
        return axios
            .post("https://todos-go.herokuapp.com/api/todos", todo)
            .then((res) => dispatch(addTodoSuccess(res.data)))
            .catch((err) => dispatch(addTodoFail(err)));
    };
};

//THUNK deleteTodo

export const deleteTodoThunk = (todoId) => {
    return (dispatch) => {
        dispatch(deleteTodo());
        return axios
            .delete(`https://todos-go.herokuapp.com/api/todos/${todoId}`)
            .then(() => dispatch(deleteTodoSuccess()))
            .catch((err) => dispatch(deleteTodoFail(err)))
    };
};

