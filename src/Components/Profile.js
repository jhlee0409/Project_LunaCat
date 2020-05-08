import React, {Component,createRef} from 'react';
import '../css/Profile.css'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Modal from 'react-modal'

const options = ['대한민국', '中國', 'United States of America', 'United States of America',];

const useStyles = theme => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
      });
const style = ({
    background:'#fff',
    border: 'none',
    boxShadow:'none'
})

const customStyles = {
    content : {
        background: '#fff',
        outline: 'none',
        margin: 'auto',
        right: 'auto ',
        bottom: 'auto ',
        top: '50%  ',
        left: '50% ',
        transform: 'translate(-50%, -50%) ',
        position: 'fixed',
        overflow: 'visible ',  
        width: 340,
    }
  };

class ChangePwPopup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
        };  
        this.handleModal=this.handleModal.bind(this)
        
      }    
      handleModal =()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    
    componentWillMount() {
      Modal.setAppElement('body');
  }

      render () {
        return (
          <div style={{marginLeft: 'auto'}}>
            {/* 비밀번호 변경 옵션*/}
            <button type='button' className='change-pw-btn' onClick={this.handleModal}>비밀번호 변경</button>

            <Modal className={this.props.className} isOpen={this.state.showModal}  style={customStyles}>
                <form>
                    <div className='viewer-popup-top'>
                    비밀번호 변경하기
                    <button type='submit' className='submit-profile-btn submit-pw-btn' onClick={this.handleModal} >변경하기</button>
                    </div>           
                    <ul className='viewer-popup-main'>
                        <li className='pf_form_wrap'><p>기존 비밀번호</p><input type='password' name='nickname' maxLength='30' placeholder='닉네임을 입력하세요'></input></li>
                        <li className='pf_form_wrap'><p>새로운 비밀번호</p><input type='password' name='nickname' maxLength='30' placeholder='영문 + 숫자 + 특수문자 (8자 이상)'></input></li>
                        <li className='pf_form_wrap'><p>새로운 비밀번호 확인</p><input type='password' name='nickname' maxLength='30' placeholder='영문 + 숫자 + 특수문자 (8자 이상)'></input></li>
                    </ul>
                    <div className='viewer-popup-x'>
                        <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
                    </div>
                </form>
            </Modal>
          </div>
        );
      }
    }


class SplitButton extends Component {
    anchorRef = createRef(null);
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            selectedIndex: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClick = () => {
        console.info(`You clicked ${options[this.state.selectedIndex]}`);
    };
    handleMenuItemClick = (e, index) => {
        this.setState({
            open: false,
            selectedIndex: index,

        })
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleClose = (event) => {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
            }
            this.setState({
                open: false
            })
    };

    render() {
        return (
            <Grid container alignItems="center">
                <Grid  item xs={12}>
                    <ButtonGroup  variant="contained" style={{boxShadow:'none',border:'2px solid #2222'}} ref={this.anchorRef} aria-label="split button">
                        <Button className='nation-selc' style={style} onClick={this.handleClick}>{options[this.state.selectedIndex]}</Button>
                        <Button
                            className='nation-arrow-btn'
                            size="small"
                            aria-controls={this.state.open ? 'split-button-menu' : undefined}
                            aria-expanded={this.state.open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={this.handleToggle}
                            style={style}
                        >
                            <img src={require('../svg/arrowDown.svg') }alt='화살표'/>
                        </Button>
                    </ButtonGroup>
                    <Popper open={this.state.open} anchorEl={this.anchorRef.current} role={undefined} transition disablePortal style={{width:'60%'}}>
                    {({ TransitionProps, placement }) => ( <Grow {...TransitionProps} style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',}}>
                        <Paper style={{maxHeight: 200, overflowY:'auto',}}> 
                            <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList id="split-button-menu" >
                                {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    disabled={index === 50}
                                    selected={index === this.state.selectedIndex}
                                    onClick={(e) => this.handleMenuItemClick(e, index)}
                                >
                                    {option}
                                </MenuItem>
                                ))}
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Grid>
            </Grid>
        );
    }
}


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state={
            bannerFile: null,
            profileFile: null,
            introduce:'',
            nickname:'',
            id:'',
        }
        this.uploadBannerFile = this.uploadBannerFile.bind(this)
        this.uploadProfileFile = this.uploadProfileFile.bind(this)
        this.upload = this.upload.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }

    uploadBannerFile(e) {
        this.setState({
            bannerFile: URL.createObjectURL(e.target.files[0])
        })
    }
    uploadProfileFile(e) {
        this.setState({
            profileFile: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.bannerFile)
        console.log(this.state.profileFile)
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    
      }
    handleSubmit = (e) => {
        alert(`Banner file was submitted: ${this.state.bannerFile} 
        and Profile file : ${this.state.profileFile}
        and introduce content : ${this.state.introduce}, nickname = ${this.state.nickname}, id = ${this.state.id}`);
        e.preventDefault();
      }
    render() {
        let imgPreviewB;
        let imgPreviewF;
        if (this.state.bannerFile) {
            imgPreviewB = <img src={this.state.bannerFile} alt='배너' />;
        } 
        if (this.state.profileFile) {
            imgPreviewF = <img src={this.state.profileFile} alt='프로필' />;
        }
        return (
            <div className='padding-top '>
                <form onSubmit={this.handleSubmit} >
                    <div className='bg-color'>
                        <div className='profile-top'>
                            <span>프로필 설정</span>
                            <button type='submit' className='submit-profile-btn'>변경하기</button>
                        </div>
                        <div className='profile-image-upload'> 
                            <div className='preview-banner'>
                                <input id='banner-upload' type='file' alt='배너'  onChange={this.uploadBannerFile}></input>
                                {imgPreviewB}
                                <label htmlFor='banner-upload'>배너업로드</label>
                            </div>
                            <div className='preview-profile'>
                                <input id='profile-upload' type='file' alt='프로필' onChange={this.uploadProfileFile} ></input>
                                {imgPreviewF}
                                <label htmlFor='profile-upload'>프로필업로드</label>
                            </div>

                        </div>
                        <div className='pf_form_wrap textArea'>
                            <textarea name='introduce'cols='300' rows='20' onChange={this.handleChange} placeholder='자신을 소개해봐요!'></textarea>
                        </div>
                        
                        <div className='pf_form_wrap'><p>이메일</p><span>asfasfsf@asdfgadsfasf.com</span></div>
                        <div className='pf_form_wrap'><p>닉네임</p><input type='text' onChange={this.handleChange} name='nickname' maxLength='30' placeholder='닉네임을 입력하세요'></input></div>
                        <div className='pf_form_wrap'><p>아이디</p><input type='text' onChange={this.handleChange} name='id' maxLength='30' placeholder='@QGSAFDWQRF'></input></div>
                    
                        <div className='pf_form_wrap flex-content'>
                            <div className='flex-column nation-set'>
                                <span>국가설정</span>
                                <SplitButton/>
                            </div>
                            <div className='flex-column lang-set'>
                                <span>언어설정</span>
                                <button type='button' className='lang-set-btn'>한국어</button>
                                <button type='button' className='lang-set-btn'>English</button>
                                <button type='button' className='lang-add-btn'>추가하기</button>
                            </div>
                        </div>
                        <div className='change-pw-wrap'>
                            <div className='pf_form_wrap' >
                                <ChangePwPopup/>
                            </div>
                            <div></div>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default withStyles(useStyles)(Profile);