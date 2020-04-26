import React, {Component} from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import '../css/dz.css'
import Dropzone, { ILayoutProps } from 'react-dropzone-uploader'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1700: 2,
  1150: 1,
  960: 5,
  930: 4,
  770: 3,
  600: 2,
  380: 1,

};

const formatBytes = (b: number) => {
  const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let l = 0
  let n = b

  while (n >= 1024) {
    n /= 1024
    l += 1
  }

  return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)}${units[l]}`
}

const formatDuration = (seconds: number) => {
  const date = new Date(0)
  date.setSeconds(seconds)
  const dateString = date.toISOString().slice(11, 19)
  if (seconds < 3600) return dateString.slice(3)
  return dateString
}

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div className='btn-center'>
      <div className='main-container'>
      {/* 웹버전 */}
      <div className='priview-container'>
        <Masonry  breakpointCols={breakpointColumnsObj} className='Upload-grid' columnClassName='Upload-grid-column'>
          {previews}                    
        </Masonry>  
      </div>
      {/* 모바일 버전 */}
      <div className='priview-container'>        
          {previews}                     
      </div>
      
      {/* {files.length > 0 && submitButton} */}
    </div>
      <div {...dropzoneProps}>
          {files.length < maxFiles && input}
      </div>
    </div>
    
  )
}

class Preview extends Component {
  constructor(props) {
    super(props)
    this.state={ items: []}
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
  render() {
    const {
      className,
      imageClassName,
      style,
      imageStyle,
      fileWithMeta: { cancel, remove, restart },
      meta: { name = '', size = 0, previewUrl, status, duration, validationError },
      canCancel,
      canRemove,
      canRestart,
      extra: { minSizeBytes },
    } = this.props

    let title = `${name || '?'}, ${formatBytes(size)}`
    if (duration) title = `${title}, ${formatDuration(duration)}`

    if (status === 'error_file_size' || status === 'error_validation') {
      return (
        <div className={className} style={style}>
          <span className="dzu-previewFileNameError">{title}</span>
          {status === 'error_file_size' && <span>{size < minSizeBytes ? 'File too small' : 'File too big'}</span>}
          {status === 'error_validation' && <span>{String(validationError)}</span>}
          {canRemove && <span className="dzu-previewButton remove" onClick={remove} />}
        </div>
      )
    }

    if (status === 'error_upload_params' || status === 'exception_upload' || status === 'error_upload') {
      title = `${title} (upload failed)`
    }
    if (status === 'aborted') title = `${title} (cancelled)`

    return (
      <div className={className} style={style}>
        {previewUrl && <img className={imageClassName} style={imageStyle} src={previewUrl} alt={title} title={title} />}
        {!previewUrl && <span className="dzu-previewFileName">{title}</span>}

        <div className="dzu-previewStatusContainer">
          {status === 'uploading' && canCancel && (
              <span className="dzu-previewButton cancel"  onClick={cancel} />
            )}
          {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && canRemove && (
            <span className="dzu-previewButton remove"  onClick={remove} />
          )}
          {['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready'].includes(status) &&
            canRestart && <span className="dzu-previewButton restart"  onClick={restart} />}
        </div>
      </div>
    )
  }
}

class ImageUpload extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      maxSize: 50,
    }
  }
 
  
  render(){
    const getUploadParams = ({ file, meta }) => {
      const body = new FormData()
      body.append('fileField', file)
      return { url: 'https://httpbin.org/post', body } 
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
   
    return (
      <Dropzone
      inputContent=''
      inputWithFilesContent={null}
      LayoutComponent={Layout}
      PreviewComponent={Preview}
      accept='.gif, .png, .jpg'
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onClick={this.onDrop}
      onSubmit={handleSubmit}
      maxSizeBytes={1024*1024*this.state.maxSize}
      
    />

    )
  } 
}

export {ImageUpload, Preview};