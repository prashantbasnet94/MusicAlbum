//import
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
		<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};


const styles = {
	viewStyle: {
		backgroundColor: 'F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 30,
		borderColor: '#000',
		//borderOffset: { width: 10, height: 10 },
		//shadowOpacity: 1
		borderWidth: 0.5,
		borderRadius: 4

	},
	textStyle: {
		fontSize: 12
	}
};
//render a component
export default Header;
