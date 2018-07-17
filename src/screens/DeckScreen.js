import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';

import {connect} from 'react-redux';
import {MapView} from "expo";

import Swipe from "../components/Swipe/Swipe";
import {Card} from "react-native-elements";


class DeckScreen extends Component {
		renderCard(job) {
				const initialRegion = {
					longitude: job.longitude,
					latitude: job.latitude,
					longitudeDelta: 0.045,
					latitudeDelta: 0.09,
				};

				return <Card title={job.jobtitle}>
						<View style={{height: 300}}>
								<MapView
										scrollEnabled={false}
										style={{flex: 1}}
										cacheEnabled={Platform.OS === 'android' ? true : false}
										initialRegion={initialRegion}
								/>
						</View>
						<View style={styles.detailsWrapper}>
								<Text>{job.company}</Text>
								<Text>{job.formattedRelativeTime}</Text>
						</View>
						<Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}</Text>
				</Card>
		};

		renderNoMoreCards() {
				return (
						<Card title="No more jobs"/>
				)
		}

		render() {
				return (
						<View>
								<Swipe
										data={this.props.jobs}
										renderCard={this.renderCard}
										renderNoMoreCards={this.renderNoMoreCards}
								/>
						</View>
				);
		}
}

const styles = {
		detailsWrapper: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginBottom: 10
		}
};

function mapStateToProps({jobs}) {
		return {
				jobs: jobs.results
		};
}

export default connect(mapStateToProps)(DeckScreen);