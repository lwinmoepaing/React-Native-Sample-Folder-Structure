import React from 'react'
import { Provider } from 'react-redux'
import configStore from './src/store/configStore'
import AppNavigator from './src/navigation/Navigation'

const store = configStore()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		)
	}
}
