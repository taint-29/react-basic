import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{

    state = {
        title: ''
    }

    handleChangeInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAdd = () => {
        if(!this.state.title){
            toast.error("Missing title")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }

        this.props.handleAddTodo(todo);

        this.setState({
            title:''
        })
    }
    
    render(){
        return(
            <>
                <div className="add-todo">
                    <input type="text" onChange={(event) => this.handleChangeInput(event)}/>
                    <button type="button" className="add" onClick={() => this.handleClickAdd()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;