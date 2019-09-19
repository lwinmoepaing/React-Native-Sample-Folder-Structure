import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

// All Reducers
import Auth from './reducers/AuthReducer'

const rootReducers = combineReducers({
	Auth
})

const configStore = () => {
	return createStore(rootReducers, applyMiddleware(reduxThunk))
}

export default configStore
