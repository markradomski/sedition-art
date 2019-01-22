import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

/**
 Notes:
	- ThemeProvider uses react context -> passing props to it allows child components direct access (no more prop drillin)

  
 */

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
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	/* padding: 2rem; */
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Helvetica Neue", "Arial Nova Condensed", sans-serif;
	/* src: url('/static/radnikanext-medium-webfont.woff2')  
	format('woff2'); */
	font-weight: normal;
	font-style: normal;
}
html {
	box-sizing: border-box;
	font-size: 18px;
} 
*, *:before, *:after {
	 box-sizing: inherit
}
body {
	padding: 0;
	margin: 0;
	line-height: 1.6;
	/* font-family: 'radnika_next' ; */
}
a {
	text-decoration: none;
	color: ${theme.black} // no access to ThemeProvider here
}
`;

export default class extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<StyledPage>
						<Inner>{this.props.children}</Inner>
					</StyledPage>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}
