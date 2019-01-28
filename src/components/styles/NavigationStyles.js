import styled from 'styled-components';

const NavigationStyles = styled.div`
	position: relative;
	height: 80px;
	font-family: 'Helvetica Neue', 'Arial Nova Condensed', sans-serif;
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

	.drop-down-menu {
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

	.nav-menu-link {
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

export default NavigationStyles;
