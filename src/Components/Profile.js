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

const options = ['대한민국', '中國', 'United States of America'];

const useStyles = theme => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
      });
  
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
        const { classes } = this.props;
        return (
            <Grid container alignItems="center">
                <Grid  item xs={12}>
                    <ButtonGroup className='' variant="contained"  ref={this.anchorRef} aria-label="split button">
                        <Button className='nation-selc'  onClick={this.handleClick}>{options[this.state.selectedIndex]}</Button>
                        <Button
                            className='nation-arrow-btn'
                            
                            size="small"
                            aria-controls={this.state.open ? 'split-button-menu' : undefined}
                            aria-expanded={this.state.open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={this.handleToggle}
                        >
                            <img src={require('../svg/arrowDown.svg') }alt='화살표'/>
                        </Button>
                    </ButtonGroup>
                    <Popper open={this.state.open} anchorEl={this.anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => ( <Grow {...TransitionProps} style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',}}>
                        <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList id="split-button-menu">
                                {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    disabled={index === 3}
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
            profileFile: null
            
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }
    uploadSingleFile(e) {
        this.setState({
            bannerFile: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.bannerFile)
    }
    render() {
        let imgPreview;
        if (this.state.bannerFile) {
            imgPreview = <img src={this.state.bannerFile} alt='' />;
        }
        return (
            <div className='padding-top'>
                <form>
                    <div className='bg-color'>
                        <div className='profile-top'>
                            <span>프로필 설정</span>
                            <button type='submit' className='submit-profile-btn'>변경하기</button>
                        </div>
                        <div className='profile-image-upload'> 
                            <input className='banner-upload' type='file' alt='배너' onChange={this.uploadSingleFile} ></input>
                            <div className='preview-banner'>
                            {imgPreview}
                            </div>
                            <input className='profile-upload' type='file' alt='프로필'></input>
                        </div>
                        <div className='pf_form_wrap textArea'>
                            <textarea name='content'cols='300' rows='20' placeholder='자신을 소개해봐요!'></textarea>
                        </div>
                        
                        <div className='pf_form_wrap'><p>이메일</p><span>asfasfsf@asdfgadsfasf.com</span></div>
                        <div className='pf_form_wrap'><p>닉네임</p><input type='text' name='nickname' maxLength='30' placeholder='닉네임을 입력하세요'></input></div>
                        <div className='pf_form_wrap'><p>아이디</p><input type='text' name='nickname' maxLength='30' placeholder='@QGSAFDWQRF'></input></div>
                    
                        <div className='pf_form_wrap flex-content'>
                            <div className='flex-column nation-set'>
                                <span>국가설정</span>
                                <SplitButton/>
                            </div>
                            <div className='flex-column lang-set'>
                                <span>언어설정</span>
                                <button type='button'>한국어</button>
                                <button type='button'>English</button>
                                <button type='button'>추가하기</button>
                            </div>
                        </div>
                        <div className='change-pw-wrap'>
                            <div className='pf_form_wrap' >
                                <button type='button'>비밀번호 변경</button>
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