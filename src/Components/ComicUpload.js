import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import PopModal from './Join-mem'
import LoginForm from './LoginForm'

import RadioButtonsGroup from './sample';
import StylingButton from './StylingButton';

import P_post from '../svg/Off/P_post.svg';
import P_postOn from '../svg/On/P_postOn.svg';

import ImageUploaderJS from './ImageUploaderJS';
import {ImageUpload, Preview} from './asdasdsad';


const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: 80,
  }
});



class MainContent extends Component {
  constructor(props) {
    super(props);
    // this._handleKeyPress = this._handleKeyPress.bind(this);

    this.state = {
      on : false,
      title : "",
      content : ''
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
    and BtnValue : `);
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
                  <ImageUpload />           
                </div >
              </article >

              <article className='article c'>
                <div className='UploadTitle'>
                  <input className='UploadTitle' name="title" ref='title' maxLength='50' type='text' placeholder="제목을 입력하세요."  onChange={this.handleChange} />
                  <textarea className='sns-text' name="content" ref='sns-text' cols='50' rows='8' placeholder='내용을 작성해 주세요.' maxLength='300' onChange={this.handleChange}/>
                </div>

                <div className='PostOption'>          
                  <RadioButtonsGroup  />
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
