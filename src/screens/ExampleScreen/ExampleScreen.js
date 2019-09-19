import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Alert } from 'react-native'

export class ExampleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Example Screen </Text>
				<Button title="Logout" onPress={this._onLogout} />
			</View>
		)
	}

	_onLogout = () => {
		Alert.alert(
			'Are U Sure?',
			'If so See you Later.',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => this.props.navigation.navigate('LoginScreen') }
			],
			{ cancelable: false }
		)
	}
}

export default ExampleScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		textAlign: 'center'
	}
})
