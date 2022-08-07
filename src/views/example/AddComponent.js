import React from "react";

class AddComponent extends React.Component{
    state = {
        title: '',
        salary:'',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClickSubmit = () => {

        if(!this.state.title || !this.state.salary){
            alert("Missing params")
        }
        
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            salary: this.state.salary,
            title: this.state.title
        })
        this.setState({
            title: '',
            salary: ''
        })
    }


    render(){
        return (
            <>
            <br></br>
            <form action="/action_page.php"/>
            <label htmlFor="fname">Jobs title:</label><br/>
            <input type="text" value={this.state.title} onChange = {(event) => this.handleChangeJobTitle(event)}/><br/>
            <label htmlFor="lname">Salary:</label><br/>
            <input type="text" value={this.state.salary} onChange = {(event) => this.handleChangeSalary(event)}/><br/><br/>
            <input type="submit" value="Submit" onClick={() => this.handleClickSubmit()}/>
            <form/> 
            </>
        )
    }
}

export default AddComponent