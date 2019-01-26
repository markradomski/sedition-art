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
						He has extensive Javascript knowledge spanning React, Angular,
						Backbone, Node.js, TypeScript ... and god forbid, jQuery UI. And as
						such is well versed in transitioning legacy web technology to
						current web standards and frameworks, while keeping an eye on future
						trends.
					</p>
					<p />
					<p>
						If you wish to see how Radomski would transition your site from
						Backbone to React you can view the repo.
					</p>
				</div>
			</TextContentStyles>
		);
	}
}
