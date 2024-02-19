import React from 'react':
import { View, Textinput, Button, StyleSheet } from 'react-native':

const LoginScreen = () => {
	return (
		<View style = {styles.container}>
			<TextInput placeholder="Username" style={styles.input} />
			<TextInput placeholder="Password" secureTextEntry style={styles.input} />
			<Button title="Login" onPress={() => {}} />
		</View>
	);
};

const styles = Style.Sheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		paddingLeft: 8,
	},
});

export default LoginScreen;
