import styled from 'styled-components';

const HeadLine = styled.h1`
	font-size: ${props => props.size};
	line-height: 1;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.02em;
	@media only screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export default HeadLine;
