import styled from 'styled-components';

const EntityHeaderStyles = styled.div`
	min-height: 209px;
	margin-bottom: 32px;
	background-color: ${props => props.theme.lightgrey};
	.container {
		max-width: 100%;
		padding-left: 32px;
		padding-right: 32px;
	}
	.entity-header {
		max-width: 180px !important;
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
