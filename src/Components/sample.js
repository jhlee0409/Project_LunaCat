import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const BlackRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: grey[800],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


class TogglePostBtn  extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.ageSet = this.ageSet.bind(this)
    this.state = {
      value : 'Illust',
      value1 : "공개",
      ageSet: false,
      bg:'#FFF',
      color:'#F7708F',
    }
  }
  handleChange = (e) => {
    this.setState({
      value : e.target.value    
    })
  }
  handleChange1 = (e) => {
    this.setState({
      value1 : e.target.value
    })
  }
  ageSet = () => {
    this.setState({
      ageSet: !this.state.ageSet
    })
    if (this.state.ageSet === false) {
      this.setState({
        bg:'#F7708F', color:'#FFF',
      })
    } else {
      this.setState({bg:'#FFF',color:'#F7708F',
      })
    }
  }
  render() {
    
    return(
      <FormControl  style={{display: "flex"}} component="fieldset">
      <div className='divide'style={{color: "#A49FBA"}} >카테고리
        <RadioGroup  row aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange} >
          <FormControlLabel  labelPlacement="start" value="Illust" control={<BlackRadio />} label="Illust" />
          <FormControlLabel  labelPlacement="start" value="Comic" control={<BlackRadio />} label="Comic" />
        </RadioGroup>
      </div>
      <div  className='divide'style={{color: "#A49FBA"}} >공개설정
        <RadioGroup row aria-label="gender" name="gender1" value={this.state.value1} onChange={this.handleChange1}>
          <FormControlLabel   labelPlacement="start" value="공개" control={<BlackRadio />} label="공개" />
          <FormControlLabel   labelPlacement="start" value="비공개" control={<BlackRadio />} label="비공개" />
        </RadioGroup>
      </div>
      <div className='divide'>
          <div style={{fontSize:16, color: "#A49FBA"}}>연령설정 </div>        
          <button type='button' className='ageSet-btn'style={{background:this.state.bg, color:this.state.color,}} onClick={this.ageSet}> R - 18</button>
        </div>
    </FormControl>
    )
  }
}

export default TogglePostBtn;

// function RadioButtonsGroup2() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('Illust');
//   const [value1, setValue1] = React.useState('공개');

//   const handleChange = event => {
//     setValue(event.target.value);
//   };
//   const handleChange1 = event => {
//     setValue1(event.target.value);
//   };
//   return (
//     <FormControl  style={{display: "flex"}} component="fieldset">
//       <div className='divide'style={{color: "#A49FBA"}} >카테고리


//         <RadioGroup  row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel className={classes.color} labelPlacement="start" value="Illust" control={<BlackRadio />} label="Illust" />
//           <FormControlLabel className={classes.color} labelPlacement="start" value="Comic" control={<BlackRadio />} label="Comic" />
//         </RadioGroup>
//       </div>
//       <div  className='divide'style={{color: "#A49FBA"}} >공개설정

//         <RadioGroup row aria-label="gender" name="gender1" value={value1} onChange={handleChange1}>
//           <FormControlLabel  style={{color: "#A49FBA"}} labelPlacement="start" value="공개" control={<BlackRadio />} label="공개" />
//           <FormControlLabel  style={{color: "#A49FBA"}} labelPlacement="start" value="비공개" control={<BlackRadio />} label="비공개" />
//         </RadioGroup>
//       </div>
//       <AgeSet />
//     </FormControl>
//   );
// }


