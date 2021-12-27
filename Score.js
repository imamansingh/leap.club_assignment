import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component {

	render() {
		return (
			<View style={styles.score_container}>

				<View style={styles.score_container}>
					<Text style={{ fontSize: 20 }}>No Of Attempt   </Text><Text style={styles.score}>{this.props.noa}</Text>
				</View>
				<View style={styles.score_container}>
					<Text style={{ fontSize: 20 }}>Matches completed  </Text><Text style={styles.score}>{this.props.matchs}</Text>
					<Text style={{ fontSize: 20 }}>Score  </Text><Text style={styles.score}>{this.props.score}</Text>

				</View>
			</View>

		);
	}

}


const styles = StyleSheet.create({
	score_container: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'center'

	},
	score: {
		fontSize: 40,
		fontWeight: 'bold'
	}
});