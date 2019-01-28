import styled from 'styled-components';

const EntityHeaderStyles = styled.div`
	min-height: 209px;
	margin-bottom: 32px;
	background-color: ${props => props.theme.lightgrey};
	position: relative;
	.entity-header-container {
		align-items: center !important;
		padding-top: 16px !important ;
		@media (min-width: 572px) {
			padding-top: 32px !important;
		}
	}

	.entity-header {
		width: 100%;
		max-width: 180px !important;
	}
	.follow-button {
		flex: 0 0 100%;
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 16px;
		padding-left: 16px;
		max-width: 100%;
		margin-top: 16px;
		@media (min-width: 768px) {
			flex: 0 0 auto;
			width: auto;
			max-width: none;
		}
		@media (min-width: 768px) {
			margin-top: 0;
		}
		@media (min-width: 768px) {
			flex: 0 0 auto;
			width: auto;
			max-width: none;
		}
	}
	.background {
		background-image: url(https://deaenij3kiw8r.cloudfront.net/system/users/banner_images/155124/original/production-961fba6a4f162bcfe859754ec87a576a-sedition_ban.jpg?1503327060);
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: none;
		@media only screen and (min-width: 576px) {
			display: block;
		}
	}
	@media (max-width: 578px) {
		.container [class^='col-'],
		.container [class*=' col-'] {
			padding-left: 8px;
			padding-right: 8px;
		}
	}
`;

export default EntityHeaderStyles;
