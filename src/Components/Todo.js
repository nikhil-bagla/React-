import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[{id:1,txt:"First task"},{id:2,txt:"Second task"},{id:3,txt:"Third task"}],
            currTask:''
        }

       
    }
    handleChange=(e)=>{    //whenever change is there in input element it is called
        let cval=e.target.value;
        this.setState({currTask:cval});
    }

    handleClick=(e)=>{
        // console.log(this.state.currTask);

        // this.state.tasks.push({id:this.state.tasks.length+1,txt:this.state.currTask})
        //this.state.currTask='';

        let nta=[...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}]

        this.setState({
            tasks:nta,
            currTask:''
        })
   
    }

    onDelete=(id)=>{
        let nta=this.state.tasks.filter(obj=>{
            return obj.id!=id    //returns all other objects then the object whose id is passed to this function
        })
        this.setState({
            tasks:nta    //state change
        })
    }
    
    render() {
        return (
            <>
             <InputComponent currTask={this.state.currTask} handleChange={this.handleChange} handleClick={this.handleClick}/>
             <TaskList tasks={this.state.tasks} onDelete={this.onDelete}/>
            
              
            </>
        )
    }
}





class InputComponent extends Component {
   constructor(props){
       super(props);
   }
    render() {
        return (
            <div>
                <div className='input-container'>
                  <input  type='text' value={this.props.currTask} onChange={this.props.handleChange}></input>
                  <button onClick={this.props.handleClick}>Add</button>
              </div>
            </div>
        )
    }
}



class TaskList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <div className='class-list'>
                  <ul>
                      {
                          this.props.tasks.map(task=>(
                              <li>
                              <h1>{task.txt}</h1>
                              <button onClick={()=>this.props.onDelete(task.id)}>Delete</button>
                              </li>
                          ))

                          }
                  </ul>
              </div>
            </div>
        )
    }
}
