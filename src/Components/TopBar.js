import React, { Component } from 'react';
import '../TopBar.css';
import '../App.css';
import StylingButton from '../Components/StylingButton';
import Pofile from '../Components/Profile';




import alert from '../svg/Off/alert.svg';
import alertOn from '../svg/On/alertOn.svg';

import follow from '../svg/Off/follow.svg';
import followOn from '../svg/On/followOn.svg';

import IllustButton from '../svg/Off/IllustButton.svg';
import IllustButtonOn from '../svg/On/IllustButtonOn.svg';

import ComicButton from '../svg/Off/ComicButton.svg';
import ComicButtonOn from '../svg/On/ComicButtonOn.svg';

import setup from '../svg/Off/setup.svg';
import setupOn from '../svg/On/setupOn.svg';

import chat from '../svg/Off/chat.svg';
import chatOn from '../svg/On/chatOn.svg';

import search from '../svg/Off/search.svg';
import searchOn from '../svg/On/searchOn.svg';


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

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      showPopup1: false,
      showPopup2: false, 
      showPopup3: false,  
      showPopup4: false,  
      title: [
        {id: 1, name:'대화', content: 'dd'},
        {id: 2, name: '알림', content: 'g[알림['},
        {id: 3, name: '설정', content: 'g[설정['} 
      ]          
    }
  }
  togglePopup1 ()  {
    this.setState({
        showPopup1 : !this.state.showPopup1
      }
    );
  };
  togglePopup2 ()  {
    this.setState({
        showPopup2 : !this.state.showPopup2
      }
    );
  };
  togglePopup3 ()  {
    this.setState({
        showPopup3 : !this.state.showPopup3
      }
    );
  };
  togglePopup4 ()  {
    this.setState({
        showPopup4 : !this.state.showPopup4
      }
    );
  };
  render(){
    return (
        <nav className='top'>
          <img src={alert} alt='alert'></img>

          <input className='serchBar' type="serch" placeholder="검색어를 입력하세요."></input>
          <StylingButton alt='검색' search background={search} backgroundH={searchOn}></StylingButton>

          <StylingButton alt='코믹' primary background={ComicButton} backgroundH={ComicButtonOn} ></StylingButton>
          <StylingButton alt='일러스트' primary background={IllustButton} backgroundH={IllustButtonOn}></StylingButton>
                            
          <StylingButton alt='팔로우' follow background={follow} backgroundH={followOn}></StylingButton>
          <input  type='button'onClick={this.togglePopup3.bind(this)}  value='이름'></input>
          {this.state.showPopup3 ? <Pofile closePopup={this.togglePopup3.bind(this)}/> : null}    
          
          <StylingButton alt='대화' onClick={this.togglePopup1.bind(this)} background={chat} backgroundH={chatOn}></StylingButton>
          {this.state.showPopup1 ? <Popup title={this.state.title[0].name} text={this.state.title[0].content} closePopup={this.togglePopup1.bind(this)}/> : null}
          
          
          <StylingButton alt='알림' onClick={this.togglePopup2.bind(this)} background={alert} backgroundH={alertOn}></StylingButton>
          {this.state.showPopup2 ? <Popup title={this.state.title[1].name} text={this.state.title[1].content} closePopup={this.togglePopup2.bind(this)}/> : null}
          
          <StylingButton alt='설정' onClick={this.togglePopup4.bind(this)} background={setup} backgroundH={setupOn}></StylingButton>
          {this.state.showPopup4 ? <Popup title={this.state.title[2].name} text={this.state.title[2].content} closePopup={this.togglePopup4.bind(this)}/> : null}
         
        </nav>
        ); 
    }
}


export default TopBar;
