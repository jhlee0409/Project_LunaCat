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

class SharePopup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: true,
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
            {/* 공유하기 옵션*/}
            <button type='button' className='share trans-btn' onClick={this.handleModal} ></button>
            <Modal className='share-popup-option' isOpen={this.state.showModal} style={customStyles}>
              <div className='viewer-popup-top'>
              <img className='share-popup' src={require('../svg/shareOn.svg')} alt='공유하기'/>공유하기
              </div>           
              <ul className='viewer-popup-main'>
                <li className='share-popup-li'> <button className='viewer-popup-btn' type='button'> <img className='share-popup' src={require('../svg/link-icon.svg')} alt='링크'/>링크 공유하기</button> </li> 
                <li className='share-popup-li'> 
                  <button className='viewer-popup-btn' type='button'> <img  src={require('../svg/twitter-logo.svg')} alt='트위터'/> </button> 
                  <button className='viewer-popup-btn' type='button'> <img  src={require('../svg/Pinterest-logo.svg')} alt='핀터레스트'/> </button> 
                  <button className='viewer-popup-btn' type='button'> <img  src={require('../svg/tumblr-logo.svg')} alt='텀블러'/> </button> 
                </li> 
              </ul>
              <div className='viewer-popup-x'>
                <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
              </div>
            </Modal>
          </div>
        );
      }
    }


export default SharePopup;
