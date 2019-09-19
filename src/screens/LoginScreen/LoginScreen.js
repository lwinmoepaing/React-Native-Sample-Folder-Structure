import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export class LoginScreen extends Component {
	render() {
		console.log(this.props)
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Login Screen </Text>
				<Button title={'Bar Nyar'} onPress={e => this.props.navigation.navigate('ExampleScreen')} />
			</View>
		)
	}
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		textAlign: 'center'
	}
})
