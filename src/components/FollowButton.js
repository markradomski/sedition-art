import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

const FollowButtonStyles = styled.a`
	display: flex;
	width: fit-content;
	justify-content: space-between;
	background-color: ${props =>
		props.following ? props.theme.black : props => props.theme.red};
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
	cursor: pointer;
	:hover {
		color: #fff;
		background-color: ${props =>
			props.following ? props.theme.black : props => props.theme.darkred};
	}
	.label {
		margin-left: 10px;
	}
`;

class FollowButton extends Component {
	state = {
		following: false
	};

	handleToggle = () => {
		this.setState(prevState => ({
			following: !prevState.following
		}));
	};

	render() {
		const { following } = this.state;
		return (
			<FollowButtonStyles
				className="btn"
				onClick={this.handleToggle}
				following={following}
			>
				<FontAwesomeIcon icon={following ? faTimes : faEye} />
				<div className="label">{following ? 'Un-follow' : 'Follow'} </div>
			</FollowButtonStyles>
		);
	}
}
export default FollowButton;
