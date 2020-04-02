import React, {Component} from 'react';
import ToggleIcon from 'material-ui-toggle-icon';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from './icon';
import HomeIconOn from './iconOn';


export default class AgeSet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false
        }
    }
  render() {
      return(
        <div className='divide'>
          <div style={{fontSize:16, color: "#A49FBA"}}>연령설정 </div>        
          <IconButton type="button" onClick={() => this.setState(state => ({ on: !state.on }))}>
          <ToggleIcon style={{width:72, height:32}} on={this.state.on} onIcon={<HomeIconOn/>} offIcon={<HomeIcon/>}/>
          </IconButton>
        </div>
      )
    
  }
}