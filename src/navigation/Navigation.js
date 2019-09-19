import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import ExampleScreen from '../screens/ExampleScreen/ExampleScreen'

const baseNavigation = createSwitchNavigator(
	{ LoginScreen, ExampleScreen },
	{
		initialRouteName: 'LoginScreen'
	}
)

const AppContainer = createAppContainer(baseNavigation)

export default AppContainer
