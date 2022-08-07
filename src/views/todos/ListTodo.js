import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';
import Color from "../hoc/Color";

class ListTodo extends React.Component{

    state = {
        listTodo: [
            {id:'todo1', title: 'refactoring'},
            {id:'todo2', title: 'doing homework'},
            {id:'todo3', title: 'study'}
        ],
        editTodo: {}
    }

    handleAddTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo,todo ]
        })
        toast("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        // console.log(">>> check todo",todo);
        let todoList = this.state.listTodo;
        todoList = todoList.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: todoList
        })
        toast("delete success!")
    }

    handleEditTodo = (todo) => {
        let isObjectEmpty = Object.keys(todo).length === 0;
        let {editTodo, listTodo} = this.state;

        //save 
        if(!isObjectEmpty && todo.id === editTodo.id){

            let listTodoCopy = [...listTodo];
            
            let objIndex = listTodoCopy.findIndex(index => index.id === todo.id);

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo:''
            
            })

            toast.success("update succeed!")
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let changeEditTodo = this.state.editTodo;
        changeEditTodo.title = event.target.value;
        this.setState({
            editTodo: changeEditTodo
        })
    }

    render(){

        let {listTodo, editTodo} = this.state;
        let isObjectEmpty = Object.keys(editTodo).length === 0;
        return (
            <>
                <div className="list-todo-container">
                    <AddTodo handleAddTodo = {this.handleAddTodo}></AddTodo>
                    <div className="list-todo-content" >
                        {
                            listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isObjectEmpty === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                        { item.id === editTodo.id ? 
                                        <span>{index + 1} - <input 
                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                            value={editTodo.title}/></span> 
                                        :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                        </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isObjectEmpty !== true  && item.id === editTodo.id ? 'save' : 'edit'}
                                            
                                            </button>
                                        <button className="delete" 
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Color(ListTodo);