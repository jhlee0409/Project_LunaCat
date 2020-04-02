import React, { Component } from 'react';
import '../App.css';
import ImageUploader from 'react-images-upload';


class ImageUploaderJS extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      items: [],
      maxSize: 50,
    }
  }

  componentDidUpdate = prevState => {
    if (prevState.items !== this.state.items) {
      this.renderPreviews();
    }
  };

    renderPreviews = () => {
    const { items } = this.state;
    const previewContainer = document.getElementById("preview-container");
    for (let i = 0; i < items.length; i++) {
      const preview = document.createElement("img");
      preview.id = `preview_${i}`;
      preview.style.width = '100%';
      preview.style.verticalAlign = 'bottom';
      preview.style.cursor = 'pointer';


      previewContainer.appendChild(preview);
      const reader = new FileReader();
      reader.onload = function(evt) {
        preview.src = reader.result;       
      };
      reader.readAsDataURL(items[i]);
    }
  };

  onDrop(picture) {
    this.setState({
      items: this.state.items.concat(picture)
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