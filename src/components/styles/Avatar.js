import styled from 'styled-components';

const Avatar = styled.a`
	position: relative;
	background-color: #eeeef1;
	display: block;
	overflow: hidden;
	padding-bottom: 100%;
		> img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border: 10px solid #fff
		border-radius: 2px;
		object-fit: cover;
		}
`;

export default Avatar;
