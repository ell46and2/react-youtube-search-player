import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li onClick={() => onVideoClick(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
			

				<div classNmae="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;