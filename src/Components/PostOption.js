import React, { Component } from 'react';
import '../App.css';

import RadioButtonsGroup from './sample';
import StylingButton from './StylingButton';

import P_post from '../svg/Off/P_post.svg';
import P_postOn from '../svg/On/P_postOn.svg';


class PostOption extends Component {
    constructor(props){
        super(props)
        this.state = { on : false}
        this.toggleFcn = this.toggleFcn.bind(this);
    }

    toggleFcn(){
        this.setState({
            on : !this.state.on
        })
    }
    
    onAlert = () => alert('asfasf')
    
  render() {
    return (
        <div className='PostOption'>          
            <RadioButtonsGroup/>
            <div className='Post'>
                <StylingButton primary onClick={this.onAlert} background={P_post} backgroundH={P_postOn}/>
            </div>
            <input type='button'className ='Age' onClick={this.toggleFcn}/>
            
        </div>
        ); 
    }  
}


export default PostOption;
