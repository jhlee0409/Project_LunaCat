import React,{Component} from 'react'
import Modal from 'react-modal'


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
    }
  };

class similarPopup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
            textCase: "",
            text: ""
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
            {/* 비슷한 작품 더보기 옵션*/}
            <button type='button'className='similar-btn'  onClick={this.handleModal} ></button>

            <Modal className={this.props.className} isOpen={this.state.showModal} style={customStyles}>
              <div className='viewer-popup-top'>
                작품 옵션
              </div>           
              <ul className='viewer-popup-main'>
                <li> <button className='viewer-popup-btn' type='button'> 북마크 하기</button> </li> 
                <li> <button className='viewer-popup-btn' type='button'> 번역하기 </button> </li> 
                <li> <button className='viewer-popup-btn' type='button'> 공유하기 </button> </li> 
                <li> <button className='viewer-popup-btn' type='button'> 신고하기 </button> </li> 
                <li> <button className='viewer-popup-btn' type='button'> 뮤트하기 </button> </li> 
              </ul>
              <div className='viewer-popup-x'>
                <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
              </div>
            </Modal>
          </div>
        );
      }
    }


export default similarPopup;
