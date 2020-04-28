import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import grey from '@material-ui/core/colors/grey';

import PopModal from './Join-mem'
import LoginForm from './LoginForm'

import StylingButton from './StylingButton';

import P_post from '../svg/Off/P_post.svg';
import P_postOn from '../svg/On/P_postOn.svg';

import ImageUploaderJS from './ImageUploaderJS';
import {ImageUpload } from './asdasdsad';


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


class MainContent extends Component {
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
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.ageSet = this.ageSet.bind(this)
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
    console.log(e.target.value)
  }
  
  handleSubmit = (e) => {
    alert(`Title name was submitted: ${this.state.title} 
    and Content : ${this.state.content}
    and BtnValue : ctg = ${this.state.ctg}, option = ${this.state.option}, ageset = ${this.state.age}`);
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
  onAlert = () => alert('asfasf')

  render() {
    const { classes } = this.props;
      return(
        <form className={classes.root} onSubmit={this.handleSubmit} >

          <Grid container spacing={1}>

            <Grid item  md={8} xs={12}>
              <article className='article b'>
                <div id="preview-container" style={{padding: '0 20%'}} />
                <PopModal/>
                <LoginForm/>
              </article>
            </Grid>

            <Grid item  md={4} xs={12}>
              <article  className='article a'>
                <label >코믹 드래그나 클릭해서 업로드하세요.</label>        
                <div className='Upload'>
                  <ImageUploaderJS handle={this.handleChange}/>      
                  {/* <MyUploader/>      */}
                </div >
              </article >

              <article className='article c'>
                <div className='UploadTitle'>
                  <input className='UploadTitle' name="title" ref='title' maxLength='50' type='text' placeholder="제목을 입력하세요."  onChange={this.handleChange} />
                  <textarea className='sns-text' name="content" ref='sns-text' cols='50' rows='8' placeholder='내용을 작성해 주세요.' maxLength='300' onChange={this.handleChange}/>
                </div>

                <div className='PostOption'>          
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
                    <div className='Post'>
                        <StylingButton primary type='submit' value='Submit' background={P_post} backgroundH={P_postOn}/>
                    </div>
                </div>
              </article>
            </Grid>
          </Grid>
      </form> 
    );
  }
}


export default withStyles(styles)(MainContent);
