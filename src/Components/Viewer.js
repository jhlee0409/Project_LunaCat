import React, { Component } from 'react'
import '../css/Viewer.css'
import Grid from '@material-ui/core/Grid';
import Swiper from 'react-id-swiper';
import tileData from './tileData';

import Masonry from 'react-masonry-css'

  const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1300: 3,
    960: 3,
    800: 2,
  };

class Viewer extends Component {
    constructor(props) {
        super(props)
        this.state= {
            text: '팔로우',
            tugoName: 'ABCD',
            tugoDatetime: '2020-03-31',
            transName: 'ABCD',
            transDatetime: '2020-03-31',
            reactCount: '2,164',
            heartCount: 294,
            globeCount: 21,
            fbCount: 284,
            fbGroupMore: 5,

            selected: false,
        }
        this.textChange=this.textChange.bind(this)
        this.toggleChange=this.toggleChange.bind(this)

    }

    textChange = () => {
        if (this.state.text === '팔로우') {
            this.setState({text: '팔로잉'})
        } else {
            this.setState({text: '팔로우'})
        }
    }

    toggleChange = () => {
        this.setState({
            selected: !this.state.selected
        })
    }

    items = tileData.map(function(item, index) {
        return <div className='similar-slide' key={index}>
            <div className='similar-title'>
                <p>{item.title}님이 번역</p>
                <span>2019-01-30</span>
            </div>
            <div style={{position:'relative'}}>
                <img src={item.img} alt={item.title}/>
                <button className='similar-btn' type='button'></button>
            </div>
            
            <div className='similar-title' >
                <p>{item.title}님이 투고</p>
                <span>1시간</span>    
            </div>
            <div className='similar-txt'>
                <p>lorem safh q;wjklhfjqw;hf;a sahjfj;lqwhfuwh ashj fdl;wqhfln kas;jndikwsahjd iqwohdjklsan;</p>
            </div>
            </div>
        })

    render(){
        const params = {
            direction: 'horizontal',
            slidesPerView: 'auto',
            freeMode: false,
            scrollbar: {
                el: '.swiper-scrollbar',
                position: 'absolute',
                left: '2%',
                bottom: 16,
                zIndex: 50,
                height: 8,
                width: '96%',
            },
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button.next',
                prevEl: '.swiper-button.prev'
              },
        }
        return(
            <div className='view-main'>
                <Grid container direction="row-reverse" spacing={1}>
                    <Grid item  md={4} xs={12}>
                        <div className='view-div'>
                            <span>{this.state.tugoName}</span>님이 투고했어요
                            <div className='tugo-top'>
                                이미지
                                <div className='tugo-profile'>
                                    <p>아이디s</p> 
                                    <p>@아이디</p>
                                </div>
                                <div className='tugo-sub'>
                                    <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                    <span className='tugo-datetime'>{this.state.tugoDatetime}</span>
                                </div>
                                <button type='button' className='tugo-more-btn'></button>
                            </div>
                            <div>
                                <p className='tugo-title'>제목</p>
                                <div className='tugo-origin'>
                                    원본이미지
                                </div>
                            </div>
                        </div>

                        <div className='view-div'>
                        <span>{this.state.transName}</span>님이 투고했어요
                            <div className='tugo-top'>
                                이미지
                                <div className='tugo-profile'>
                                    <p>아이디s</p> 
                                    <p>@아이디</p>
                                </div>
                                <div className='tugo-sub'>
                                    <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                    <span className='tugo-datetime'>{this.state.transDatetime}</span>
                                </div>
                                <button type='button' className='tugo-more-btn'></button>
                            </div>
                            <div>
                                <p className='tugo-title'>제목</p>
                                <div className='tugo-origin'>
                                    본글
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item  md={8} xs={12}>
                        <div className='view-container'>
                            이미지 
                        </div>
                    </Grid>
                    <Grid item  md={4} xs={12}>
                        <div className='translate-sub'>
                            <button><span className='react-count'>{this.state.reactCount}</span>명이 반응하고 있어요</button>
                            <div className="flex-content">
                                <div><button type='button' className='bookmark trans-btn'></button></div>
                                <div><button type='button' className='heart trans-btn' ><span className='heart-count'>{this.state.heartCount}</span></button></div>
                                <div><button type='button' className='share trans-btn'></button></div>
                                <div><button type='button' className='globe trans-btn'><span className='globe-count'>{this.state.globeCount}</span></button></div>
                            </div>
                        </div>

                        <div className='feedback'>
                            <p>피드백<span>{this.state.fbCount}</span>개</p>
                            <div className='fb-div'>
                                <input className='fb-write' placeholder='피드백하기'/> 
                                <button type='button'className='fb-btn'></button>  
                            </div>
                            
                            <div className='fb-group'>
                                <div className='view-div'>
                                    <span>ABCD</span>님이 투고했어요
                                    <div className='tugo-top'>
                                        이미지
                                        <div className='tugo-profile'>
                                            <p>아이디s</p> 
                                            <p>@아이디</p>
                                        </div>
                                        <div className='tugo-sub'>
                                            <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                            <span className='tugo-datetime'>2020-03-31</span>
                                        </div>
                                        <button type='button' className='tugo-more-btn'></button>
                                    </div>
                                    <div>
                                        <p className='tugo-title'>제목</p>
                                        <div className='tugo-origin'>
                                            원본이미지
                                        </div>
                                    </div>
                                </div>
                                <div className='view-div'>
                                    <span>ABCD</span>님이 투고했어요
                                    <div className='tugo-top'>
                                        이미지
                                        <div className='tugo-profile'>
                                            <p>아이디s</p> 
                                            <p>@아이디</p>
                                        </div>
                                        <div className='tugo-sub'>
                                            <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                            <span className='tugo-datetime'>2020-03-31</span>
                                        </div>
                                        <button type='button' className='tugo-more-btn'></button>
                                    </div>
                                    <div>
                                        <p className='tugo-title'>제목</p>
                                        <div className='tugo-origin'>
                                            원본이미지
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='fb-more-btn'>
                                <button><span>{this.state.fbGroupMore}</span>개의 피드백 그룹 </button>
                            </div>
                            <div className='fb-personal'>
                                <div className='view-div'>
                                    <div className='tugo-top'>
                                        이미지
                                        <div className='tugo-profile'>
                                            <p>아이디s</p> 
                                            <p>@아이디</p>
                                        </div>
                                        <div className='tugo-sub'>
                                            <button type='button' className='follow-btn' onClick={this.textChange}>{this.state.text}</button>
                                            <span className='tugo-datetime'>2020-03-31</span>
                                        </div>
                                        <button type='button' className='tugo-more-btn'></button>
                                    </div>
                                    <div>
                                        test testtesttesttesttesttesttest
                                    </div>
                                    <div className='react-btn'>
                                        <div>댓글</div>
                                        <div>좋아요</div>
                                        <button type='button'>피드백 하기</button>
                                    </div>
                                </div>
                            </div>
                            <div className='fb-more-btn'>
                                <button>더 많은 피드백 보기</button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item  md={8} xs={12}>
                        <div className='view-more'>
                            <h2>ABCD 작가 작품 </h2>
                        <Swiper containerClass='Swiper-container' wrapperClass='swiper-wrapper' slideClass='swiper-div' watchOverflow='false' {...params}>
                            <div><img src={require('../svg/more-sample.svg')} alt='그림'/></div>
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
                            <Masonry  breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                                {this.items}
                            </Masonry>                            
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Viewer;