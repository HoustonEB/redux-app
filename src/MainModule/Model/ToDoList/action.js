
function addTodo(text, complete, show) {
    return {
        type: 'ADD_TODO',
        payload: { text, complete, show }
    }
}

function clearInput() {
    return {
        type: 'CLEAR_INPUT'
    }
}

function onInput(value) {
    return {
        type: 'ON_INPUT',
        payload: value
    }
}

function deleteTodo(index) {
    return {
        type: 'DELETE_TODO',
        payload: index
    }
}

function toggleComplete(index) {
    return {
        type: 'TOGGLE_COMPLETE',
        payload: index
    }
}

function toggleViewComplete(status) {
    return {
        type: 'TOGGLE_VIEW_COMPLETE',
        status
    }
}

export {
    addTodo,
    clearInput,
    onInput,
    deleteTodo,
    toggleComplete,
    toggleViewComplete
}