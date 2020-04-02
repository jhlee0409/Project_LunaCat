import React, { Component } from 'react';
import './App.css';
import Popups from './Components/Popup'
import StylingButton from './Components/StylingButton';
import ComicUpload from './Components/ComicUpload';
import IullustUpload from './Components/IullustUpload';
import Grid from '@material-ui/core/Grid';
import TopAlert from './Components/TopAlert';


import logo from './svg/logo.svg';
import alertt from './svg/Off/alert.svg';
import alertOn from './svg/On/alertOn.svg';

import follow from './svg/Off/follow.svg';
import followOn from './svg/On/followOn.svg';

import IllustButton from './svg/Off/IllustButton.svg';
import IllustButtonOn from './svg/On/IllustButtonOn.svg';

import ComicButton from './svg/Off/ComicButton.svg';
import ComicButtonOn from './svg/On/ComicButtonOn.svg';

import setup from './svg/Off/setup.svg';
import setupOn from './svg/On/setupOn.svg';

import chat from './svg/Off/chat.svg';
import chatOn from './svg/On/chatOn.svg';

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
      component: <ComicUpload/>,
      num: 1,
      title: [
        {id: 2, name:'대화', content: 'dd'},
        {id: 3, name: '알림', content: 'g[알림['},
        {id: 4, name: '설정', content: '프로필변경 팝업'} 
      ]          
    }
  }

  onChange= (name) =>{
    if (name === 'Comic') {
      this.setState({
        component: <ComicUpload/>
      })
    } else if (name === 'Illust') {
      this.setState({
        component: <IullustUpload/>
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
      
        <nav className='top'>
        <Grid container spacing={1}>
        <Grid style={{display: 'flex', alignItems:'center'}} item md={4} lg={5} xl={6}>
          <img className='Logo'src={logo} alt='로고'/>

          <input className='serchBar' type="serch" placeholder="검색어를 입력하세요."/>
          <StylingButton alt='검색' search background={search} backgroundH={searchOn}/>
          </Grid>

        <Grid style={{display: 'flex', alignItems:'center'}} item md={4} lg={3} xl={2}>
          <div className='Mode'>
            <StylingButton alt='코믹' onClick={() =>this.onChange('Comic')} primary background={ComicButton} backgroundH={ComicButtonOn}/>
            <StylingButton alt='일러스트' onClick={() =>this.onChange("Illust")} primary background={IllustButton} backgroundH={IllustButtonOn}/>
          </div>    
          </Grid>

        <Grid style={{display: 'flex', alignItems:'center'}} item md={3} lg={1} xl={2}>
          <StylingButton alt='팔로우' follow background={follow} backgroundH={followOn}/>
          <Popups alt='이름'/>
          </Grid>

          <Grid style={{display: 'flex', alignItems:'center'}} item md={3} lg={1} xl={2}>
            <div className='option'>
              <StylingButton alt='대화' onClick={()=>this.togglePopup(2)} background={chat} backgroundH={chatOn}/>         
              <StylingButton alt='알림' onClick={()=>this.togglePopup(3)} background={alertt} backgroundH={alertOn}/>     
              <StylingButton alt='설정' onClick={()=>this.togglePopup(4)} background={setup} backgroundH={setupOn}/>
            </div>
          </Grid>
          </Grid>
            {this.state.showPopup2 ? <Popup alt='대화' title={this.state.title[0].name} text={this.state.title[0].content} closePopup={()=>this.togglePopup(2)}/> : null}
            {this.state.showPopup3 ? <Popup alt='알림' title={this.state.title[1].name} text={this.state.title[1].content} closePopup={()=>this.togglePopup(3)}/> : null}
            {this.state.showPopup4 ? <Popup alt='설정' title={this.state.title[2].name} text={this.state.title[2].content} closePopup={()=>this.togglePopup(4)}/> : null} 
        </nav>
        <TopAlert/>
          {this.state.component}
      </div>     
    ); 
  }
}

export default App;
