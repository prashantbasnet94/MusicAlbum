//import
import React from 'react';
import{View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
	const{
		title,
		artist,
		thumbnail_image,
		image,
		url
	}	= album;

	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = style;



	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
					style={thumbnailStyle}
					source={{ uri: thumbnail_image  }}
					/>
				</View>

				<View style={headerContentStyle}>
						<Text style={headerTextStyle}> {title} </Text>
						<Text> {artist} </Text>
				</View>
			</CardSection>
			<CardSection>
				<Image
				style={imageStyle}
				source={{ uri: image }}
				/>
			</CardSection>
<CardSection>
<Button onPress={() => Linking.openURL(url)}  >
like
</Button>
</CardSection>


		</Card>

	);
};

const style = {
	topHeaderStyle: {
		alignItems:'flex-start'
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'

	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {

		height: 300,
		flex: 1,
			width: null,
	}
};
//export
export default AlbumDetail;
