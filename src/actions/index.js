export const updateTime = () => ({
	type: 'UPDATE_TIME',
	time: new Date().toLocaleTimeString()
});

export const settedAlarmTime = (alarmTime) => ({
	type: 'ALARM_TIME_SETTING',
	alarmTime
});

export const prepareToWakeUp = (wakeUpSong) => ({
	type: 'SONG_SELECTED',
	wakeUpSong
});



//This one is for my little trial-trip
// export const setAlarmCompletely = (wakeUpSong, alarmTime) => 
// 	dispatch => {
// 		dispatch({
// 			type: 'SET_ALARM',
// 			wakeUpSong,
// 			alarmTime
// 		});
// 	};

	