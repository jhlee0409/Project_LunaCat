

import React from 'react';
import Popup from "reactjs-popup";
import '../App.css';



class ControlledPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
      this.setState({ open: true });
    }
    closeModal() {
      this.setState({ open: false });
    }
  
    render() {
      return (
        <div>
          <button className="button" onClick={this.openModal}>
            ㅁㄴㄹㄴㄹ
          </button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <button className="close" onClick={this.closeModal}>
                닫기
            </button>
              {this.props.content}
            </div>
          </Popup>
        </div>
      );
    }
  }


export default ControlledPopup;