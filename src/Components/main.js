import React, {Component} from 'react'
import '../css/main.css'
import Masonry from 'react-masonry-css'
import SimilarPopup from './P_similar-view-popup'
import tileData from './tileData';
import Popups from './Popup'

import logo from '../svg/logo.svg';

const breakpointColumnsObj = {
    default: 6,
    1600: 4,
    1300: 3,
    960: 3,
    800: 2,
};

class Main extends Component {
    constructor(props) {
        super(props)
        this.state ={
            component: <Main/>,
        }
    }
    
    items = tileData.map(function(item, index) {
        return <div className='main-slide' key={index}>
            <div className='padding-side similar-title top-radius'>
                <img src={require(`../svg/translate-icon.svg`)} alt='번역아이콘'/>
                <p>{item.title}님이 번역</p>
                <span>2019-01-30</span>
            </div>
            <div style={{position:'relative'}}>
                <img className='' src={item.img} alt={item.title}/>
                <SimilarPopup className={`similar-option similar-option${index}`}/>
            </div>
            
            <div className='padding-side similar-title' >
                <img src={require(`../svg/tugo-icon.svg`)} alt='투고아이콘'/>
                <p>{item.title}님이 투고</p>
                <span>1시간</span>    
            </div>
            <div className='padding-side similar-txt bottom-radius'>
                <p>게시물 예시 안녕하세요 안녕하세요게시물 예시 안녕하세요 안녕하세요</p>
            </div>
            </div>
        })
    render(){
        return (
            <div>
                <nav className='top main-mobile-nav'>
                    <img className='Logo' src={logo} style={{cursor:'pointer',}} alt='로고' onClick={this.props.moveMain}/>
                    <div className='search-bar'>
                        <input className='serchBar' type="serch" placeholder="검색어를 입력하세요."/>
                        <button className='search-icon' type='button' alt='검색'></button>
                    </div>
                    <div className='margin-auto main-follow-btn'>
                        <img src={require('../svg/follow.svg')} alt='팔로우'/>
                    </div>
                    <div className='margin-auto'>
                        <Popups alt='이름' onClick={this.props.moveChangeProfile}/>
                    </div>
                </nav>

                <div className='main-top'>
                    <Masonry  breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                        {this.items}
                    </Masonry>
                    <div className='upload-icon-div'>
                        <button className='upload-icon' onClick={this.props.moveUpload} alt='업로드'/>
                    </div>
                </div>
                <div className='lnb main-lnb'>
                    <div><button className='main-alert'alt='알림'/></div>
                    <div><button className='main-chat'alt='대화'/></div>
                    <div><button className='main-upload' onClick={this.props.moveUpload} alt='업로드'/></div>
                    <div><button className='main-comic'alt='코믹뷰어' onClick={this.props.moveComicViewer}>C</button></div>
                    <div><button className='main-illust'alt='일러스트뷰어' onClick={this.props.moveComicViewer}>I</button></div>
                </div>
            </div>
            
        )
    }

}

export default Main;
