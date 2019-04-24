 //import
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

 //creating a component
 const App = () => (
	 <View style={{ flex: 1}}>
	 			<Header headerText={'Prashant'} />
				<AlbumList/>

	 </View>

);


 //render something in screen
AppRegistry.registerComponent('albums', () => App);
