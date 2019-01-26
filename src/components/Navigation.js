import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const logoPath = `${process.env.PUBLIC_URL}/assets/img/logo.svg`;

const NavigationStyles = styled.div`
	position: relative;
	height: 80px;
	font-family: Din, 'Helvetica Neue', 'Arial Nova Condensed', sans-serif;
	font-size: 16px;
	color: rgb(153, 153, 156);
	z-index: 1037;
	background: rgb(17, 17, 22);

	@media only screen and (max-width: 1171px) {
		height: 64px;
	}
	.container {
		display: flex;
		justify-content: space-between;
		height: 100%;
		@media only screen and (max-width: 1171px) {
			justify-content: center;
			align-items: center;
		}
	}

	.dropdown-menu--dark {
		position: absolute;
		left: 0;
		top: 100%;
		display: none;
		font-size: 14px;
		margin: 1px 0 0;
		margin-top: -1px;
		padding: 7px 0;
		background: #2b2b2b;
		border: 0 none;
		box-shadow: 0 2px 13px rgba(0, 0, 0, 0.1);
		@media only screen and (max-width: 1171px) {
			min-width: 100%;
		}
		> li > a {
			display: block;
			padding: 6px 13px;
			clear: both;
			line-height: 22px;
			color: #99999c;
			white-space: nowrap;
			letter-spacing: -0.02em;
			transition: 'background 0.1s ease-in, color 0.1s ease-in';
			text-transform: uppercase;
			padding: 10px 45px 10px 15px;
			background: none;
			font-weight: 500;
			:hover {
				color: #fff;
				background: #11111c;
			}
		}
	}
	.navigation-menu__link {
		display: block;
		padding: 20px 15px;
		line-height: 40px;
		vertical-align: middle;
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;

		:hover {
			background-color: #161619;
			background-image: linear-gradient(#111114, #111114 50%, #2c2c2c);
			background-repeat: no-repeat;
			color: #fff;

			@media only screen and (max-width: 1171px) {
				background: #222;
			}
		}
	}
`;

const NavigationMenuItems = styled.ul`
	display: flex;
	align-items: center;
	position: relative;
	margin: 0;
	list-style: none;
	font-weight: 500;
	@media only screen and (max-width: 1171px) {
		display: ${props => (props.open ? 'flex' : 'none')};
		flex-direction: column;
		align-items: stretch;
		position: absolute;
		width: 100%;
		left: 0;
		top: 100%;
		background: #111116;
	}
	@media only screen and (min-width: 1172px) {
		.menu-dropdown:hover > .dropdown-menu--dark {
			display: block;
		}
	}
`;
const MenuToggle = styled.button`
	display: none;
	align-items: center;
	border-color: #0000;
	background: none;
	outline: 0;
	border: 0;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 0.02em;
	color: #fff;
	cursor: pointer;
	.label {
		font-size: 14px;
		margin-left: 5px;
	}
	@media only screen and (max-width: 1171px) {
		display: flex;
	}
`;

const Logo = styled.a`
	align-self: center;
	width: 142px;
	height: 36px;
	overflow: hidden;
	background: url(${logoPath}) no-repeat;
	background-size: contain;
	@media only screen and (max-width: 1171px) {
		width: 120px;
		height: 30px;
		margin: auto;
	}
`;

class Navigation extends Component {
	state = {
		accountMenuOpen: false,
		mainMenuOpen: false
	};

	handleMenuToggle = () => {
		this.setState(prevState => ({
			mainMenuOpen: !prevState.mainMenuOpen
		}));
	};

	render() {
		const { mainMenuOpen } = this.state;
		return (
			<NavigationStyles>
				<div className="container">
					<MenuToggle onClick={this.handleMenuToggle}>
						<FontAwesomeIcon icon={faBars} />
						<div className="label">Menu</div>
					</MenuToggle>
					<Logo href="/" />
					<NavigationMenuItems open={mainMenuOpen}>
						<li className="menu-dropdown">
							<a href="/" className="navigation-menu__link">
								Browse
							</a>
							<ul className="dropdown-menu--dark">
								<li>
									<a href="/">Artworks</a>
								</li>
								<li>
									<a href="/">Artists</a>
								</li>
								<li>
									<a href="/">Collections</a>
								</li>
								<li>
									<a href="/">Open collections</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/" className="navigation-menu__link ">
								Vault
							</a>
						</li>
						<li>
							<a href="/" className="navigation-menu__link ">
								Art Stream
							</a>
						</li>
						<li>
							<a href="/" className="navigation-menu__link ">
								Trade
							</a>
						</li>
						<li>
							<a href="/" className="navigation-menu__link ">
								magazine
							</a>
						</li>
					</NavigationMenuItems>
				</div>
			</NavigationStyles>
		);
	}
}
export default Navigation;
