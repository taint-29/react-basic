import React from "react";
import Color from "../hoc/Color";
import logo from "../../assets/images/avatar.jpeg"
import {connect} from 'react-redux'
import ListUser from "../users/ListUser";

class HomeComponent extends React.Component{

    handleDeleteUser = (user) => {
        console.log(">>>check user",user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.createUserRedux()
    }

    render(){

        console.log(">>> check props",this.props.dataRedux)

        let users = this.props.dataRedux;

        return (
            <>
            <div>
                 Hello world with reactjs - taint
            </div>
            <img src={logo}></img>
            <div>
                {users && users.length && 
                    users.map((item,index) => {
                        return (
                            <div >
                                {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => this.handleCreateUser()}>Add user</button>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {dataRedux: state.users}

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        createUserRedux: () => dispatch({type:'CREATE_USER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Color(HomeComponent))