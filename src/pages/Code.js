import React, { Component } from 'react';
import Artwork from '../components/Artwork';

export default class Code extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="http://www.bezor.com.au"
							filename="bezor-site.jpg"
							header="Annette Bezor artist site"
							title="React / styled-components"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/blockchain/"
							filename="blockchain.png"
							header="Blockchain client"
							title="React / Material UI"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/preppr/"
							filename="preppr.png"
							header="Preppr android app"
							title="React Native"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/womad/"
							filename="womad-futuro.png"
							header="WOMADelaide Music Festival"
							title="Case study and mobile app design"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/bezor-software/"
							filename="bezor-software.png"
							header="Bezor software"
							title="Serverless eCommerce store / Firebase"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/farnsworth-711/"
							filename="farnsworth-711.png"
							header="Mies van der Rohe 7 Eleven"
							title="3D modelling / Blender"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/data-viz/dying-to-be-here/"
							filename="dying-to-be-here.png"
							header="Dying to be here"
							title="Data visualisation / Javascript"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/data-viz/pollywaffle/"
							filename="pollywaffle.png"
							header="The Smashed Avocado Wars"
							title="Data visualisation / Javascript"
						/>
					</div>
					<div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
						<Artwork
							link="https://markradomski.github.io/app/data-viz/there-will-be-blood/"
							filename="unemployment-map.jpg"
							header="There will be blood"
							title="Data visualisation / R"
						/>
					</div>
				</div>
			</div>
		);
	}
}
