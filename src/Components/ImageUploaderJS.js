import React, { Component } from 'react';
import '../App.css';
import ImageUploader from 'react-images-upload';

function expandIamges(imgs) {
  var expandImg = document.getElementById("preview-container");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = 'block'
} 

class ImageUploaderJS extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      pictures: [],
      maxSize: 50,
    }
  }

  componentDidUpdate = () => {
    const iimg = document.getElementsByClassName('uploadPicture')
    for (var i=0; i < iimg.length; i++) {
      iimg[i].onclick = expandIamges(this)
    }
  }

    renderPreviews = () => {
    const { pictures } = this.state;
    const previewContainer = document.getElementById("preview-container");
    for (let i = 0; i < pictures.length; i++) {
      const preview = document.createElement("img");
      preview.id = `preview_${i}`;
      preview.style.width = '100%';
      preview.style.cursor = 'pointer';
      preview.onclick = function(){
        this.parentElement.removeChild(this);
      }
      previewContainer.appendChild(preview);
      const reader = new FileReader();
      reader.onload = function(evt) {
        preview.src = reader.result;       
      };
      reader.readAsDataURL(pictures[i]);
    }
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  }
  
  render(){  
    console.log(this.state.pictures)
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