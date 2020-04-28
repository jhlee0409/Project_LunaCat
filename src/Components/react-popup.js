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
          showModal: false,
          react: [
            {
              id: 'aswdgaadg',
              email:'asdfasd@szfef',
              status: '공유함',
              datetime: '1시간'
            },
            {
              id: 'aswdgaadg',
              email:'asdfasd@szfef',
              status: '좋아함',
              datetime: '1시간'
            },
            {
              id: 'aswdgaadg',
              email:'asdfasd@szfef',
              status: '북마크함',
              datetime: '1시간'
            },
            {
              id: 'aswdgaadg',
              email:'asdfasd@szfef',
              status: '피드백함',
              datetime: '1시간'
            },
            {
              id: 'aswdgaadg',
              email:'asdfasd@szfef',
              status: '피드백함',
              datetime: '1시간'
            }
          ]
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
            {/* 반응 옵션*/}
            <button className='react-btn' onClick={this.handleModal}>
              <img src={require(`../svg/react-icon.svg`)} alt='반응'/>
              <span className='react-count'>{this.props.cnt}</span>명이 반응하고 있어요
            
            </button>
            <Modal className='share-popup-option' isOpen={this.state.showModal} style={customStyles}>
              <div className='viewer-popup-top'>
              <img src={require(`../svg/react-icon.svg`)} alt='반응'/> 반응 ({this.props.cnt})
              </div>           
                {this.state.react.map((item, index) => {
                  return <ul className='viewer-popup-main' key={index}>
                    <li className='share-popup-li' >
                      <div style={{position: 'relative', padding:10}}>
                        <img src={require('../svg/profile-react.svg')} alt='공유함' />
                        <div style={{position: 'absolute', bottom:8, left:6}}>
                          {item.status === '공유함' && <img  src={require('../svg/share-react.svg')} alt='공유함' />}
                          {item.status === '좋아함' && <img  src={require('../svg/like-react.svg')} alt='좋아함' />}
                          {item.status === '북마크함' && <img  src={require('../svg/bookmark-react.svg')} alt='북마크함' />}
                          {item.status === '피드백함' && <img  src={require('../svg/comment-react.svg')} alt='피드백함' />}
                        </div>
                      </div>
                      <div>
                        <p className='profile-id'>{item.id}</p> 
                        <p className='profile-email'>{item.email}</p>
                      </div>
                      <div>
                        <span>{item.status}</span>
                        <span>{item.datetime}</span>
                      </div>
                      </li> 
                  </ul>
                })}
              <div className='viewer-popup-x'>
                <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
              </div>
            </Modal>
          </div>
        );
      }
    }


export default SharePopup;
