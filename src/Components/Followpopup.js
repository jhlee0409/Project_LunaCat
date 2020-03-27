import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%', 
    position:'absolute',
    transform:'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    zIndex:5,
    borderRadius: 5,
    minHeight: 460,
    maxWidth: 340,
    backgroundColor: 'white'
  },
  list: {
    overflowY: 'scroll',
    maxHeight: 340,
    padding: 20,
    boxShadow:'0px 2px 1px #E9E9E9'
  }
}));



class Out extends Component {

    render(){
        return(
            <div>
                <CheckboxListSecondary/>
            <div className='align center' style={{display:'flex', justifyContent:'center'}}>           
                <input style={{margin:'10px 0', zIndex:5, border:'none',backgroundColor:'white',cursor:'pointer'}} type='button' value='닫기' onClick={this.props.closePopup}></input>
            </div>
            </div>
        )
    }
}

function CheckboxListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };


    return (
        <div  className={classes.root}>
            <div style={{padding:10, boxShadow:'0px 2px 3px #E9E9E9'}}>팔로잉</div>
                <List className={classes.list} dense >   
                {[0, 1, 2, 3, 4,5 ,6,7,8,9,10].map(value => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (           
                            <ListItem  key={value} button>
                                <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemSecondaryAction>
                            </ListItem>
                    );
                })}
                </List>

        </div>
  );
    }

export default Out;