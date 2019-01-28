import React, { Component } from 'react';
import TextContentStyles from '../components/styles/TextContentStyles';

export default class Home extends Component {
	render() {
		return (
			<TextContentStyles>
				<div className="container">
					<p>
						Mark Radomski (b. Adelaide, South Australia) is an front-end
						developer and designer based in South East Asia working remotely for
						clients in Australia. He has over 8 years experience working with
						SaaS companies, digital agencies, startups and contemporary visual
						artists.
					</p>
					<p>
						He has extensive JavaScript knowledge spanning React, Angular,
						Backbone, Node.js, TypeScript ... and god forbid, jQuery UI. And as
						such is well versed in transitioning legacy web technology to
						current web standards and frameworks, while keeping an eye on future
						trends.
					</p>
					<p>
						Radomski has a strong UI/UX focus, from creating wire-frames and
						Sketch mockups to implementing designs using scalable and
						maintainable JavaScript and CSS across the full spectrum of devices
						without sacrificing UX. He has years of CSS experience from
						Bootstrap, Material Design and BEM to hand-coding CSS modules and
						styled-components.
					</p>
					<p>
						If you wish to see how he would transition your site from
						Backbone/bootstrap to React and styled-components, you can view the{' '}
						<a
							href="https://github.com/markradomski/sedition-art"
							target="_blank"
							rel="noopener noreferrer"
						>
							repo
						</a>{' '}
						.
						<p>
							Mark Radomski has duel Australian/Polish citizenship and is more
							than happy to travel for the right role.
						</p>
						<p>Cheers</p>
					</p>
				</div>
			</TextContentStyles>
		);
	}
}
