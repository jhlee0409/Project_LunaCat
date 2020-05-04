import React,{Component} from 'react'
import Modal from 'react-modal'
import '../Join-mem.css'


const customStyles = {
    content : {
        background: '#fff',
        outline: 'none',
        margin: 'auto',
        padding: '54px 60px 55px',
        right: 'auto ',
        bottom: 'auto ',
        top: '50%  ',
        left: '50% ',
        transform: 'translate(-50%, -50%) ',
        position: 'fixed',
        overflow: 'visible ',   
    }
  };

function toLowerText(text) {
  return text.toLowerCase();
}

function TextLength(props) {
  return <span className="textLength" >{props.text.length}/30</span>
}

// 비밀번호 패턴 체크 (8자 이상, 영문, 숫자, 특수문자 포함여부 체크) 
function checkPasswordPattern() { 
  var pattern1 = /[0-9]/; // 숫자 
  var pattern2 = /[a-zA-Z]/; // 영문
  var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자 
  var pw = document.getElementById('join-pass1').value;
  var pw2 = document.getElementById('join-pass2').value;

  if(!pattern1.test(pw) || !pattern2.test(pw) || !pattern3.test(pw) || pw.length < 8 ) {
     alert("비밀번호는 8자리 이상 영문, 숫자, 특수문자로 구성하여야 합니다."); 
     return false; 
    } else { 
      if (pw !== pw2) {
        alert('비밀번호가 일치하지 않습니다.')
        return false;
      } else {
        return true; 
      }   
    } 
  }

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }
  
  render() {
    var text = this.props.text;
    
    return (
        <input value={text} placeholder="멋진 이름을 지어봐요^^" maxLength='29' onChange={this.handleChange} />
    );
  }
}



class JoinMem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
            showModal1: false,
            textCase: "",
            text: ""
        };  
        this.handleModal = this.handleModal.bind(this)
        this.handleModal1 = this.handleModal1.bind(this)
        this.handleLower = this.handleLower.bind(this);
      }    
    componentDidMount() {
        Modal.setAppElement('body');
    }
    handleModal =()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    handleModal1 =()=> { if (checkPasswordPattern() === true) {
      this.setState({ showModal1: !this.state.showModal1 });
    } else {
      this.setState({ showModal1: false})
    }
        
    }
    handleLower(text) {
        this.setState({
          textCase: "lower",
          text: text
        });
      }
      
    

      render () {
        var text = this.state.text;
        var lowerText = toLowerText(text);
        return (
          <div>
            {/* 회원가입모달*/}
            <button type='button' onClick={this.handleModal}>회원가입</button>

            <Modal className='join-width' isOpen={this.state.showModal} contentLabel="회원가입" style={customStyles}>
              {/* 회원가입 모달 네브 */}
              <div className='border-bottom'>
               <input className='join-main-x' type ='button'  onClick={this.handleModal} />
               <button type="button" onClick={() => {this.handleModal1(); checkPasswordPattern();}} className="sub-btn join-btn">가입하기</button>
              </div>
              
              {/* 회원가입 폼 */}
            <div className='join-main'>
              <form action="" method="POST">
                    <h3>회원가입하기</h3>
                    <p >이메일</p>
                    <div className="inputBox">
                        <input type='email' name="join-email" id="join-email" placeholder="자주 사용하는 이메일을 입력해 주세요!"
                        />
                        <span className="span-active">메일형식 확인</span>
                    </div>
                    <p >비밀번호</p>
                    <div className="inputBox">
                        <input type="password" name="join-pass1" id="join-pass1" placeholder="영문 + 숫자 + 특수문자 (8자 이상)"/>
                        <span className="span-active">비밀번호 확인</span>
                        <span className="span-active">최소 8자 이상</span>
                    </div>
                    <p >비밀번호 확인</p>
                    <div className="inputBox">
                        <input type="password" name="join-pass2" id="join-pass2" placeholder="영문 + 숫자 + 특수문자 (8자 이상)" minLength='8'/>
                        <span className="span-active">비밀번호 확인</span>
                    </div>
                    <p >닉네임</p>
                    <div className="inputBox">
                        <TextInput text={lowerText} tyxpe="text" name="join-name" id="join-name" onTextChange={this.handleLower} />
                        <TextLength   text={text} />       
                    </div>
                    <div className="join-txt"> <input type='button' className='agree-modal'value='이용약관'/>및 <input type='button' className='agree-modal'value='개인정보 취급방침'/>에 동의여부</div>
                    <div className="consent-btn">
                        <button type="button" className="agree-btn">동의하기</button>
                        <button type="button" onClick={() => {this.handleModal1(); checkPasswordPattern();}} className="sub-btn join-btn">가입하기</button>
                    </div>
                </form>
            </div>
            </Modal>

            {/* 가입완료 모달*/}
            <Modal  isOpen={this.state.showModal1} style={customStyles} >
              <div className='border-bottom'>
                <input className='join-main-x' type ='button'  onClick={this.handleModal1} />
                <button type="button"  className="sub-btn">메일 확인하기</button>
              </div>
                
              <div className='join-main'>
                <div>인증 메일 발송!</div>
                  <div style={{ paddingTop: 30}}>가입하신 이메일로 인증 요청을 시도했어요.<br/><br/>발송 된 메일의 링크를 클리하시면 에픽로그의 가족이 된답니다.</div>
                  <div className="consent-btn">
                    <div></div>
                    <button type="button"  className='mail-check'>메일 확인하기</button>
                  </div>
              </div>
              
            </Modal>
            {/* 이용약관 모달*/}
            <Modal  isOpen={this.state.showModal2}>
            <input  type ='button' onClick={this.handleModal2} />
            </Modal>
            {/* 개인정보 취급방침 모달*/}
            <Modal  isOpen={this.state.showModal2}>
            <input  type ='button' onClick={this.handleModal2} />
            </Modal>
            
          </div>
        );
      }
    }


export default JoinMem;
