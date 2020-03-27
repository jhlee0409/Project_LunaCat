import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import PostOption from '../Components/PostOption';
import ImageUploaderJS from '../Components/ImageUploaderJS';

const styles = theme => ({
  root: {
    padding: theme.spacing(3)
  }
});

class MainContent extends Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.state = {
    }
  } 
  componentDidMount() {
    for (let x in this.refs) {
      this.refs[x].onkeypress = (e) => 
        this._handleKeyPress(e, this.refs[x]);
    }
    this.refs.name.focus();
  }

  _handleKeyPress(e, field) {
    // If enter key is pressed, focus next input field.
    if (e.keyCode === 13) {
      e.preventDefault();
      var next = this.refs[field.name].nextSibling;
      console.log(next)
      if (next !== '' ){
        if (next && next.tagName === "TEXTAREA") {
          this.refs[field.name].nextSibling.focus();          
      } } 
    } 
  }

  render() {
    const { classes } = this.props;
      return(
        <div className={classes.root} >
          <Grid container spacing={1}>
            <Grid item  md={4}  xs={12}>
              <article  className='article a'>
                <label >코믹 드래그나 클릭해서 업로드하세요.</label>        
                <div className='Upload'>
                  <ImageUploaderJS/>
                </div >
              </article >
            </Grid>

            <Grid item  md={4} xs={12}>
              <article className='article b'>
                <div id="preview-container" />
              </article>
            </Grid>

            <Grid item  md={4} xs={12}>
              <article className='article c'>
                <div className='UploadTitle'>
                  <input className='UploadTitle'name="name" ref='name' maxLength='50' type='text' placeholder="제목을 입력하세요." ></input>
                  <textarea className='sns-text' name="sns-text" ref='sns-text' cols='50' rows='8' placeholder='내용을 작성해 주세요.' maxLength='300'></textarea>
                </div>
                <PostOption/>
              </article>
            </Grid>
          </Grid>
      </div> 
    );
  }
}


export default withStyles(styles)(MainContent);
