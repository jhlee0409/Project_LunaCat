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
  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      items: this.state.items.slice(this.state.items.length).concat(pictureFiles)
    });

    console.log(this.state.items)
  }
  renderPreviews = () => {
    const { items } = this.state;
    const previewContainer = document.getElementById("preview-container");
    for (let i = 0; i < items.length; i++) {
      const preview = document.createElement("img");
      preview.id = `preview_${i} previewAll`;
      preview.style.width = '100%';
      preview.style.verticalAlign = 'bottom';
      previewContainer.appendChild(preview);
      const reader = new FileReader();
      reader.onload = function(evt) {
        preview.src = reader.result;       
      };
      reader.readAsDataURL(items[i]);
    }
  };
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
          {this.state.items.map((items,index) => {

            return (
              <div key={index}>
                <img src={items.type} alt={items.value} />
                {items.value}
              </div>
            )
          })}

      </div>
    )
  }
}

  
export default ImageUploaderJS;