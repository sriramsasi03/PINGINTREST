import React, { Component } from 'react'
import './Ping.css';
var a;
var b;
function getPing(){
    a=Date.now();
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
    });
    })
    .catch((error) => {
        console.error(error);
    });
    b=Date.now();
    return b-a;
    }
export default class Ping extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            answer:"",
            error:false
        }
    }
    updateanswer=()=>{
        this.setState({answer:getPing()});
    }
    render (){
        return(
            <div className='center'>
                <p>To Calculate Ping of your network Press Ping</p>
                <button class="button" onClick={this.updateanswer}>Ping</button>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}