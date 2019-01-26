import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const logoPath = `${process.env.PUBLIC_URL}/assets/img/logo.svg`;
const homePath = `${process.env.PUBLIC_URL}/`;
const avatarPath = `${process.env.PUBLIC_URL}/assets/img/headshot-bw.png`;

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

	.dropdownMenu {
		position: absolute;

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
	.avatar {
		overflow: hidden;
		border-radius: 2px;
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
	.menu-dropdown.main {
		.dropdownMenu {
			left: 0;
		}
	}
	.menu-dropdown.account {
		display: none;
		.dropdownMenu {
			right: 0;
		}
	}

	@media only screen and (min-width: 1172px) {
		.menu-dropdown:hover > .dropdownMenu {
			display: block;
		}
		.menu-dropdown.account {
			display: list-item;
		}
	}
`;

const NavigationAccountItems = styled.ul`
	display: none;
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
		.navigation-menu__link {
			text-align: end;
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

const AccountToggle = styled.button`
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
			mainMenuOpen: !prevState.mainMenuOpen,
			accountMenuOpen: false
		}));
	};
	handleAccountToggle = () => {
		this.setState(prevState => ({
			accountMenuOpen: !prevState.accountMenuOpen,
			mainMenuOpen: false
		}));
	};

	render() {
		const { mainMenuOpen, accountMenuOpen } = this.state;
		return (
			<NavigationStyles>
				<div className="container">
					<MenuToggle onClick={this.handleMenuToggle}>
						<FontAwesomeIcon icon={faBars} />
						<div className="label">Menu</div>
					</MenuToggle>
					<Logo href={homePath} />
					<AccountToggle onClick={this.handleAccountToggle}>
						<img
							alt="Avatar"
							class="avatar"
							src={avatarPath}
							width="36"
							height="36"
						/>
					</AccountToggle>
					<NavigationMenuItems open={mainMenuOpen}>
						<li className="menu-dropdown main">
							<a href={homePath} className="navigation-menu__link">
								Browse
							</a>
							<ul className="dropdownMenu">
								<li>
									<a href={homePath}>Artworks</a>
								</li>
								<li>
									<a href={homePath}>Artists</a>
								</li>
								<li>
									<a href={homePath}>Collections</a>
								</li>
								<li>
									<a href={homePath}>Open collections</a>
								</li>
							</ul>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Vault
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Art Stream
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Trade
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								magazine
							</a>
						</li>
						<li className="menu-dropdown account">
							<a href={homePath} className="navigation-menu__link ">
								<img
									alt="Mark Radomski profile"
									className="avatar"
									src={avatarPath}
									width="40"
									height="40"
								/>
							</a>
							<ul className="dropdownMenu">
								<li>
									<a href={homePath}>Profile</a>
								</li>
								<li>
									<a href={homePath}>Account</a>
								</li>
								<li>
									<a href={homePath}>How It works</a>
								</li>
								<li>
									<a href={homePath}>Earn credit</a>
								</li>
								<li>
									<a href={homePath}>Logout</a>
								</li>
							</ul>
						</li>
					</NavigationMenuItems>
					<NavigationAccountItems open={accountMenuOpen}>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Profile
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Account
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								How It works
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Earn credit
							</a>
						</li>
						<li>
							<a href={homePath} className="navigation-menu__link ">
								Logout
							</a>
						</li>
					</NavigationAccountItems>
				</div>
			</NavigationStyles>
		);
	}
}
export default Navigation;
