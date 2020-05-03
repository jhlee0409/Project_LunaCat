import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import ImageUploader from 'react-images-upload';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: 80,
  }
});

const BlackRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: grey[800],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


class UploadPage extends Component {
  constructor(props) {
    super(props);
    // this._handleKeyPress = this._handleKeyPress.bind(this);

    this.state = {
      title : "",
      content : '',
      ctg:'Illust',
      option:'공개',
      age: false,
      bg:'#FFF',
      color:'#F7708F',
      file: [],
      URLs: [],
      maxSize: 50,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.onDrop = this.onDrop.bind(this);
    this.ageSet = this.ageSet.bind(this)
  } 
  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      file: this.state.file.slice(this.state.file.length).concat(pictureFiles),
      URLs: this.state.URLs.slice(this.state.file.length)
    });
}
  handleChange0 = (e) => {
    this.setState({
      ctg : e.target.value    
    })
  }
  handleChange1 = (e) => {
    this.setState({
      option : e.target.value
    })
    console.log(this.state.URLs)
    console.log(this.state.file)
  }
  ageSet = () => {
    this.setState({
      age: !this.state.age
    })
    if (this.state.age === false) {
      this.setState({
        bg:'#F7708F', color:'#FFF',
      })
    } else {
      this.setState({bg:'#FFF',color:'#F7708F',
      })
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  
  handleSubmit = (e) => {
    alert(`Title name was submitted: ${this.state.title} 
    and Content : ${this.state.content}
    and BtnValue : ctg = ${this.state.ctg}, option = ${this.state.option}, ageset = ${this.state.age} 
    and files = ${this.state.file}`);
    e.preventDefault();
  }

  // componentDidMount() {
  //   for (let x in this.refs) {
  //     this.refs[x].onkeypress = (e) => 
  //       this._handleKeyPress(e, this.refs[x]);
  //   }
  //   this.refs.title.focus();
  // }

  // _handleKeyPress(e, field) {
  //   // If enter key is pressed, focus next input field.
  //   if (e.keyCode === 13 ) {
  //     e.preventDefault();
  //     var next = this.refs[field.name].nextSibling;
  //       if (next && next.tagName === "TEXTAREA") {
  //         this.refs[field.name].nextSibling.focus();   
  //     } 
  //   } 
  // }

  render() {
    const { classes } = this.props;
    if ( this.state.file.length !== this.state.URLs.length) {
      for (let i = 0; i < this.state.file.length; i++) {
        this.state.URLs.push(URL.createObjectURL(this.state.file[i]))
      }
    }
      return(
        <div>
            <form className={classes.root} onSubmit={this.handleSubmit} >
              <div>
              <nav className='top upload-nav'>
                  <div><img src={require('../svg/backspace.svg')} alt='뒤로가기'/></div>
                  <div className='Post Post-mobile'>
                    <button type='submit' value='Submit'>게시하기</button>
                  </div>
              </nav>
            </div>

          <div className='upload-main'>
            <div className='upload-div-1'>
    {/* ---------프리뷰 파트----------------------*/}
                  <article className='article b'>
                    <div id="preview-container" >
                      {this.state.URLs.map((url,index) => {
                        return (
                          <div key={index}>
                            <img key={index} src={url} alt="..." />
                          </div>
                        )
                      })}
                    </div>
                  </article>
                </div>

                <div className='upload-div-2'>
    {/* ---------이미지 업로드 파트----------------------*/}
                  <article  className='article a'>
                    <label >코믹 드래그나 클릭해서 업로드하세요.</label>        
                    <div className='Upload'>
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
                    </div >
                  </article >

    {/* ---------텍스트 작성 파트----------------------*/}
                  <article className='article c'>
                    <div className='UploadText'>
                      <input className='UploadTitle' name="title" ref='title' maxLength='50' type='text' placeholder="제목을 입력하세요."  onChange={this.handleChange} />
                      <textarea className='sns-text' name="content" ref='sns-text' cols='50' rows='8' placeholder='내용을 작성해 주세요.' maxLength='300' onChange={this.handleChange}/>
                    </div>
                  </article>
    {/* ---------서밋 파트----------------------*/}

                  <div className='article PostOption'>          
                        <FormControl  style={{display: "flex"}} component="fieldset">
                          <div className='divide'style={{color: "#A49FBA"}} >카테고리
                            <RadioGroup  row aria-label="gender" name="gender1" value={this.state.ctg} onChange={this.handleChange0} >
                              <FormControlLabel  labelPlacement="start" value="Illust" control={<BlackRadio />} label="Illust" />
                              <FormControlLabel  labelPlacement="start" value="Comic" control={<BlackRadio />} label="Comic" />
                            </RadioGroup>
                          </div>
                          <div  className='divide'style={{color: "#A49FBA"}} >공개설정
                            <RadioGroup row aria-label="gender" name="gender1" value={this.state.option} onChange={this.handleChange1}>
                              <FormControlLabel   labelPlacement="start" value="공개" control={<BlackRadio />} label="공개" />
                              <FormControlLabel   labelPlacement="start" value="비공개" control={<BlackRadio />} label="비공개" />
                            </RadioGroup>
                          </div>
                          <div className='divide'>
                              <div style={{fontSize:16, color: "#A49FBA"}}>연령설정 </div>        
                              <button type='button' className='ageSet-btn'style={{background:this.state.bg, color:this.state.color,}} onClick={this.ageSet}> R - 18</button>
                            </div>
                        </FormControl>
                    </div>
                      <div className='article Post Post-web'>
                        <button type='submit' value='Submit'>게시하기</button>
                      </div>
                </div>
                </div>
          </form> 
        </div>

    );
  }
}


export default withStyles(styles)(UploadPage);
