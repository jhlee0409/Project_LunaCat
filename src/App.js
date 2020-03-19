import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/TopBar';
import MainContent from './Components/MainContent';


class App extends Component { 
  render(){
    return (
      <div className="App"> 
        <TopBar></TopBar>
        <MainContent></MainContent>   
      </div>     
  )  ; 
    }
}

export default App;
