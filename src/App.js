import React, { Component } from 'react';
import './App.css';
import Popups from './Components/Popup'
import StylingButton from './Components/StylingButton';
import UploadPage from './Components/UploadPage';
import Viewer from './Components/Viewer'
import LoginForm from './Components/LoginForm'
import logo from './svg/logo.svg';
import Profile from './Components/Profile' 
import Main from './Components/main'

import alertt from './svg/Off/alert.svg';
import alertOn from './svg/On/alertOn.svg';

import chat from './svg/Off/chat.svg';
import chatOn from './svg/On/chatOn.svg';

import setup from './svg/Off/setup.svg';
import setupOn from './svg/On/setupOn.svg';

import search from './svg/Off/search.svg';
import searchOn from './svg/On/searchOn.svg';


class Popup extends Component {
render() {
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h1>{this.props.title}</h1>
        <input type='button' value='닫기' onClick={this.props.closePopup}></input>
        <div>
          {this.props.text}
        </div>
      </div>
    </div>
  );
}
}

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {  
      showPopup1: false,
      showPopup2: false, 
      showPopup3: false,  
      showPopup4: false,  
      open: false,
      component: <Main/>,
      num: 1,
      title: [
        {id: 2, name:'대화', content: 'dd'},
        {id: 3, name: '알림', content: 'g[알림['},
        {id: 4, name: '설정', content: '프로필변경 팝업'} 
      ]          
    }
  }

  onChange= (name) =>{
    if (name === 'Upload') {
      this.setState({
        component: <UploadPage/>
      })
    } else if (name === 'Viewer') {
      this.setState({
        component: <Viewer/>
      })
    } else if (name === 'Profile') {
      this.setState({
        component: <Profile/>
      })
    } else if (name === 'Main') {
      this.setState({
        component: <Main moveMain={() =>this.onChange('Main')} moveChangeProfile={()=>this.onChange('Profile')} moveUpload={()=> this.onChange('Upload')} moveComicViewer={() => this.onChange('Viewer')}/>
      })
    }
}  
  togglePopup = (i) => {
    if(i === 1) {
      this.setState({
        showPopup1 : !this.state.showPopup1
      })
    } else if (i === 2) {
      this.setState({
        showPopup2 : !this.state.showPopup2
      })
    }else if (i === 3) {
      this.setState({
        showPopup3 : !this.state.showPopup3
      })
    }else if (i === 4) {
      this.setState({
        showPopup4 : !this.state.showPopup4
      })
    }
  }
 
  render(){
    return (
      <div className="App"> 
        
        
        <nav className='top main-nav'>
          <img className='Logo' src={logo} style={{cursor:'pointer',}} alt='로고' onClick={() =>this.onChange('Main')}/>
          <div className='search-bar'>
            <input className='serchBar' type="serch" placeholder="검색어를 입력하세요."/>
            <StylingButton alt='검색' search background={search} backgroundH={searchOn}/>
          </div>

          <div className='view-mode'>
            <button className='comic-mode' onClick={() => this.onChange('Viewer')}>Comic</button>
            <button className='illust-mode' onClick={() => this.onChange('Viewer')}>Illust</button>
            <LoginForm/>
          </div>    


          <div className='main-follow-btn'>
            <img src={require('./svg/follow.svg')} alt='팔로우'/>
            <span>Follow</span>
          </div>
          
          <Popups alt='이름' Profile={()=>this.onChange('Profile')}/>
          


            <div className='option'>
              <StylingButton alt='대화' onClick={()=>this.togglePopup(2)} background={chat} backgroundH={chatOn}/>            
              <StylingButton alt='알림' onClick={()=>this.togglePopup(3)} background={alertt} backgroundH={alertOn}/>     
              <StylingButton alt='설정' onClick={()=>this.togglePopup(4)} background={setup} backgroundH={setupOn}/>
            </div>


            {this.state.showPopup2 ? <Popup alt='대화' title={this.state.title[0].name} text={this.state.title[0].content} closePopup={()=>this.togglePopup(2)}/> : null}
            {this.state.showPopup3 ? <Popup alt='알림' title={this.state.title[1].name} text={this.state.title[1].content} closePopup={()=>this.togglePopup(3)}/> : null}
            {this.state.showPopup4 ? <Popup alt='설정' title={this.state.title[2].name} text={this.state.title[2].content} closePopup={()=>this.togglePopup(4)}/> : null} 
        </nav>
          {this.state.component}
      
      </div>     
    ); 
  }
}

export default App;
