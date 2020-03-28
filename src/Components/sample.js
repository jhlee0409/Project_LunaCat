import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import AgeSet from './AgeSet'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  color: {
    color: grey[400],
    '&$clicked': {
      color: grey[800],
    },
  }
}));

const BlakcRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: grey[800],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


export default function RadioButtonsGroup2() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Illust');
  const [value1, setValue1] = React.useState('공개');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleChange1 = event => {
    setValue1(event.target.value);
  };
  return (
    <FormControl  style={{display: "flex"}} component="fieldset">
      <div className='divide'style={{color: "#A49FBA"}} >카테고리

        <RadioGroup  row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel className={classes.color} labelPlacement="start" value="Illust" control={<BlakcRadio />} label="Illust" />
          <FormControlLabel className={classes.color}  labelPlacement="start" value="Comic" control={<BlakcRadio />} label="Comic" />
        </RadioGroup>
      </div>
      <div  className='divide'style={{color: "#A49FBA"}} >공개설정

        <RadioGroup row aria-label="gender" name="gender1" value={value1} onChange={handleChange1}>
          <FormControlLabel  style={{color: "#A49FBA"}}  labelPlacement="start" value="공개" control={<BlakcRadio />} label="공개" />
          <FormControlLabel  labelPlacement="start" value="비공개" control={<BlakcRadio />} label="비공개" />
        </RadioGroup>
      </div>
      <AgeSet />
    </FormControl>
  );
}
