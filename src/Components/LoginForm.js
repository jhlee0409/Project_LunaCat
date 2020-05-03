import React,{Component} from 'react'
import Modal from 'react-modal'
import '../LoginForm.css'
import logo from '../svg/logo.svg';
import JoinMem from './Join-mem';

const customStyles = {
    content : {
        outline: 'none',
        position: 'absolute',
        background: '#fff',
        margin: 'auto',
        borderRadius: 10,
        boxShadow: '0px 4px 6px #00000017',
        overflow: 'hidden',
        right: 'auto ',
        bottom: 'auto ',
        top: '50%  ',
        left: '50% ',
        transform: 'translate(-50%, -50%) ',
    }
  };

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            showModal: false,
            showModal1: false
        }
        this.handleModal=this.handleModal.bind(this)
        this.handleModal1=this.handleModal1.bind(this)
    }

    handleModal =()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    handleModal1 =()=> {
        this.setState({ showModal1: !this.state.showModal1 });
    }
    render() {
        return (
            <div>
                <input type='button' value='로그인' onClick={this.handleModal} />
                <Modal className='login-width' isOpen={this.state.showModal} style={customStyles}>
                    <div className='login-modal-top'>
                        <img className='Logo logo-popup'src={logo} alt='로고'/>
                        <h3 className="login-txt">"welcome to Epiclogue"</h3>
                    </div>
                    <div className='login-box'>
                        <form action="" method="POST"> 
                            <div className='login-input' >
                                <input type='text' className='login-box' id='login-id' placeholder='이메일/아이디'/>
                                <input type='password' className='login-box' id='login-pw' placeholder='비밀번호' />
                            </div>
                            <span className='login-lost click-box' onClick={this.handleModal1} >혹시 로그인 정보를 잃어버리셨나요?</span>
                            <div className='Login-btn-box' >
                                <button type='button' className='login-btn1' >로그인</button>
                                <JoinMem/>
                            </div>
                            <div className="border-line"></div>
                            <div className='sns-login' >
                                <p className="login-txt">SNS Login</p>
                                <button type='button' className='sns-btn1'>+ google</button>
                                <div className="join-txt">SNS 로그인을 하시면<br/> <input type='button' className='agree-modal click-box'value='이용약관'/>및 <input type='button' className='agree-modal click-box'value='개인정보 취급방침'/>에 <br/>동의하는 것으로 간주됩니다.</div>
                            </div>
                        </form>
                    </div>
                </Modal>
                <Modal isOpen={this.state.showModal1} style={customStyles}>
                    <form action="" method="POST">
                        <div className='email-form'>
                        <p className="login-txt" >가입했던 메일로 임시 비밀번호 보내드려요</p>
                        <input type="text" name="" id="email-id" placeholder="이메일/아이디" className="login-box"/>
                        </div>
                        <button type="button" className="send-email-btn">발송하기</button>
                    </form>
                    <div >
                    <button type='button'  onClick={this.handleModal1}>닫기</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default LoginForm;