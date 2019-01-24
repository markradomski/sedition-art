import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const imagePath = `${process.env.PUBLIC_URL}/assets/img/`;

const ArtworkStyles = styled.div`
	a:hover {
		color: #555;
	}
`;

const ImageStyles = styled.div`
	position: relative;
	background-color: #eeeef1;
	display: block;
	overflow: hidden;
	padding-bottom: 100%;
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
`;

const ArtworkContent = styled.div`
	transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	margin-top: 8px;
	line-height: 1;

	.title {
		font-size: 18px;
		font-family: 'Georgia', serif;
		font-style: italic;
		@media only screen and (max-width: 768px) {
			font-size: 16px;
		}
	}
	.header {
		margin-top: 8px;
		font-size: 14px;
		font-weight: bold;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: currentColor;
		@media only screen and (max-width: 768px) {
			margin-top: 6px;
			font-size: 12px;
		}
	}
`;

const Artwork = ({ link, filename, title, header }) => (
	<ArtworkStyles className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4 mb-gutter">
		<a href={link} target="_blank" rel="noopener">
			<ImageStyles>
				<Image src={imagePath + filename} />
			</ImageStyles>
			<ArtworkContent className="row">
				<figcaption className="col">
					<h1 className="header">{header}</h1>
					<div className="title"> {title}</div>
				</figcaption>
			</ArtworkContent>
		</a>
	</ArtworkStyles>
);

export default Artwork;
