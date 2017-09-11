import React from 'react';
import { connect } from 'react-redux';
import AlarmSetter from './AlarmSetter';

const Setted = ({ alarmTime, time, song }) => {
  const condition = alarmTime === time.slice(0, 5) || alarmTime < time.slice(0, 5);
  return (
    <div>
      <AlarmSetter />
      { condition && 
        <audio src={song}>This option do not work correct with your browser</audio> 
      }
    </div>  
  );    
};

const mapStateToProps = (state) => ({
  time: state.time,
  alarmTime: state.alarmTime,
  song: state.song
});

export default connect(
  mapStateToProps,
  null
)(Setted);


