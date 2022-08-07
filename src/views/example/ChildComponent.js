import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false 
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleClickDelete = (job) => {
        console.log(">>> handleClickDelete",job);
        this.props.deleteJob(job);
    }

    render(){
        let {jobs} = this.props;
        let {showJobs} = this.state;
        return (
            <>
            {showJobs === false ? 
                <div><button className='btn-show' onClick={() => this.handleShowHide()}>Show</button></div> 
                : 
                <>
                <div className='job-list'>
                {
                    showJobs && 
                    jobs.map((item,index) => {
                        if(item.salary >= 2000){
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary} $ <></> <span onClick={() => {this.handleClickDelete(item)}}>x</span>
                                </div>
                            )
                        }
                    })
                }
                </div>
                <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                </>
            }
            </>
        )
    }
}

export default ChildComponent;