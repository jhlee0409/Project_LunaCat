import React from 'react';
import Popup from "reactjs-popup";
import StylingButton from './StylingButton';
import styled, { css } from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Out from './Followpopup'


import profiles from '../svg/popup/Off/profiles.svg';
import profileOn from '../svg/popup/On/profileOn.svg';

import bookMark from '../svg/popup/Off/bookMark.svg';
import bookMarkOn from '../svg/popup/On/bookMarkOn.svg';

import followList from '../svg/popup/Off/followList.svg';
import followListOn from '../svg/popup/On/followListOn.svg';

import policyInfo from '../svg/popup/Off/policyInfo.svg';
import policyInfoOn from '../svg/popup/On/policyInfoOn.svg';

import chgAccount from '../svg/popup/Off/chgAccount.svg';
import chgAccountOn from '../svg/popup/On/chgAccountOn.svg';

import logout from '../svg/popup/Off/logout.svg';
import logoutOn from '../svg/popup/On/logoutOn.svg';

const Maxs = css`
    max-width: ${props => {
        if (props.Info) return '91px;';
        else return '66px;';
    }};   
    max-height: ${props => {
        if (props.Info) return '20px;';
        else return '21px;';
    }};   
    margin-left: ${props =>
        props.theme.marginLeft};
    }}

`
const hoverImg = css`
    &:hover {
        margin: 0 auto;
        background: url(${({ backgroundH }) => backgroundH});
        background-size: contain;       
        height: 100px;
        ${Maxs}
    }
` 
const PfButton = styled.button`
    ${hoverImg}
    margin: 0 auto;
    background: url(${({ background }) => background});
    background-size: contain;
    height: 100px;
    width: 100px;
    padding: 0;
    border: 0;
    cursor: pointer;
    ${Maxs}
`

class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      showpop1: true,
      showpop2: true,
      showpop3: true,
      showpop4: true,
      showpop5: true,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    }else if (i === 5) {
      this.setState({
        showPopup5 : !this.state.showPopup5
      })
    }
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
  onLogin = () => {
    alert('로그아웃')
  }

  render() {
    return (
      <div>
        <div className='PFname'>
          <Avatar style={{cursor: 'pointer'}}alt=" 이름" src="" onClick={this.openModal}>안녕</Avatar>
        </div>
        
        <Popup  open={this.state.open}  onClose={this.closeModal} >
        
          <div className="popup_inner">
            <div className='Pf'>
              <StylingButton onClick={()=>this.togglePopup(1)} Pf_Img alt='프로필설정' background={profiles} backgroundH={profileOn}/>
              <StylingButton onClick={()=>this.togglePopup(2)} Pf_Img alt='북마크보기' background={bookMark} backgroundH={bookMarkOn}/>
              <StylingButton onClick={()=>this.togglePopup(3)} Pf_Img alt='팔로우 목록'  background={followList} backgroundH={followListOn}/>
              <StylingButton onClick={()=>this.togglePopup(4)} Info alt='정책정보' background={policyInfo} backgroundH={policyInfoOn}/>
              <StylingButton onClick={()=>this.togglePopup(5)} Pf_Img alt='계정전환하기' background={chgAccount} backgroundH={chgAccountOn}/>
              <PfButton Pf_Img alt='로그아웃' onClick={this.onLogin} background={logout} backgroundH={logoutOn} theme={{marginLeft: '30px;'}}/>  
              <button className="close" onClick={this.closeModal}>닫기</button>            
            </div>     
               {/* {this.state.showPopup1 ? <CheckboxListSecondary alt='프로필설정' closePopup={()=>this.togglePopup(1)}/> : null} 
              {this.state.showPopup2 ? <CheckboxListSecondary alt='북마크보기' closePopup={()=>this.togglePopup(2)}/> : null}  */}
              {this.state.showPopup3 ? <Out alt='팔로우 목록' closePopup={()=>this.togglePopup(3)}/> : null} 
              {/* {this.state.showPopup4 ? <CheckboxListSecondary alt='정책정보' closePopup={()=>this.togglePopup(4)}/> : null} 
              {this.state.showPopup5 ? <CheckboxListSecondary alt='계정전환하기' closePopup={()=>this.togglePopup(5)}/> : null}  */}
            <div>            
              
              
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}


export default ControlledPopup;