//import
import React,{Component} from 'react';
import { ScrollView, Text} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';


//create component
class AlbumList extends Component {
state ={ albums: [] }

	componentDidMount() {
		 Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		 	.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album =>
		//	<Text Key={ album.title}> { album.title} </Text>
			<AlbumDetail Key={album.title} album={album} />
		);
	}

	render() {
		return (
			<ScrollView>
				 {this.renderAlbums()}

			</ScrollView>
		);
	}

}


//render export
export default AlbumList;
