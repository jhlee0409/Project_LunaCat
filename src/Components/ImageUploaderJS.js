import React, { Component } from 'react';
import '../App.css';
import ImageUploader from 'react-images-upload';


class ImageUploaderJS extends Component {

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      maxSize: 50,
      file: [],
      URLs: [],
    }
  }
  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      file: this.state.file.slice(this.state.file.length).concat(pictureFiles),
      URLs: this.state.URLs.slice(this.state.file.length)
    });
}
  render(){  
    if ( this.state.file.length !== this.state.URLs.length) {
      for (let i = 0; i < this.state.file.length; i++) {
        this.state.URLs.push(URL.createObjectURL(this.state.file[i]))
      }
    }
    return(         
      <div>        
          <ImageUploader   
          withPreview={true}
          withIcon={false}
          label=''          
          buttonClassName='ImageUploaderButton'   
          className='ImaUp'                 
          buttonText=''
          onChange={(a) => {this.onDrop(a);}} 
          fileSizeError='한도 용량이 초과되었어요!'
          fileTypeError='.jpg, .gif, .png 만 가능해요'
          imgExtension={['.jpg', '.gif', '.png']}
          maxFileSize={1024*1024*this.state.maxSize}/>  
          {this.state.URLs.map((url,index) => {
            return (
              <div key={index}>
                <img key={index} src={url} alt="..." />
              </div>
            )
          })}
          
      </div>
    )
  }
}

  
export default ImageUploaderJS;