import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavigationStyles from './styles/NavigationStyles';

const logoPath = `${process.env.PUBLIC_URL}/assets/img/logo.svg`;
const homePath = `${process.env.PUBLIC_URL}/`;
const avatarPath = `${process.env.PUBLIC_URL}/assets/img/headshot-bw.png`;

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
		.drop-down-menu {
			left: 0;
		}
	}
	.menu-dropdown.account {
		display: none;
		.drop-down-menu {
			right: 0;
		}
	}

	@media only screen and (min-width: 1172px) {
		.menu-dropdown:hover > .drop-down-menu {
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
		.nav-menu-link {
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
	svg {
		font-size: 1.2rem;
	}
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
							className="avatar"
							src={avatarPath}
							width="36"
							height="36"
						/>
					</AccountToggle>
					<NavigationMenuItems open={mainMenuOpen}>
						<li className="menu-dropdown main">
							<a href={homePath} className="nav-menu-link">
								Browse
							</a>
							<ul className="drop-down-menu">
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
							<a href={homePath} className="nav-menu-link">
								Vault
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								Art Stream
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								Trade
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								magazine
							</a>
						</li>
						<li className="menu-dropdown account">
							<a href={homePath} className="nav-menu-link">
								<img
									alt="Mark Radomski profile"
									className="avatar"
									src={avatarPath}
									width="40"
									height="40"
								/>
							</a>
							<ul className="drop-down-menu">
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
							<a href={homePath} className="nav-menu-link">
								Profile
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								Account
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								How It works
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
								Earn credit
							</a>
						</li>
						<li>
							<a href={homePath} className="nav-menu-link">
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
