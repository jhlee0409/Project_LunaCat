import React, { Component } from 'react'
import '../css/Viewer.css'
import Swiper from 'react-id-swiper';
import tileData from './tileData';
import fbData from './fbData';
import FbPopup from './fb-popup'
import SimilarPopup from './similar-view-popup'
import Masonry from 'react-masonry-css'

import FbForm from './fbForm';

const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1300: 3,
    960: 3,
    800: 2,
};




class Viewer extends Component {
    key = 2
    constructor(props) {
        super(props)
        this.state= {
            clicked: false,
            color: '#A49FBA',
            tugoName: 'ABCD',
            tugoDatetime: '2020-03-31',
            transName: 'ABCD',
            transDatetime: '2020-03-31',
            reactCount: '2,164',
            heartCount: 294,
            globeCount: 21,
            fbCount: 284,
            fbGroupMore: 5,
            heart: require(`../svg/heart.svg`),
            globe: require(`../svg/globe.svg`),
            bookmark: require(`../svg/bookmark.svg`),
            commentIcon: require(`../svg/comment-icon.svg`),
            fb: fbData,
            fbClicked: false,
            fbFollowColor: '#A49FBA',


        }
        this.toggleBtn=this.toggleBtn.bind(this)
        this.colorChange=this.colorChange.bind(this)
        this.toggle=this.toggle.bind(this)
    }

    handleCreate = (data) => {
        this.setState({fb: this.state.fb.concat({key: this.key++,...data})})
      }

    colorChange = () => {
        var color1 = '#A49FBA',
            color2 = '#F1AD39'
        if (this.state.clicked === true) {
            this.setState({color: color1})
        } else if (this.state.clicked === false) {
            this.setState({color: color2})
        }
    }
    toggle = () => {
        this.setState({clicked: !this.state.clicked})
        
    }

    toggleBtn = (name) => {
        var icon = require(`../svg/${name}.svg`),
            iconOn = require(`../svg/${name}On.svg`);
        if (name === 'heart') {
            if (this.state.heart === icon) {this.setState({heart: iconOn})} else if (this.state.heart === iconOn) {this.setState({heart: icon})}
        } else if (name === 'globe') {
            if (this.state.globe === icon) {this.setState({globe: iconOn})} else if (this.state.globe === iconOn) {this.setState({globe: icon})}
        } else if (name === 'bookmark') {
            if (this.state.bookmark === icon) {this.setState({bookmark: iconOn})} else if (this.state.bookmark === iconOn) {this.setState({bookmark: icon})}
        } else if (name === 'comment-icon') {
            if (this.state.commentIcon === icon) {this.setState({commentIcon: iconOn})} else if (this.state.commentIcon === iconOn) {this.setState({commentIcon: icon})}
        }
    }


    items = tileData.map(function(item, index) {
        return <div className='similar-slide' key={index}>
            <div className='similar-title'>
                <img src={require(`../svg/translate-icon.svg`)} alt='번역아이콘'/>
                <p>{item.title}님이 번역</p>
                <span>2019-01-30</span>
            </div>
            <div style={{position:'relative'}}>
                <img className='similar-img' src={item.img} alt={item.title}/>
                <SimilarPopup className={`similar-option similar-option${index}`}/>
            </div>
            
            <div className='similar-title' >
                <img src={require(`../svg/tugo-icon.svg`)} alt='투고아이콘'/>
                <p>{item.title}님이 투고</p>
                <span>1시간</span>    
            </div>
            <div className='similar-txt'>
                <p>게시물 예시 안녕하세요 안녕하세요</p>
            </div>
            </div>
        })


    
 

    render(){
        
        let boxclass = ['fb-comment'];
        if (this.state.clicked){
            boxclass.push('blue')
        }

        const params = {
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button.next',
                prevEl: '.swiper-button.prev'
            },
        }
        return(
            <div className='view-main'>
                    <div className='view-container-1' style={{height:200}}>이미지 입장</div>
                <div className='divide-section-1'>
                    <div >
                        <div className='view-div'>
                            <div className='tugo-who'>
                                <img src={require(`../svg/tugo-icon.svg`)} alt='투고아이콘'/>
                                <span>{this.state.tugoName}</span>님이 투고했어요
                            </div>
                            <div className='tugo-top'>
                                <img src={require('../svg/profile-img.svg')} alt='샘플이미지'/>

                                <div className='tugo-profile'>
                                    <p className='profile-id'>아이디s</p> 
                                    <p className='profile-email'>@아이디</p>
                                </div>
                                <div className='tugo-sub'>
                                    <div className='dot'></div>
                                    <button type='button' className='follow-btn' style={{color: this.state.color}} onClick={()=> {this.setState({clicked: !this.state.clicked}); this.colorChange()}}>{this.state.clicked? '팔로잉':'팔로우'}</button>
                                    <span className='tugo-datetime'>{this.state.tugoDatetime}</span>
                                </div>
                                <button type='button' className='tugo-more-btn'></button>
                                
                            </div>
                            <div>
                                <p className='tugo-title'>안녕하세요 제목이에요</p>
                                <div className='tugo-content'>
                       
                                        <img className='tugo-iamge-origin' src={require(`../svg/1a684c4d7a31c3419e6ddb5bc2c71194.svg`)} alt='샘플이미지' />
                              
                                </div>
                            </div>
                        </div>
                        <div className='view-div'>
                            <div className='translate-who'>
                                <img src={require(`../svg/translate-icon.svg`)} alt='번역아이콘'/>
                                <span >{this.state.transName}</span>님이 번역했어요
                            </div>
                            <div className='tugo-top'>
                                <img src={require('../svg/profile-img.svg')} alt='샘플이미지'/>

                                <div className='translate-profile'>
                                    <p className='profile-id'>아이디s</p> 
                                    <p className='profile-email'>@아이디</p>
                                </div>
                                <div className='translate-sub'>
                                    <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                    <span className='translate-datetime'>{this.state.transDatetime}</span>
                                </div>
                                <button type='button' className='tugo-more-btn'></button>
                            </div>
                            <div>
                                <p className='tugo-title'>제목</p>
                                <div className='tugo-content'>
                                    본글
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='translate-div'>
                            <div className='flex-content fb-more-btn'>
                                <button className='react-btn'>
                                <img src={require(`../svg/react-icon.svg`)} alt='반응'/>
                                <span className='react-count'>{this.state.reactCount}</span>명이 반응하고 있어요
                                </button>
                            </div>

                            <div className="flex-content">
                                <div>
                                    <img className='heart' src={this.state.bookmark} alt='좋아요' onClick={()=> {this.toggleBtn('bookmark')}}/>
                                </div>
                                <div style={{display:'flex'}}>
                                    <img className='heart' src={this.state.heart} alt='좋아요' onClick={()=> {this.toggleBtn('heart')}}/>
                                    <span className='heart-count'>{this.state.heartCount}</span>
                                </div>
                                <div><button type='button' className='share trans-btn'></button></div>
                                <div style={{display:'flex'}}>
                                    <img className='globe' src={this.state.globe} alt='글로벌' onClick={()=> {this.toggleBtn('globe')}} />
                                    <span className='globe-count'>{this.state.globeCount}</span>
                                </div>
                            </div>
                        </div>
                        <div className='feedback'>
                            <div style={{background:'#fff', margin:'3px 0'}}>
                                <div style={{display:'flex', padding:10,}}>
                                    <img src={require('../svg/comment-icon.svg')} alt='코멘트'/>
                                    <p>피드백<span>{this.state.fbCount}</span>개</p>
                                </div>
                                <FbForm
                                    onCreate={this.handleCreate}
                                    />
                            </div>
                            <div className='fb-group'>
                                <div className='view-div'>
                                    <div className='tugo-top'>
                                        <img src={require('../svg/profile-img.svg')} alt='샘플이미지'/>

                                        <div className='tugo-profile'>
                                            <p className='profile-id'>아이디s</p> 
                                            <p className='profile-email'>@아이디</p>
                                        </div>
                                        <div className='tugo-sub'>
                                            <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                            <span className='tugo-datetime'>2020-03-31</span>
                                        </div>
                                        <button type='button' className='tugo-more-btn'></button>
                                    </div>
                                    <div className='fb-txt'>
                                    agasgasjgljkasjgklasjgalsk;gjaslkghaslghasl'ghasg'jhasgashgj'ashgasjgasgasgagal'sjkg;'askgl'as;kgas'l;kgsal';gkasl;gksa';lkg;''
                                    asgas;lgasg
                                    asgasasgasgasgdshg;jsdhgdshgds gldsjh ldsg lksdg lsd hgl
                                    </div>
                                    <div className='fb-react-btn'>
                                        <div>
                                            <img className='fb-comment' src={this.state.commentIcon} alt='코멘트' onClick={()=> {this.toggleBtn('comment-icon'); this.toggle()} }/>
                                            <span className={boxclass.join(' ')}>{this.state.clicked ? '123' : '124'}</span>
                                        </div>
                                        <div>
                                            <img className='fb-heart'src={this.state.heart} alt='좋아요' onClick={()=> {this.toggleBtn('heart')}}/>
                                            <span>123</span>
                                        </div>

                                        <button type='button'>피드백 하기</button>
                                    </div>
                                </div>
                                <div className='view-div'>
                                    <div className='tugo-top'>
                                        <img src={require('../svg/profile-img.svg')} alt='샘플이미지'/>

                                        <div className='tugo-profile'>
                                            <p className='profile-id'>아이디s</p> 
                                            <p className='profile-email'>@아이디</p>
                                        </div>
                                        <div className='tugo-sub'>
                                            <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                            <span className='tugo-datetime'>2020-03-31</span>
                                        </div>
                                        <button type='button' className='tugo-more-btn'></button>
                                    </div>
                                    <div className='fb-txt'>
                                    agasgasjgljkasjgklasjgalsk;gjaslkghaslghasl'ghasg'jhasgashgj'ashgasjgasgasgagal'sjkg;'askgl'as;kgas'l;kgsal';gkasl;gksa';lkg;''
                                    asgas;lgasg
                                    asgasasgasgasgdshg;jsdhgdshgds gldsjh ldsg lksdg lsd hgl
                                    </div>
                                    <div className='fb-react-btn'>
                                        <div>
                                            <img className='fb-comment'src={this.state.commentIcon} alt='코멘트' onClick={()=> {this.toggleBtn('comment-icon')}}/>
                                            <span>123</span>
                                        </div>
                                        <div>
                                            <img className='fb-heart'src={this.state.heart} alt='좋아요' onClick={()=> {this.toggleBtn('heart')}}/>
                                            <span>123</span>
                                        </div>

                                        <button type='button'>피드백 하기</button>
                                    </div>
                                </div>
                            </div>
                            <div className='fb-more-btn'>
                                <button><span>{this.state.fbGroupMore}</span>개의 피드백 그룹 </button>
                            </div>
                            <div className='fb-personal'>
                                {this.state.fb.map((item, index) => {
                                    function fbToggle(name) { 
                                        if(name === 'fb-comment'){
                                            item.toggleComment = !item.toggleComment;
                                        } else if (name === 'fb-heart') {
                                            item.toggleHeart = !item.toggleHeart;
                                        } else if (name === 'fb-follow') {
                                            item.toggleFollow = !item.toggleFollow;
                                        }
                                    }
                                    
                                    return (
                                        <div className={`view-div view${index}`} key={index}>
                                            <div className='tugo-top'>
                                                <img src={require('../svg/profile-img.svg')} alt='샘플이미지'/>
                                                <div className='tugo-profile'>
                                                    <p className='profile-id'>{item.id}</p> 
                                                    <p className='profile-email'>{item.email}</p>
                                                </div>
                                                <div className='tugo-sub'>
                                                    <button type='button' className={`follow-btn follow-btn${index}`} sytle={{color: this.state.fbFollowColor}} onClick={() => {fbToggle('fb-follow'); this.setState({fbClicked: item.toggleFollow, }); }}>
                                                        {item.toggleFollow?  '팔로잉' : '팔로우'}    
                                                    </button>
                                                    <span className='tugo-datetime'>{item.datetime}</span>
                                                </div>
                                                <FbPopup className={`fb-more-option fb-more-option${index}`} id={item.id}/>
                                            </div>
                                            <div className='fb-txt'>
                                                {item.content}
                                            </div>
                                            <div className='fb-react-btn'>
                                                <div onClick={() => {fbToggle('fb-comment'); this.setState({fbClicked: item.toggleComment}); }}> 
                                                    <span className={`fb-comment${index}`} > 
                                                        {item.toggleComment?  <img src={item.commentIcon1} alt='코멘트'/> :  <img src={item.commentIcon} alt='코멘트'/>}
                                                    </span>
                                                    <span>{item.commentCount}</span>
                                                </div>
                                                <div onClick={() => {fbToggle('fb-heart'); this.setState({fbClicked: item.toggleHeart}); }}>
                                                    <span className={`fb-heart${index}`}   > 
                                                        {item.toggleHeart?  <img src={item.heart1} alt='좋아요'/> :  <img src={item.heart} alt='좋아요'/>}
                                                    </span>
                                                    <span>{item.heartCount}</span>
                                                </div>
                                                <button type='button'>피드백 하기</button>
                                            </div>
                                        </div>
                                        )
                                })}
                            </div>
                            <div className='fb-more-btn'>
                                <button>더 많은 피드백 보기</button>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className='divide-section-2'> 
                    <div className='view-container-2' style={{height:200}}>이미지 입장</div>
                    <div className='view-more'>
                        <h2>ABCD 작가 작품 </h2>
                        <Swiper containerClass='Swiper-container' wrapperClass='swiper-wrapper' slideClass='swiper-div'  {...params}>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
                        </Swiper>
                    </div>
                    <div className='similar-view-more'>
                            <h2>비슷한 작품 </h2>
                            <div className='border-line'></div>

                            <Masonry  breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                                {this.items}
                            </Masonry>                            
                        </div>
                </div>
            </div>
        )
    }
}

export default Viewer;