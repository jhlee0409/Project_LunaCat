import React, { Component } from 'react';
import '../App.css';
import ImageUploader from 'react-images-upload';


class ImageUploaderJS extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      pictures: [],
      maxSize: 50
    }
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })
  }

  render(){  
      return(         
        <div>              
            <ImageUploader 
            withPreview={true}
            withIcon={false}
            label=''          
            buttonClassName='ImageUploaderButton'   
            className='ImaUp'                 
            buttonText=''
            onChange={this.onDrop} 
            fileSizeError='한도 용량이 초과되었어요!'
            fileTypeError='.jpg, .gif, .png 만 가능해요'
            imgExtension={['.jpg', '.gif', '.png']}
            maxFileSize={1024*1024*this.state.maxSize}/>         
        </div>
      )
  }
}
  
  
export default ImageUploaderJS;