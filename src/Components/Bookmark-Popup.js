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
        padding:0,
    }
  };

class BookmarkPopupOption extends Component {
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
        <div>
          {/* 뷰어 북마크 옵션*/}
          <button type='button' className='tugo-more-btn bookmark-more-btn'  onClick={this.handleModal} ></button>

          <Modal className='bookmark-more-option' isOpen={this.state.showModal} style={customStyles}>
            <div className='viewer-popup-top' >
              북마크 옵션
            </div>           
            <ul className='viewer-popup-main'>
              <li > <button className='viewer-popup-btn' type='button'> 수정하기  </button> </li> 
              <li> <button className='viewer-popup-btn' type='button' > 삭제하기  </button> </li> 
            </ul>
            <div className='viewer-popup-x'>
              <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
            </div>
          </Modal>
        </div>
      );
    }
  }
  
class AddBookmarkGroup extends Component {
  constructor (props) {
      super(props);
      this.state = {
          showModal: false,
          activeGroup: false,
          bg:'',
          color:'',
         
      };  
      this.handleModal=this.handleModal.bind(this)
      this.activeGroup=this.activeGroup.bind(this)

    }  

  handleModal =()=> {
    this.setState({ showModal: !this.state.showModal,  });
  }
  activeGroup = () => {
    this.setState({ activeGroup: !this.state.activeGroup, });
    if (this.state.activeGroup === false) {
      this.setState({bg: '#A49FBA', color: 'white', })
    } else {
      this.setState({bg: '#fff', color: '#B6B2C8', })
      
    }
    console.log(this.state.activeGroup)

 }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  
    render () {
      return (
        <div>
          {/* 뷰어 북마크 옵션*/}
          <button className='viewer-popup-btn addBookmark' type='button' onClick={this.handleModal}> <img className='bookmark' src={require('../svg/bookmarkPlus.svg')} alt='북마크'/>북마크 그룹 추가하기 </button>

          <Modal className='addBookmark-option' isOpen={this.state.showModal} style={customStyles}>
            <div className='viewer-popup-top' style={{display:'flex'}}>
                <img className='bookmark-popup' src={require('../svg/bookmarkOn.svg')} alt='북마크'/>북마크
            </div>          
            <div className='viewer-popup-main'>
              <div className='addBookmark-title'> 새 북마크 그룹</div>
              <div className='addBookmark-input-div'> <input type='text' placeholder='그룹명을 입력해주세요'></input></div>
              <div className='addBookrmark-btn-div'> 
                <button type='button' className='addBookmark-btn1' style={{background:this.state.bg, color:this.state.color}}onClick={this.activeGroup} ><img src={require('../svg/lock-icon.svg')} alt='잠금'/>비밀그룹</button>
                <button type='button' className='addBookmark-btn2'>만들기 </button>
              </div>
            </div>
            <div className='viewer-popup-x'>
              <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
            </div>
          </Modal>
        </div>
      );
    }
  }


class BookmarkPopup extends Component {
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
          <div>
            {/* 뷰어 북마크 */}
            <button type='button'className=''  onClick={this.handleModal} ></button>

            <Modal className='bookmark-option' isOpen={this.state.showModal} style={customStyles}>
              <div className='viewer-popup-top' style={{display:'flex'}}>
                <img className='bookmark-popup' src={require('../svg/bookmarkOn.svg')} alt='북마크'/>북마크
              </div>           
              <ul className='viewer-popup-main bookmark-popup-main'>
                <li className='bookrmark-li'> <button className='viewer-popup-btn bookmark-popup-btn' type='button'> 북마크 제목  </button> <BookmarkPopupOption/> </li> 
                <li className='bookrmark-li'> <button className='viewer-popup-btn bookmark-popup-btn' type='button'> 북마크 제목  </button> </li> 
                <li className='bookrmark-li'> <button className='viewer-popup-btn bookmark-popup-btn' type='button'> 북마크 제목  </button> </li> 
                <li className='bookrmark-li'> <AddBookmarkGroup/> </li> 
              </ul>
              <div className='viewer-popup-x'>
                <button className='viewer-popup-btn' type='button' onClick={this.handleModal} >닫기</button>
              </div>
            </Modal>
          </div>
        );
      }
    }


export default BookmarkPopup;
