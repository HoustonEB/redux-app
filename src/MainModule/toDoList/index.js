import React, { Component } from 'react';
import {
    addTodo,
    clearInput,
    onInput,
    deleteTodo,
    toggleComplete,
    toggleViewComplete
} from '../Model/ToDoList/action';
import { connect } from 'react-redux';
import './style.use.less';

class ToDoList extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.list.map((item, index) => {
            return (
                item.show ? <li key={index}>
                    {item.text}
                    <span
                        style={{
                            display: 'inline-block',
                            marginLeft: '5px',
                            width: '5px',
                            height: '5px',
                            border: '1px solid transparent',
                            borderRadius: '50%',
                            backgroundColor: item.complete ? 'green' : 'red'
                        }}
                        onClick={() => { this.props.toggleComplete(index) }}
                    ></span>
                    <span
                        style={{
                            marginLeft: '30px',
                            color: '#666',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.props.deleteTodo(index)}>x</span>
                </li> : null
            )
        });
    }

    render() {
        let {
            addTask,
            inputValue,
            onInput
        } = this.props;

        return (
            <div className={'to-do-list-box'}>
                <div>tolist</div>
                <input
                    value={inputValue}
                    onChange={e => onInput(e.target.value)}
                ></input>
                <button onClick={addTask.bind(this, inputValue)}>添加任务</button>
                <ul>
                    {this.renderList()}
                </ul>
                <div>
                    <button 
                    onClick={() => {this.props.toggleViewComplete(this.props.status)}}>
                        {this.props.status ? '已完成' : '未完成'}</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list,
        inputValue: state.inputValue,
        status: state.status
    }
}

function mapDispatchToPtops(dispatch) {
    return {
        addTask: value => dispatch(addTodo(value, false, true)),
        clearInput: () => dispatch(clearInput()),
        onInput: value => dispatch(onInput(value)),
        deleteTodo: index => dispatch(deleteTodo(index)),
        toggleComplete: index => dispatch(toggleComplete(index)),
        toggleViewComplete: status => dispatch(toggleViewComplete(status))
    }
}

export default connect(mapStateToProps, mapDispatchToPtops)(ToDoList);