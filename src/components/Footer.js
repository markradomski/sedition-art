import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
	font-family: 'Helvetica Neue', 'Arial Nova Condensed', sans-serif;
	color: rgb(153, 153, 156);
	font-size: 13px;
	line-height: 1em;
	background: rgb(246, 247, 248);
	padding: 64px 0px;
	overflow: hidden;
	.footer-column {
		min-height: 1px;
		padding-right: 16px;
		padding-left: 16px;
	}
	h2 {
		color: #333336;
		text-transform: uppercase;
		font-weight: 500;
		font-size: inherit;
		line-height: inherit;
		margin: 0;
		margin-bottom: 32px;
	}
	li {
		margin: 0 0 16px 0;
	}
	a {
		transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		text-decoration: none;
		padding-bottom: 2px;
		border-bottom: 1px solid;
		color: inherit;
		text-transform: uppercase;
		border-color: #0000;
		line-height: 1.4em;
		padding-bottom: 0;
	}
`;
const Footer = () => {
	return (
		<FooterStyles>
			<div className="container">
				<div className="row">
					<div className="footer-column">
						<h2>Quick Links</h2>
						<ul>
							<li>
								<a
									href="https://github.com/markradomski"
									target="_blank"
									rel="noopener noreferrer"
								>
									Git
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/markradomski/"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="mailto:radomski.mark@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</FooterStyles>
	);
};

export default Footer;
