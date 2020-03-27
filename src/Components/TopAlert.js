import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),

    },
  },
}));

// class TopAlert extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       open: false,
//     }
//   }
//   render(){
//     return (
      
//     )
//   }
// }
export default function TransitionAlerts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert severity="error" action={ <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}>
              <CloseIcon fontSize="inherit" /> </IconButton>}> 내용을 최소 1자 이상 입력해주세요 </Alert>
      </Collapse>
      <Button disabled={open}variant="outlined" onClick={() => {setOpen(true);}}>
        Re-open
      </Button>
    </div>
  );
}