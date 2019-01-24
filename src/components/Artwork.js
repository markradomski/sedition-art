import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProgressiveImage from './ProgressiveImage';
const imagePath = `${process.env.PUBLIC_URL}/assets/img/`;

const ArtworkStyles = styled.a`
	:hover {
		color: #555;
	}
`;

const ImageStyles = styled.div`
	position: relative;
	background-color: #eeeef1;
	display: block;
	overflow: hidden;
	padding-bottom: 100%;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
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
	<ArtworkStyles href={link} target="_blank" rel="noopener noreferrer">
		<ImageStyles>
			<ProgressiveImage
				image={'https://markradomski.github.io/images/' + filename}
				preview={imagePath + 'thumbnail/bezor-site.jpg'}
			/>
		</ImageStyles>
		<ArtworkContent className="row">
			<figcaption className="col">
				<h1 className="header">{header}</h1>
				<div className="title"> {title}</div>
			</figcaption>
		</ArtworkContent>
	</ArtworkStyles>
);

Artwork.propTypes = {
	link: PropTypes.string.isRequired,
	filename: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired
};

export default Artwork;
