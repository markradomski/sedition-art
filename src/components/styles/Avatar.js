import styled from 'styled-components';

const Avatar = styled.a`
	border: 10px solid #fff;
	border-radius: 0;
	overflow: hidden;
	display: block !important;
	> img {
		background-color: ${props => props.theme.grey}
		border-radius: 2px;
		max-width: 100%;
		width: auto;
		height: auto;
		vertical-align: middle;
		border: 0;
	}
`;

export default Avatar;
