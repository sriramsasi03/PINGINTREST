import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Intrest.css';

function displayans(a,b,c){
    var k=a*b*c;
    k=k/100;
    return k;
};

export default class Intrest extends Component{
    constructor(props) {
        super(props) 

        this.state= {
            intrestpercent:"",
            TimeSpan:"",
            Amount:"",
            Answer:"",
            error:false
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.id]:event.target.value});
    }
    updateAnswer=()=>{
        this.setState({Answer:displayans(this.state.Amount,this.state.TimeSpan,this.state.intrestpercent)});
    }
    render (){
        return(
            <div className='center'>
                <TextField id='intrestpercent' label='Intrest rate' type='number' onChange={this.handleChange}></TextField><br></br><br></br>
                <TextField id='TimeSpan' label='Time Span' type='number' onChange={this.handleChange}></TextField><br></br><br></br>
                <TextField id='Amount' label='Amount' type='number' onChange={this.handleChange}></TextField><br></br><br></br>
                <button className='button' onClick={this.updateAnswer}>Calculate Intrest</button><br></br>
                <p>{this.state.Answer}</p>
                
            </div>
        )
    }
}
