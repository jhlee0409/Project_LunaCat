import React, { Component } from 'react';

class fbForm extends Component {
  state = {
    key:0,
        id: 'qg2124',
        email: 'fqqge@asg.asd',
        content: '',
        datetime: '2015-02-02',
        commentCount: 123,
        heartCount: 456,
        commentIcon: require(`../svg/comment-icon.svg`),
        commentIcon1: require(`../svg/comment-iconOn.svg`),
        heart: require(`../svg/heart.svg`),
        heart1: require(`../svg/heartOn.svg`),
        toggleComment: false,
        toggleHeart: false,
        toggleFollow: false,
        followColor: '#A49FBA',
        followColorOn: '#F1AD39'
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
        content: '',
    })
  }
  render() {
    return (
      <form className='fb-div' onSubmit={this.handleSubmit}>
        <input
            className='fb-write'
            placeholder="피드백 하기..."
            value={this.state.content}
            onChange={this.handleChange}
            name="content"
        />

        <button type="submit"className='fb-btn'></button>
      </form>
    );
  }
}

export default fbForm;