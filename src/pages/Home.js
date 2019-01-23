import React, { Component } from 'react';
import TextContentStyles from '../components/styles/TextContentStyles';

export default class Home extends Component {
	render() {
		return (
			<TextContentStyles>
				<div className="container">
					<p>
						Michael Craig-Martin (b. 1941, Dublin, Ireland) is a contemporary
						conceptual artist interested in questioning the nature of image
						making and considering how art might be comprehended by the viewer.
						Throughout his career, creating works in a number of different
						media, he has explored the expressive potential of commonplace
						objects and images. His best-known artworks include An oak tree
						(1973), a seminal piece that claimed to have changed a glass of
						water into an oak tree; his large-scale black and white wall
						drawings of everyday objects; and his intensely coloured paintings,
						installations, and public commissions.
					</p>
				</div>
			</TextContentStyles>
		);
	}
}
