import React from 'react';
import { connect} from 'react-redux';
import { settedAlarmTime, prepareToWakeUp, /*setAlarmCompletely*/ } from '../actions';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

const AlarmSetter = ({ dispatch }) => {
  let songInput;
  let timeInput;
  window.URL = window.URL || window.webkitURL;

  return (
    <div className='alarm-tools'>
      <form 
        id='primaryForm'
        onSubmit={(e) => {
          e.preventDefault();
          if (songInput.files.length) {
            const wakeUpSong = window.URL.createObjectURL(songInput.files[0]);
            dispatch(prepareToWakeUp(wakeUpSong));
            dispatch(settedAlarmTime(timeInput.value));
            timeInput.value = '';
          };
          //dispatch(setAlarmCompletely(wakeUpSong, input2.value))
        }
      }>
        <FormGroup>
          <ControlLabel>Set the alarm time:</ControlLabel>
          <FormControl
            id='alarm-time-field'
            type='text'
            inputRef={node => timeInput = node}
            placeholder='Type the wake-up time in the following format: hh:mm'
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            id='fileChooser'
            type='file'
            accept='audio/*'
            inputRef={node => songInput = node}
          />
        </FormGroup>  
        <Button id='submit-button' block type='submit'>Set</Button>
      </form>  
    </div>  
  );
};

export default connect()(AlarmSetter);