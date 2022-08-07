import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class FormComponent extends React.Component{

    state = {
        jobs:[
            {id: 1, title: 'dev', salary: '2000'},
            {id: 2, title: 'test', salary: '200'},
            {id: 3, title: 'data analytic', salary: '2500'}
        ]
    }

    addNewJob = (job) => {
        console.log(job);
        let currentJobs = this.state.jobs;
        currentJobs.push(job);
        this.setState({
            // jobs: [...this.state.jobs,job]
            job: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.jobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            jobs: currentJobs
        })
    }


    render(){
        return (
            <>
            <AddComponent addNewJob = {this.addNewJob}></AddComponent>

            <ChildComponent 
            deleteJob = {this.deleteJob}
            jobs = {this.state.jobs}
            ></ChildComponent>
            
            </>
        )
    }
}

export default FormComponent;