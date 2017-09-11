import React from 'react';
import { connect } from 'react-redux';
import Well from 'react-bootstrap/lib/Well';

const AlarmSong = ({ time, alarmTime, song }) => {
  if (alarmTime === time.slice(0, 5) || alarmTime < time.slice(0, 5)) {
    return (
      <Well id='audio-holder' className='alarm-tools'>
        <audio id='audio' src={song} controls loop autoPlay>
          This option do not work correct with your browser
        </audio>
      </Well>
    );
  };

  return (
    <Well id='wake-up-time-pointer' className='alarm-tools'>
      Wake-up time: {alarmTime}
    </Well>
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
)(AlarmSong);
