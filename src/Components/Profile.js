import React, { Component } from 'react';
import '../App.css';
import StylingButton from '../Components/StylingButton';
import styled, { css } from 'styled-components';


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
        width: 100000px;
        ${Maxs}
    }
` 



const PfButton = styled.button`
    ${hoverImg}
    margin: 0 auto;
    background: url(${({ background }) => background});
    background-size: contain;
    height: 100px;
    width: 100000px;
    padding: 0;
    border: 0;
    cursor: pointer;
    ${Maxs}
`


class Profile extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>asfasf</h1>
            <input type='button' value='닫기' onClick={this.props.closePopup}></input>
            <div className='Pf'>
                <StylingButton Pf_Img alt='프로필설정'   background={profiles}   backgroundH={profileOn}></StylingButton>
                <StylingButton Pf_Img alt='북마크보기'   background={bookMark}   backgroundH={bookMarkOn}></StylingButton>
                <StylingButton Pf_Img alt='팔로우 목록'  background={followList} backgroundH={followListOn}></StylingButton>
                <PfButton      Info   alt='정책정보'       background={policyInfo} backgroundH={policyInfoOn}></PfButton>
                <StylingButton Pf_Img alt='계정전환하기' background={chgAccount} backgroundH={chgAccountOn}></StylingButton>
                <PfButton      Pf_Img alt='로그아웃'     background={logout}     backgroundH={logoutOn} theme={{marginLeft: '30px;'}}></PfButton>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Profile;
