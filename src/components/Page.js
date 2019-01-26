import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import EntityHeader from './EntityHeader';
import Navigation from './Navigation';

const theme = {
	red: '#ff2850',
	black: '#111116',
	grey: '#3A3A3A',
	lightgrey: '#f6f7f8',
	offWhite: '#EDEDED',
	maxWidth: '1200px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
	background: #fff;
	color: ${props => props.theme.black};
	display: flex;
	flex-direction: column;
	a:hover {
		text-decoration: none !important;
	}
	@media only screen and (max-width: 1240px) {
		.container {
			max-width: 1072px;
		}
	}
	@media only screen and (max-width: 1171px) {
		.container {
			max-width: 100%;
			padding-left: 32px;
			padding-right: 32px;
		}
	}
	@media only screen and (max-width: 576px) {
		.container {
			max-width: 100%;
			padding-left: 16px;
			padding-right: 16px;
		}
	}
`;

const Inner = styled.div`
	/* max-width: ${props => props.theme.maxWidth}; */
	/* margin: 0 auto; */
`;

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Georgia',serif;
	/* src: url('/static/sabon-normal-webfont.woff')   
	format('woff'); */
	font-weight: normal;
	font-style: normal;
}
html {
	box-sizing: border-box;
	font-size: 17px;
	overflow-y: scroll;
} 
*, *:before, *:after {
	 box-sizing: inherit;
}
*:focus {
    outline: none;
}
body {
	font-family: "Helvetica Neue", "Arial Nova Condensed", sans-serif;
	line-height: 1.7;
	padding: 0;
	margin: 0;
}
ul, ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}	
li {
  line-height: 22px;
}
button:focus {	
    outline: none;
}
a {
	text-decoration: none;
	color: ${theme.black}; 
}	
`;

export default class extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<StyledPage>
						<Navigation />
						<EntityHeader />
						<Inner>{this.props.children}</Inner>
					</StyledPage>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}
