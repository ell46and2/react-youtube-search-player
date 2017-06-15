import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCN0Uye9av2b4FzUfoxKKRiljtHLwwhaEE';




class App extends Component {

	constructor(props) {
		super(props);

		this.state = { // set initial states
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('twin peaks');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // debounce lodash function - so our function only runs once every 300ms

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));