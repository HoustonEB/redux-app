let todoInitialState = { 
    list: [{ text: 1, complete: false, show: true }], 
    inputValue: '默认值',
    status: false 
};

export function todoReducer(preState = todoInitialState, action) {
    console.log(action, 'action')
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, preState, { list: [...preState.list, action.payload] })
            break;
        case 'CLEAR_INPUT':
            return Object.assign({}, preState, { inputValue: '' })
            break;
        case 'ON_INPUT':
            return Object.assign({}, preState, { inputValue: action.payload })
            break;
        case 'DELETE_TODO':
            preState.list.splice(action.payload, 1);
            return Object.assign({}, preState, { list: [...preState.list] })
            break;
        case 'TOGGLE_COMPLETE':
            preState.list[action.payload].complete = !preState.list[action.payload].complete
            return Object.assign({}, preState, { list: [...preState.list] })
            break;
            case 'TOGGLE_VIEW_COMPLETE':
                console.log(action.status, '23', preState.list)
                return Object.assign({}, preState, {
                    status: !action.status,
                    list: [...preState.list.map(item => {
                        if (action.status === item.complete) {
                            item.show = true;
                        } else {
                            item.show = false;
                        }
                        return item;
                    })]
                })
                break;
        default:
            return preState;
    }
}