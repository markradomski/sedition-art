import styled from 'styled-components';

const EntityHeaderStyles = styled.div`
	min-height: 209px;
	margin-bottom: 32px;
	background-color: ${props => props.theme.lightgrey};
	position: relative;

	.entity-header {
		width: 100%;
		max-width: 180px !important;
	}
	.background {
		background-image: url(https://deaenij3kiw8r.cloudfront.net/system/users/banner_images/155124/orig…al/production-961fba6…-sedition_ban.jpg?1503327060);
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
