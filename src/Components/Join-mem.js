import React,{Component} from 'react'
import Modal from 'react-modal'
import './Join-mem.css'


const customStyles = {
    content : {
         width: 750,
         margin: 'auto',
         padding: '54px 60px 55px',
         borderRadius: '5px'
    }
  };

  function toLowerText(text) {
    return text.toLowerCase();
  }
  
  function TextLength(props) {
    return <span className="textLength" >{props.text.length}/30</span>
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
          <input value={text} placeholder="멋진 이름을 지어봐요^^" maxLength='30' onChange={this.handleChange} />
      );
    }
  }
  


class PopModal extends Component {
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
    handleModal1 =()=> {
        this.setState({ showModal1: !this.state.showModal1 });
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
            <input type ='button' onClick={this.handleModal} value='modal'/>
            <Modal  isOpen={this.state.showModal} contentLabel="Minimal Modal Example" style={customStyles}>
            <input className='join-main-x' type ='button'  onClick={this.handleModal}/>
            <div className='join-main'>
              <form action="" method="POST">
                    <h3>회원가입하기</h3>
                    <p style={{ display: 'none'}}>이메일</p>
                    <div className="inputBox">
                        <input type='email' name="join-email" id="join-email" placeholder="자주 사용하는 이메일을 입력해 주세요!"
                        />
                        <span className="span-active">메일형식 확인</span>
                    </div>
                    <p style={{ display: 'none'}}>비밀번호</p>
                    <div className="inputBox">
                        <input type="password" name="join-pass1" id="join-pass1" placeholder="영문 + 숫자 + 특수문자 (8자 이상)"/>
                        <span className="">비밀번호 확인</span>
                        <span className="span-active">최소 8자 이상</span>
                    </div>
                    <div className="inputBox">
                        <p style={{ display: 'none'}}>비밀번호 확인</p>
                        <input type="password" name="join-pass2" id="join-pass2" placeholder="영문 + 숫자 + 특수문자 (8자 이상)" minLength='8'/>
                        <span className="span-active">비밀번호 확인</span>
                    </div>
                    <div className="inputBox">
                        <p style={{ display: 'none'}}>닉네임</p>
                        <TextInput text={lowerText} tyxpe="text" name="join-name" id="join-name" onTextChange={this.handleLower} />
                        <TextLength   text={text} />       
                    </div>
                    <p className="join-txt">에팍로그 이용 약관 및 개인정보 취급방침에 동의여부</p>
                    <div className="consent-btn">
                        <button type="button" className="agree-btn">동의하기</button>
                        <button type="button" onClick={this.handleModal1} className="sub-btn join-btn">가입하기</button>
                    </div>
                </form>
            </div>
            </Modal>
            {/* 회원가입완료 모달*/}
            <Modal  isOpen={this.state.showModal1}>
            <input  type ='button'  onClick={this.handleModal1}/>
            </Modal>
          </div>
        );
      }
    }


export default PopModal;
