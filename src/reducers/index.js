const appReducer = (state = {}, action) => {
	switch(action.type) {
		case 'UPDATE_TIME':
			return {
				...state,
				time: action.time
			};	
		case 'ALARM_TIME_SETTING':
			return {
				...state,
				alarmTime: action.alarmTime
			};		
		case 'SONG_SELECTED':
			return {
				...state,
				song: action.wakeUpSong
			};		
		default:
			return {
				...state,
				time: new Date().toLocaleTimeString()
			};	
	}
};

export { appReducer };


//This one is for my trial-trip
// case 'SET_ALARM':
// 	return {
// 		...state,
// 		alarmTime: action.alarmTime,
// 		song: action.wakeUpSong
// 	};

