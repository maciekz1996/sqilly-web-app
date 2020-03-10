const initState = {
    topWorkouts: [],
    workouts: [],
    workoutsLoaded: false,
    isLoading: false,    
}

const workoutReducer = (state = initState, action) => {
    let workouts = []
    switch (action.type) {
        case 'START_REQUEST':            
            return {
                ...state,
                isLoading: true,
            }    

        case 'GET_WORKOUTS_SUCCESS':
            workouts = [...state.workouts, ...action.workouts]            
            return {
                ...state,
                workouts,
                workoutsLoaded: true,
                isLoading: false,
            }

        case 'GET_WORKOUTS_ERROR':
            alert('Błąd: ' + action.err)
            return {
                ...state,
                isLoading: false,
            };

        case 'CREATE_WORKOUT_SUCCESS':
            workouts = [...state.workouts, action.workout]
            return {
                ...state,
                workouts,
                isLoading: false,
            };

        case 'CREATE_WORKOUT_ERROR':
            alert('Błąd: ' + action.err) 
            return {
                ...state,
                isLoading: false
            };

        case 'DELETE_WORKOUT_SUCCESS':
            workouts = state.workouts.filter((workout) => {
                return workout.id !== action.id
            })
            return {
                ...state,
                workouts,
                isLoading: false,                
            };

        case 'DELETE_WORKOUT_ERROR':
            alert('Błąd: ' + action.err)
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}

export default workoutReducer