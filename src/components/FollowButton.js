import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const FollowButtonStyles = styled.a`
	display: flex;
	width: 146px;
	justify-content: space-between;
	background-color: ${props => props.theme.red};
	color: #fff !important;
	transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	border: 3px solid #0000;
	border-radius: 1px;
	letter-spacing: 0.1em;
	font-weight: 500;
	padding: 16px 22px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	vertical-align: middle;
	text-transform: uppercase;
`;

const FollowButton = () => (
	<FollowButtonStyles className="btn">
		<FontAwesomeIcon icon={faEye} />
		<div>Follow</div>
	</FollowButtonStyles>
);

export default FollowButton;
