import React, { Component } from 'react';
import '../App.css';
import '../TopBar.css';
import StylingButton from '../Components/StylingButton';


import P_illust from '../svg/Off/P_illust.svg';
import P_illustOn from '../svg/On/P_illustOn.svg';

import P_comic from '../svg/Off/P_comic.svg';
import P_comicOn from '../svg/On/P_comicOn.svg';

import P_disclosure from '../svg/Off/P_disclosure.svg';
import P_disclosureOn from '../svg/On/P_disclosureOn.svg';

import P_nondisclosure from '../svg/Off/P_nondisclosure.svg';
import P_nondisclosureOn from '../svg/On/P_nondisclosureOn.svg';

import P_age from '../svg/Off/P_age.svg';
import P_ageOn from '../svg/On/P_ageOn.svg';

import P_post from '../svg/Off/P_post.svg';
import P_postOn from '../svg/On/P_postOn.svg';


const imagesPath = {
    on:  { 
        illust : P_illustOn, 
        comic : P_comicOn,
        disclosure : P_disclosureOn,
        nondisclosure : P_nondisclosureOn,
        age : P_ageOn,
        post : P_postOn},
    off: {
        illust: P_illust, 
        comic: P_comic,
        disclosure : P_disclosure,
        nondisclosure :P_nondisclosure ,
        age : P_age,
        post : P_post}
}

class PostOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open1: false,
            open2: true,
            open3: false,
            open4: true,
            open5: true,
        }
    }
    
    toggleImage1 = () =>{ 
        var i = this.state.open1;
        if (i === true){
        this.setState(state => ({ open1 : !this.state.open1, open2 : !this.state.open2}))}
        else {
            i = true
        }
      }
    toggleImage2 = () =>{ 
        var i =  this.state.open2;
        if (i === true){
        this.setState(state => ({ open2 : !this.state.open2,  open1 : !this.state.open1}))}
        else {
            i = true
        }
    }
    toggleImage3 = () =>{ 
        var i =  this.state.open3;
        if (i === true){
        this.setState(state => ({ open3 : !this.state.open3, open4 : !this.state.open4, }))}
        else {
            i = true
        }
    }
    toggleImage4 = () =>{    
        var i =  this.state.open4;
        if (i === true){   
        this.setState(state => ({ open4 : !this.state.open4, open3 : !this.state.open3 }))}
        else {
            i = true
        }
    }
    toggleImage5 = () =>{ 
        this.setState(state => ({ open5 : !this.state.open5 }))
    }
    getImageName1 = () => this.state.open1 ? 'off' : 'on'
    getImageName2 = () => this.state.open2 ? 'off' : 'on'
    getImageName3 = () => this.state.open3 ? 'off' : 'on'
    getImageName4 = () => this.state.open4 ? 'off' : 'on'
    getImageName5 = () => this.state.open5 ? 'off' : 'on'
    
    onAlert= () => alert('asfasf')
    
  render() {
    const imageName1 = this.getImageName1();
    const imageName2 = this.getImageName2();  
    const imageName3 = this.getImageName3();  
    const imageName4 = this.getImageName4();  
    const imageName5 = this.getImageName5();  
    return (
        <div className='PostOption'>          
            <div className='PO ctg'>카테고리          
                <input alt='일러스트' type='image' src={imagesPath[imageName1].illust} onClick={() => (this.toggleImage1) (this.changeOnOff)}></input>
                <input alt='코믹' type='image' src={imagesPath[imageName2].comic} onClick={() => (this.toggleImage2) (this.changeOnOff)}></input>
            </div>
            <div className= 'PO discls'>공개설정
                <input alt='공개' type='image' src={imagesPath[imageName3].disclosure} onClick={this.toggleImage3}></input>
                <input alt='비공개' type='image' src={imagesPath[imageName4].nondisclosure} onClick={this.toggleImage4}></input>
            </div>
            <div className='PO setAge'>연령설정
                <input alt='연령설정' type='image' src={imagesPath[imageName5].age} onClick={this.toggleImage5}></input>
            </div>
            <div className='Post'>
                <StylingButton primary onClick={this.onAlert} background={P_post} backgroundH={P_postOn}></StylingButton>
            </div>
        </div>
        ); 
    }  
}


export default PostOption;
