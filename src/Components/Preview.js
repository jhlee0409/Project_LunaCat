import React, {Component} from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import '../css/dz.css'


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

class Preview extends Component {
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
            {canRemove && <span className="dzu-previewButton" onClick={remove} />}
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
                <span className="dzu-previewButton"  onClick={cancel} />
              )}
            {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && canRemove && (
              <span className="dzu-previewButton"  onClick={remove} />
            )}
            {['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready'].includes(status) &&
              canRestart && <span className="dzu-previewButton"  onClick={restart} />}
          </div>
        </div>
      )
    }
  }

export default Preview;