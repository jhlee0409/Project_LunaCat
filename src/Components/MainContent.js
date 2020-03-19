import React, { Component } from 'react';
import '../App.css';

import PostOption from '../Components/PostOption';
import ImageUploaderJS from '../Components/ImageUploaderJS';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      selectedFile : null,
    }
  } 

  render() {
      return(
      <section className='main' >
        <article className='article a'>
          <label>드래그나 클릭해서 업로드하세요.</label>        
          <div className='Upload'>
            <ImageUploaderJS></ImageUploaderJS>
          </div>
        </article>
        
        <article className='article b'>
          내용
        </article>

        <article className='article c'>
          <div className='UploadTitle'>
            <input className='UploadTitle' maxLength='50' type='text' placeholder="제목을 입력하세요." ></input>
          </div>
          <div><textarea className='sns-text'cols='50' rows='8' placeholder='내용을 작성해 주세요.' maxLength='300' ></textarea></div>
          <PostOption></PostOption>
        </article>
      </section>
    )
  }
}


export default MainContent;
