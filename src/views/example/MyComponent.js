import React from 'react';

class MyComponent extends React.Component {
    /**
     * 
     * JSX => return a block (ex: not return 2 div)
     * code js insite file html
     * class -> className in react
     * <> </> fragemnt: cover more than 2 block become like one block
     * state real time change
     */ 

    state = {
        name: 'taint',
        channel: 'learn to the best'
    };

    handlerOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlerClickButton = () => {
        alert('hello you');
    }

    componentDidMount(){
        console.log(">>> call component did mount")
    }

    render(){

        let name = 'taint';
        console.log(">>> calll render")

        return (
            <>
            <div className='first'>
                {console.log('my name is : ', name)}
                <input value={this.state.name} type = "text" onChange = {(event) => this.handlerOnChangeName(event)}></input>
                <br></br>
                Hello my component, my name is {this.state['name']}
            </div>
            <div className='second'>
                My youtube channel: {this.state.channel}
            </div>
            <div className='third'>
                <button onClick={ () => this.handlerClickButton()}>Click me</button>
            </div>
            </>
        )
    }
}

export default MyComponent;