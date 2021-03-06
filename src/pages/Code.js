import React, { Component } from 'react';
import Artwork from '../components/Artwork';

import styled from 'styled-components';

const ArtworksList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: minmax(200px, auto);
	grid-gap: 2rem;
`;

export default class Code extends Component {
	render() {
		return (
			<div className="container">
				<ArtworksList>
					<Artwork
						link="http://www.bezor.com.au"
						filename="bezor-site.jpg"
						header="Annette Bezor artist site"
						title="React / styled-components"
					/>
					<Artwork
						link="https://markradomski.github.io/blockchain/"
						filename="blockchain.png"
						header="Blockchain client"
						title="React / Material UI"
					/>
					<Artwork
						link="https://markradomski.github.io/app/preppr/"
						filename="preppr.png"
						header="Preppr android app"
						title="React Native"
					/>
					<Artwork
						link="https://markradomski.github.io/app/womad/"
						filename="womad-futuro.png"
						header="WOMADelaide Music Festival"
						title="Case study and mobile app design"
					/>
					<Artwork
						link="https://markradomski.github.io/app/bezor-software/"
						filename="bezor-software.png"
						header="Bezor software"
						title="Serverless eCommerce store / Firebase"
					/>
					<Artwork
						link="https://markradomski.github.io/app/farnsworth-711/"
						filename="farnsworth-711.png"
						header="Mies van der Rohe 7 Eleven"
						title="3D modelling / Blender"
					/>
					<Artwork
						link="https://markradomski.github.io/app/data-viz/dying-to-be-here/"
						filename="dying-to-be-here.png"
						header="Dying to be here"
						title="Data visualisation / Javascript"
					/>
					<Artwork
						link="https://markradomski.github.io/app/data-viz/pollywaffle/"
						filename="pollywaffle.png"
						header="The Smashed Avocado Wars"
						title="Data visualisation / Javascript"
					/>
				</ArtworksList>
			</div>
		);
	}
}
